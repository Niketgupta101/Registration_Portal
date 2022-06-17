const Year = require('../models/GraduationYear');
const { InfData } = require('../models/InfData');
const { JnfData } = require('../models/JnfData');
const Company = require('../models/company_details');

const getAllJobs = async (req, res, next) => {
  let { pageno, pagelimit } = req.params;
  try {
    pagelimit = parseInt(pagelimit) || 12;
    pageNo = parseInt(pageno) || 1;
    let offset = pagelimit * (pageno - 1);

    let infList = await InfData.find({ status: 'complete' })
      .sort({
        updatedAt: -1,
      })
      .skip(offset)
      .limit(pagelimit);
    let jnfList = await JnfData.find({ status: 'complete' })
      .sort({
        updatedAt: -1,
      })
      .skip(offset)
      .limit(pagelimit);

    let jobs = [...infList, ...jnfList];

    jobs.sort(function (a, b) {
      let dateA = Date(a.data.updatedAt);
      let dateB = Date(b.data.updatedAt);
      return dateB - dateA;
    });

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    return next(error);
  }
};

const getAllJobsForUser = async (req, res, next) => {
  const userId = req.user._id;
  let { pageno, pagelimit } = req.params;
  try {
    pagelimit = parseInt(pagelimit) || 12;
    pageNo = parseInt(pageno) || 1;
    let offset = pagelimit * (pageno - 1);

    let infList = await InfData.find({ userId })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pagelimit);

    let jnfList = await JnfData.find({ userId })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pagelimit);

    let jobs = [...infList, ...jnfList];

    jobs.sort(function (a, b) {
      let dateA = a.data.updatedAt;
      let dateB = b.data.updatedAt;
      return dateB - dateA;
    });

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    return next(error);
  }
};

const updateGraduationYear = async (req, res, next) => {
  const { graduationYear } = req.body;
  try {
    let year = await Year.findOne({ id: '1' });

    year.set({ graduationYear });

    await year.save();

    res.status(201).json({ success: true, year });
  } catch (error) {
    return next(error);
  }
};

const getGraduationYear = async (req, res, next) => {
  try {
    let year = await Year.findOne({ id: '1' });

    res.status(201).json({ success: true, year: year.graduationYear });
  } catch (error) {
    return next(error);
  }
};

const getPendingJobForms = async (req, res, next) => {
  let { pagelimit, pageno } = req.params;
  const userId = req.user._id;
  try {
    pagelimit = parseInt(pagelimit) || 12;
    pageNo = parseInt(pageno) || 1;
    let offset = pagelimit * (pageno - 1);

    let infs = await InfData.find({
      status: 'complete',
      userId,
    })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pagelimit);
    let jnfs = await JnfData.find({
      status: 'complete',
      userId,
    })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pagelimit);

    let jobs = [...infs, ...jnfs];

    jobs.sort(function (a, b) {
      let dateA = a.data.updatedAt;
      let dateB = b.data.updatedAt;
      return dateB - dateA;
    });

    res.status(201).json({ success: true, jobs });
  } catch (error) {
    return next(error);
  }
};

const companiesCount = async (req, res, next) => {
  try {
    let companyCount = await Company.find({}).count();

    res.status(201).json({ success: true, companyCount });
  } catch (error) {
    return next(error);
  }
};

const infCount = async (req, res, next) => {
  try {
    let infCount = await InfData.find({}).count();

    res.status(201).json({ success: true, infCount });
  } catch (error) {
    return next(error);
  }
};

const jnfCount = async (req, res, next) => {
  try {
    let jnfCount = await JnfData.find({}).count();

    res.status(201).json({ success: true, jnfCount });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllJobs,
  updateGraduationYear,
  getGraduationYear,
  getPendingJobForms,
  getAllJobsForUser,
  companiesCount,
  infCount,
  jnfCount,
};
