const { INF, INFstatus } = require('../models/INF');
const ErrorResponse = require('../utils/errorResponse');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

const fetchInfById = async (id, next) => {
    try {
        let infStatus = await INFstatus.findOne({ infId: id });

        if(!infStatus)
        return next( new ErrorResponse('No INF found with given id', 404));

        // if(infStatus.progress !== "incomplete")
        // return next(new ErrorResponse('No changes are allowed for this inf.', 400));

        let inf = await INF.findOne({ _id: id });

        console.log(inf);

        return { success: true, inf };
    } catch (error) {
        return next(error);
    }
}

const fetchAllInfForUser = async (offset, pagelimit, userId, next) => {
    try {
        let infList = await INFstatus.find({ userId }).populate('infId').sort({ updatedAt: -1 }).skip(offset).limit(pagelimit);

        return { success: true, infList };
    } catch (error) {
        return next(error);
    }
}

const fetchLatestInfOfUser = async (loggedUserId, next) => {
    try {
        let inf = await INF.find({ userId: loggedUserId }).sort({ updatedAt: -1 }).limit(1);

        return { success: true, inf };
    } catch (error) {
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
    console.log({ id, details });
    try {
        let infStatus = await INFstatus.findOne({ infId: id });

        if(!infStatus)
        return next( new ErrorResponse('No INF found with given id', 404));

        if(infStatus.progress !== "incomplete")
        return next(new ErrorResponse('No changes are allowed for this inf.', 400));

        let inf = await INF.findOne({ _id: id });

        console.log(inf);
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

        return { success: true, message: "Submitted Successfully", infStatus };
    } catch (error) {
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

module.exports = { fetchInfById, fetchAllInfForUser, fetchLatestInfOfUser, fetchAllInf, createInf, saveInfById, submitInfById, removeINFById };