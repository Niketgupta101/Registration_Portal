const { JNF, JNFstatus } = require('../models/JNF');
const ErrorResponse = require('../utils/errorResponse');
const { fillJNFDoc } = require('../utils/service/createPDF');

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

const fetchAllJnfForUser = async (offset, pagelimit, userId, next) => {
    try {
        let jnfList = await JNFstatus.find({ userId }).populate('jnfId').sort({ updatedAt: -1 }).skip(offset).limit(pagelimit);

        return { success: true, jnfList };
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

        if(jnfStatus.progress !== "incomplete")
        return next(new ErrorResponse('No changes are allowed for this jnf.', 400));

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

module.exports = { fetchJnfById, fetchAllJnfForUser, fetchLatestJnfOfUser, fetchAllJnf, createJnf, saveJnfById, submitJnfById, removeJNFById };