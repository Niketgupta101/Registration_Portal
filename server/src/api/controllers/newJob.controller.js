const Year = require('../models/GraduationYear');
const { NewInf } = require('../models/InfData');
const { NewJnf } = require('../models/JnfData');
const Company = require('../models/company_details');

const getAllJobs = async (req, res, next) => {
  let { pageno, pagelimit } = req.params;
  try {
    pagelimit = parseInt(pagelimit) || 12;
    pageNo = parseInt(pageno) || 1;
    let offset = pagelimit * (pageno - 1);

    let infList = await NewInf.find({ status: 'complete' }).sort({
      updatedAt: -1,
    });
    let jnfList = await NewJnf.find({ status: 'complete' }).sort({
      updatedAt: -1,
    });

    let jobs = [...infList, ...jnfList];

    jobs.sort(function (a, b) {
      let dateA = Date(a.updatedAt);
      let dateB = Date(b.updatedAt);
      return dateB - dateA;
    });
    jobs = jobs.slice(offset, pagelimit + offset);
    res
      .status(201)
      .json({ success: true, jobs, count: infList.length + jnfList.length });
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

    let infList = await NewInf.find({ userId }).sort({ updatedAt: -1 });

    let jnfList = await NewJnf.find({ userId }).sort({ updatedAt: -1 });

    let jobs = [...infList, ...jnfList];

    jobs.sort(function (a, b) {
      let dateA = a.updatedAt;
      let dateB = b.updatedAt;
      return dateB - dateA;
    });
    jobs = jobs.slice(offset, pagelimit + offset);
    res
      .status(201)
      .json({ success: true, jobs, count: infList.length + jnfList.length });
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

    let infs = await NewInf.find({
      status: 'incomplete',
      userId,
    }).sort({ updatedAt: -1 });
    let jnfs = await NewJnf.find({
      status: 'incomplete',
      userId,
    }).sort({ updatedAt: -1 });

    let jobs = [...infs, ...jnfs];

    jobs.sort(function (a, b) {
      let dateA = a.updatedAt;
      let dateB = b.updatedAt;
      return dateB - dateA;
    });
    jobs = jobs.slice(offset, pagelimit + offset);

    res
      .status(201)
      .json({ success: true, jobs, count: infs.length + jnfs.length });
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
    let infCount = await NewInf.find({}).count();

    res.status(201).json({ success: true, infCount });
  } catch (error) {
    return next(error);
  }
};
const infCountForUser = async (req, res, next) => {
  let userId = req.user._id;
  try {
    let infCount = await NewInf.find({ userId }).count();

    res.status(201).json({ success: true, infCount });
  } catch (error) {
    return next(error);
  }
};

const jnfCount = async (req, res, next) => {
  try {
    let jnfCount = await NewJnf.find({}).count();

    res.status(201).json({ success: true, jnfCount });
  } catch (error) {
    return next(error);
  }
};
const jnfCountForUser = async (req, res, next) => {
  let userId = req.user._id;
  try {
    let jnfCount = await NewJnf.find({}).count();

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
  infCountForUser,
  jnfCountForUser,
};
