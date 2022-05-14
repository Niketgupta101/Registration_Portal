const axios = require('axios');

const token = localStorage.getItem('token');

console.log(token);
const API = axios.create({
  baseURL: 'http://localhost:5000/v1',
  credentials: 'include',
  withCredentials: true,
});

const setHeader = () => {
  return {
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    },
  };
};

// -------------------- Auth apis ---------------------------

export const register = (user) => API.post(`/auth/register`, user);

export const login = (data) => API.post(`/auth/login`, data);

export const adminLogin = (data) => API.post('/auth/admin/login', data);

export const forgetPassword = (emailId) =>
  API.post(`/auth/forgotPassword`, setHeader(), { emailId });

export const resetPassword = (id, password) =>
  API.put(`/auth/resetPassword/${id}`, setHeader(), { password });

export const sendConfirmationLink = (email) =>
  API.put('/auth/sendLink', setHeader(), { emailId: email });

// -------------------- Company details -------------------------

export const postCompanyDetails = (data) =>
  API.post(`/company`, setHeader(), data);

export const getCompanyDetailsById = (id) =>
  API.get(`/acompany/${id}`, setHeader());

export const getAllCompanyDetails = () =>
  API.get(`/company/all/1/20`, setHeader());

// --------------------- INF ------------------------------------

export const getInfById = (id) => API.get(`/inf/${id}`, setHeader());

export const getAllInfForUser = (userId) =>
  API.get(`/inf/user/${userId}`, setHeader());

export const getAllInf = () => API.get(`/inf/admin`, setHeader());

export const createNewInf = (data) => API.post(`/inf`, setHeader(), data);

export const updateInfById = (data, id) =>
  API.put(`/inf/${id}`, setHeader(), data);

export const submitInf = (id) => API.get(`/inf/submit/${id}`, setHeader());

export const deleteInfById = (id) => API.delete(`/inf/${id}`, setHeader());

export const getLatestInfOfUser = () => API.get('/inf/latest', setHeader());

// ---------------------- JNF -----------------------------------

export const getjnfById = (id) => API.get(`/jnf/${id}`, setHeader());

export const getAllJnfForUser = (userId) =>
  API.get(`/jnf/user/${userId}`, setHeader());

export const getAllJnf = () => API.get(`/jnf/admin`, setHeader());

export const createNewJnf = (data) => API.post(`/jnf`, setHeader(), data);

export const updateJnfById = (data, id) =>
  API.put(`/jnf/${id}`, setHeader(), data);

export const submitJnf = (id) => API.get(`/jnf/submit/${id}`, setHeader());

export const deleteJnfById = (id) => API.delete(`/jnf/${id}`, setHeader());

export const getLatestJnfOfUser = () => API.get('/jnf/latest', setHeader());

// ----------------------- Contact -----------------------------------

export const getAllContacts = () => API.get('/contact/all', setHeader());

export const postContactData = (data) =>
  API.post(`/contact`, setHeader(), data);

export const updateContactStatus = (id) =>
  API.put(`contact/${id}`, setHeader());

export const deleteContactById = (id) =>
  API.delete(`contact/${id}`, setHeader());

// ------------------------ Jobs ------------------------------------

export const getAllJobs = () => API.get('/jobs/all', setHeader());

export const getAllJobsForUser = () => API.get('/jobs/user/all', setHeader());

export const getAllPendingJobsForUser = () =>
  API.get('/jobs/user/pending', setHeader());

export const updateGraduationYear = (data) =>
  API.put('/jobs/year/admin', data, setHeader());

export const getGraduationYear = () => API.get('/jobs/year');
//-------------------------Invites Companies...........................

export const sendInvitationToAllCompanies = () =>
  API.post('/company/mail/all', setHeader());
export const fetchAllCompaniesDeafultMail = () =>
  API.get('/company/mail/defaultinvites', setHeader());
export const sendCustomEmail = (data) =>
  API.post('/company/sendcustommail', setHeader(), data);

//-------------------------Invites Companies...........................

export const searchCompanyByPattern = (pattern) =>
  API.get(`/company/search/${pattern}/1/5`, setHeader());

// ------------------------ Courses ------------------------------------

export const getAllCourseData = () => API.get('/courses', setHeader());
