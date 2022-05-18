const { INF, INFstatus } = require('../models/INF');
const { JNF, JNFstatus } = require('../models/JNF');
const Year = require('../models/GraduationYear');

const getAllJobs = async (req, res, next) => {
  try {
    let infList = await INFstatus.find({ progress: 'submitted' })
      .populate('data')
      .sort({
        createdAt: -1,
      });
    let jnfList = await JNFstatus.find({ progress: 'submitted' })
      .populate('data')
      .sort({
        createdAt: -1,
      });

    console.log(infList.length, jnfList.length);

    let jobs = [...infList, ...jnfList];

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllJobsForUser = async (req, res, next) => {
  const userId = req.user._id;
  try {
    let infList = await INFstatus.find({ userId })
      .populate('data')
      .sort({ createdAt: -1 });

    let jnfList = await JNFstatus.find({ userId })
      .populate('data')
      .sort({ createdAt: -1 });

    console.log(infList.length, jnfList.length);

    let jobs = [...infList, ...jnfList];

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

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
};

const getGraduationYear = async (req, res, next) => {
  try {
    let year = await Year.findOne({ _id: '1' });

    res.status(201).json({ success: true, year });
  } catch (error) {
    next(error);
  }
};

const getPendingJobForms = async (req, res, next) => {
  const userId = req.user._id;
  console.log({ userId });
  try {
    let infs = await INFstatus.find({
      progress: 'incomplete',
      userId,
    }).populate('data');
    let jnfs = await JNFstatus.find({
      progress: 'incomplete',
      userId,
    }).populate('data');

    let jobs = [];

    for (let inf in infs) {
      jobs.push(infs[inf]);
    }
    for (let jnf in jnfs) {
      jobs.push(jnfs[jnf]);
    }

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllJobs,
  updateGraduationYear,
  getGraduationYear,
  getPendingJobForms,
  getAllJobsForUser,
};
