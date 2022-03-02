const {INF, INFstatus} = require('../models/INF');
const {JNF, JNFstatus} = require('../models/JNF');
const Year = require('../models/GraduationYear');

const getAllJobs = async (req, res, next) => {
    try {
        let infList = await INF.find({}).sort({createdAt: -1});
        let jnfList = await JNF.find({}).sort({createdAt: -1});

        let jobs = [ ...infList, ...jnfList ];
        console.log(jobs);

        res.status(201).json({ success: true, jobs });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const updateGraduationYear = async (req, res, next) => {
    const { graduationYear } = req.body;
    try {
        let year = await Year.findOne({ _id: '1' });

        year.set({ graduationYear });

        await year.save();

        res.status(201).json({ success: true, year });
    } catch (error) {
        next(error);
    }
}  

const getGraduationYear = async (req, res, next) => {
    try {
        let year = await Year.findOne({ _id: '1' });

        res.status(201).json({ success: true, year });
    } catch (error) {
        next(error);
    }
}  

const getPendingJobForms = async (req, res, next) => {
    const userId = req.user._id;
    try {
        let infs = await INFstatus.find({ progress: "incomplete", userId }, { infId: 1, _id: 0 }).populate('infId');
        let jnfs = await JNFstatus.find({ progress: "incomplete", userId }, { infId: 1, _id: 0 }).populate('jnfId');

        let jobs = [];

        for(let inf in infs)
        {
            jobs.push(infs[inf].infId);
        }
        for(let jnf in jnfs)
        {
            jobs.push(jnfs[jnf].jnfId);
        }

        res.status(201).json({ success: true, jobs });
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllJobs, updateGraduationYear, getGraduationYear, getPendingJobForms };