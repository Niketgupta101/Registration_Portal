const { JNF, JNFstatus } = require('../models/JNF');
const ErrorResponse = require('../utils/errorResponse');
const { fillJNFDoc } = require('../utils/service/PDFservice/createPDF');
const { readSheet, updateSheet } = require('../utils/service/GSheets');


const fetchJnfById = async (id, next) => {
    try {
        let jnf = await JNF.findOne({ _id: id });

        if(!jnf)
        return next( new ErrorResponse('No JNF found with given id.', 404));

        return { success: true, jnf };
    } catch (error) {
        return next(error);
    }
}

const fetchAllJnfForUser = async (userId, next) => {
    try {
        let jnfList = await JNF.find({ userId }).sort({ updatedAt: -1 });

        return { success: true, jobs: jnfList };
    } catch (error) {
        return next(error);
    }
}

const fetchLatestJnfOfUser = async (loggedUserId, next) => {
    try {
        let jnf = await JNF.find({ userId: loggedUserId }).sort({ updatedAt: -1 }).limit(1);

        return { success: true, jnf };
    } catch (error) {
        return next(error);
    }
}

const fetchAllJnf = async (offset, pagelimit, next) => {
    try {
        let jnfList = await JNFstatus.find().populate('jnfId').sort({ updatedAt: -1 }).skip(offset).limit(pagelimit);

        return { success: true, jnfList }; 
    } catch (error) {
        return next(error);
    }
}

const createJnf = async (loggedUserId, details,  next) => {
    try {
        let newJnf = await JNF.create({ userId: loggedUserId, ...details });

        await JNFstatus.create({ userId: loggedUserId, jnfId: newJnf._id, progress: "incomplete" });

        return { success: true, newJnf };
    } catch (error) {
        return next(error);
    }
}

const saveJnfById = async (id, details, next) => {
    try {
        let jnfStatus = await JNFstatus.findOne({ jnfId: id });

        if(!jnfStatus)
        return next( new ErrorResponse('No JNF found with given id', 404));

        // if(jnfStatus.progress !== "incomplete")
        // return next(new ErrorResponse('No changes are allowed for this jnf.', 400));

        let jnf = await JNF.findOne({ _id: id });

        jnf.set({ ...details });

        await jnf.save();

        return { success: true, jnf };
    } catch (error) {
        return next(error);
    }
}

const submitJnfById = async (id, next) => {
    try {
        let jnf = await JNF.findOne({ _id: id });

        if(!jnf)
        return next(new ErrorResponse("No JNF found with given id", 404));

        let jnfStatus = await JNFstatus.findOne({ jnfId: id });

        jnfStatus.set({ progress: "submitted" });
        
        await jnfStatus.save();

        await fillJNFDoc(jnf);

        await updateJnfInGSheets(jnf);

        return { success: true, message: "Submitted Successfully", jnf };
    } catch (error) {
        return next(error);
    }
}

const removeJNFById = async (id, next) => {
    try {
        let jnf = await JNF.findOne({ _id: id });

        if(!jnf)
        return next(new ErrorResponse("No JNF found with given id", 404));

        await jnf.remove();
        let jnfStatus = await JNFstatus.find({ jnfId: id });
        await jnfStatus.remove();

        return { success: true, jnf };
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

const updateJnfInGSheets = async (jnf) => {

    let details = [
        jnf.userId,
        jnf._id.valueOf(),
        ...getValues(jnf.Company_Overview),
        // ...getValues(jnf.Job_Details),
        inf.Job_Details.Designation,
        // ...getValues(jnf.Salary_Details),
        jnf.previewLink,
        jnf.downloadLink,
        jnf.createdAt,
        jnf.updatedAt
    ]

    let data = await readSheet('1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4', 'JNF', 'A1:J');
    data.push(details);
    await updateSheet('1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4', 'JNF',data, 'A!:J');
}

module.exports = { fetchJnfById, fetchAllJnfForUser, fetchLatestJnfOfUser, fetchAllJnf, createJnf, saveJnfById, submitJnfById, removeJNFById };