const INF = require('../models/INF');
const JNF = require('../models/JNF');
const Year = require('../models/GraduationYear');

const getAllJobs = async (req, res, next) => {
    try {
        let infList = await INF.find().sort({createdAt: -1});
        let jnfList = await JNF.find().sort({createdAt: -1});

        let jobs = { ...infList, ...jnfList };
        console.log(jobs);

        res.status(201).json({ success: true, jobs });
    } catch (error) {
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

        rea.status(201).json({ success: true, year });
    } catch (error) {
        next(error);
    }
}  

module.exports = { getAllJobs, updateGraduationYear, getGraduationYear };