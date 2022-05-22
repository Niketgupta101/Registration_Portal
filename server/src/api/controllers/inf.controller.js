const {
  fetchInfById,
  fetchAllInfForUser,
  fetchLatestInfOfUser,
  fetchAllInf,
  createInf,
  saveInfById,
  submitInfById,
  removeINFById,
  searchInfByCompany,
} = require('../services/infProvider');

const getInfById = async (req, res, next) => {
  const { id } = req.params;

  try {
    let response = await fetchInfById(id, next);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllInfForUser = async (req, res, next) => {
  let { userId } = req.params;
  let { pageno, pagelimit } = req.params;
  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);
    let response = await fetchAllInfForUser(userId, offset, pagelimit, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getLatestInfOfUser = async (req, res, next) => {
  const loggedUserId = req.user._id;

  try {
    let response = await fetchLatestInfOfUser(loggedUserId, next);

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllInf = async (req, res, next) => {
  let { pageno, pagelimit } = req.params;
  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await fetchAllInf(offset, pagelimit, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const createNewInf = async (req, res, next) => {
  const details = req.body;
  const loggedUserId = req.user._id;

  try {
    let response = await createInf(loggedUserId, details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const updateInfById = async (req, res, next) => {
  const { id } = req.params;
  const details = req.body;

  try {
    let response = await saveInfById(id, details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const submitInf = async (req, res, next) => {
  const { id } = req.params;

  try {
    let response = await submitInfById(id, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteInfById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let response = await removeINFById(id, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const searchInfByPattern = async (req, res, next) => {
  let { pattern, pageno, pagelimit } = req.params;
  console.log({ pattern, pageno, pagelimit });

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await searchInfByCompany(pattern, offset, pagelimit, next);
    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getInfById,
  getAllInfForUser,
  searchInfByPattern,
  getLatestInfOfUser,
  getAllInf,
  createNewInf,
  updateInfById,
  submitInf,
  deleteInfById,
};
