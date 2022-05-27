const {
  fetchJnfById,
  fetchAllJnfForUser,
  fetchLatestJnfOfUser,
  fetchAllJnf,
  createJnf,
  saveJnfById,
  submitJnfById,
  removeJnfById,
  searchJnfByCompany,
  removeJNFById,
} = require('../services/jnfProvider');

const getJnfById = async (req, res, next) => {
  const { id } = req.params;

  try {
    let response = await fetchJnfById(id, next);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllJnfForUser = async (req, res, next) => {
  let { userId } = req.params;
  let { pageno, pagelimit } = req.params;

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);
    let response = await fetchAllJnfForUser(userId, offset, pagelimit, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getLatestJnfOfUser = async (req, res, next) => {
  const loggedUserId = req.user._id;

  try {
    let response = await fetchLatestJnfOfUser(loggedUserId, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllJnf = async (req, res, next) => {
  let { pageno, pagelimit } = req.params;

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await fetchAllJnf(offset, pagelimit, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const createNewJnf = async (req, res, next) => {
  const details = req.body;
  const loggedUserId = req.user._id;

  try {
    let response = await createJnf(loggedUserId, details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const updateJnfById = async (req, res, next) => {
  const { id } = req.params;
  const details = req.body;

  try {
    let response = await saveJnfById(id, details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const submitJnf = async (req, res, next) => {
  const { id } = req.params;

  try {
    let response = await submitJnfById(id, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteJnfById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let response = await removeJNFById(id, next);

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const searchJnfByPattern = async (req, res, next) => {
  let { pattern, pageno, pagelimit } = req.params;
  console.log({ pattern, pageno, pagelimit });

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await searchJnfByCompany(pattern, offset, pagelimit, next);
    // console.log(response);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getJnfById,
  getAllJnfForUser,
  searchJnfByPattern,
  getLatestJnfOfUser,
  getAllJnf,
  createNewJnf,
  updateJnfById,
  submitJnf,
  searchJnfByPattern,
  deleteJnfById,
};
