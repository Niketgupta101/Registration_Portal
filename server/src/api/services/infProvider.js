const path = require('path');
const { INF, INFstatus } = require('../models/INF');
const ErrorResponse = require('../utils/errorResponse');
const { fillINFDoc } = require('../utils/service/PDFservice/createPDF');
const { uploadFile } = require('../utils/service/PDFservice/upload');
const { readSheet, updateSheet } = require('../utils/service/GSheets');

const fetchInfById = async (id, next) => {
    try {
        let infStatus = await INFstatus.findOne({ infId: id });

        if(!infStatus)
        return next( new ErrorResponse('No INF found with given id', 404));

        let inf = await INF.findOne({ _id: id });


        return { success: true, inf };
    } catch (error) {
        return next(error);
    }
}

const fetchAllInfForUser = async (userId, next) => {
    try {
        let infList = await INFstatus.find({ userId }).populate('infId').sort({ updatedAt: -1 });

        let jobs = [];

        for(let inf in infList)
        {
            jobs.push(infList[inf].infId);
        }

        return { success: true, jobs };
    } catch (error) {
        return next(error);
    }
}

const fetchLatestInfOfUser = async (loggedUserId, next) => {
    try {
        let inf = await INF.find({ userId: loggedUserId }).sort({ updatedAt: -1 }).limit(1);

        return { success: true, inf };
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

const fetchAllInf = async (offset, pagelimit, next) => {
    try {
        let infList = await INFstatus.find().populate('infId').sort({ updatedAt: -1 }).skip(offset).limit(pagelimit);

        return { success: true, infList }; 
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

const createInf = async (loggedUserId, details,  next) => {
    try {
        let newInf = await INF.create({ userId: loggedUserId, ...details });

        await INFstatus.create({ userId: loggedUserId, infId: newInf._id, progress: "incomplete" });

        return { success: true, newInf };
    } catch (error) {
        return next(error);
    }
}

const saveInfById = async (id, details, next) => {
    try {
        let infStatus = await INFstatus.findOne({ infId: id });

        if(!infStatus)
        return next( new ErrorResponse('No INF found with given id', 404));

        if(infStatus.progress !== "incomplete")
        return next(new ErrorResponse('No changes are allowed for this inf.', 400));

        let inf = await INF.findOne({ _id: id });

        inf.set({ ...details });

        await inf.save();

        return { success: true, inf };
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

const submitInfById = async (id, next) => {
    try {
        let inf = await INF.findOne({ _id: id });

        if(!inf)
        return next(new ErrorResponse("No INF found with given id", 404));

        let infStatus = await INFstatus.findOne({ infId: id });

        infStatus.set({ progress: "submitted" });

        await infStatus.save();
        await fillINFDoc(inf);

        await updateInfInGSheets(inf);

        return { success: true, message: "Submitted Successfully", infStatus };
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

const removeINFById = async (id, next) => {
    try {
        let inf = await INF.findOne({ _id: id });

        if(!inf)
        return next(new ErrorResponse("No INF found with given id", 404));

        await inf.remove();
        let infStatus = await INFstatus.find({ infId: id });
        await infStatus.remove();

        return { success: true, inf };
    } catch (error) {
        return next(error);
    }
}

const getValues = async (data) => {
    let values = [];
    for(let i in data)
    {
        values.push(data[i]);
    }
    return values;
}

const updateInfInGSheets = async (inf) => {

    let details = [
        inf._id.valueOf(),
        inf.userId,
        inf.Company_Overview.Name_Of_The_Company,
        // ...getValues(inf.Intern_Profile),
        inf.Intern_Profile.Job_Designation,
        // ...getValues(inf.Salary_Details),
        inf.previewLink,
        inf.downloadLink,
        inf.createdAt,
        inf.updatedAt
    ]

    let data = await readSheet('1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4', 'INF', 'A1:J');
    data.push(details);
    await updateSheet('1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4', 'INF',data, 'A1:J');
}

module.exports = { fetchInfById, fetchAllInfForUser, fetchLatestInfOfUser, fetchAllInf, createInf, saveInfById, submitInfById, removeINFById };