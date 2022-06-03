const {
  postCompanyDetails,
  fetchCompanyById,
  fetchAllCompanies,
  sendInvitationToAll,
  searchCompany,
  fetchAllCompaniesDeafultMail,
  sendInvitations,
} = require('../services/companyProvider');
const { sendEmail } = require('../utils/service/email');
const saveCompanyDetails = async (req, res, next) => {
  const details = req.body;
  try {
    let response = await postCompanyDetails(details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getCompanyDetailsById = async (req, res, next) => {
  const companyId = req.params.id;

  try {
    const response = await fetchCompanyById(companyId, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllCompanyDetails = async (req, res, next) => {
  let { pageno, pagelimit } = req.params;

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await fetchAllCompanies(offset, pagelimit, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const sendInvitationToAllCompanies = async (req, res, next) => {
  try {
    const response = await sendInvitationToAll(next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const sendinvitationsToSelected = async (req, res, next) => {
  const { companyList, subject, message } = req.body;
  try {
    const response = await sendInvitations(companyList, subject, message);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const searchCompanyByPattern = async (req, res, next) => {
  let { pattern, pageno, pagelimit } = req.params;

  try {
    pageno = pageno || 1;
    pagelimit = pagelimit || 20;
    let offset = pagelimit * (pageno - 1);

    let response = await searchCompany(pattern, offset, pagelimit, next);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
const fetchAllDefaultInvites = async (req, res, next) => {
  try {
    const response = await fetchAllCompaniesDeafultMail();

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
const sendCustomEmail = async (req, res, next) => {
  try {
    const emailId = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const response = await sendEmail(emailId, subject, message);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCompanyDetailsById,
  saveCompanyDetails,
  getAllCompanyDetails,
  sendInvitationToAllCompanies,
  searchCompanyByPattern,
  fetchAllDefaultInvites,
  sendCustomEmail,
  sendinvitationsToSelected,
};
