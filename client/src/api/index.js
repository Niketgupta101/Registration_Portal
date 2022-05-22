const axios = require('axios');

const token = localStorage.getItem('token');

console.log(token);
const API = axios.create({
  baseURL: 'http://localhost:5000/v1',
  // {
  //   headers: {
  //     authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  //   },
  // },
  credentials: 'include',
  withCredentials: true,
});

API.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
  localStorage.getItem('token')
)}`;

// const setHeader = () => {
//   console.log({ token: localStorage.getItem('token') });
//   return;
// };

// -------------------- Auth apis ---------------------------

export const register = (user) => API.post(`/auth/register`, user);

export const login = (data) => API.post(`/auth/login`, data);

export const adminLogin = (data) => API.post('/auth/admin/login', data);

export const forgetPassword = (emailId) =>
  API.post(`/auth/forgotPassword`, { emailId });

export const resetPassword = (id, password) =>
  API.put(`/auth/resetPassword/${id}`, { password });

export const sendConfirmationLink = (email) =>
  API.put('/auth/sendLink', { emailId: email });

// -------------------- Company details -------------------------

export const postCompanyDetails = (data) => API.post(`/company`, data);

export const getCompanyDetailsById = (id) => API.get(`/acompany/${id}`);

export const getAllCompanyDetails = (pageNo) =>
  API.get(`/company/all/${pageNo}/12`);

// --------------------- INF ------------------------------------

export const getInfById = (id) => API.get(`/inf/${id}`);

export const getAllInfForUser = (userId, pageNo) =>
  API.get(`/inf/user/${userId}/${pageNo}/12`);

export const getAllInf = (pageNo) => API.get(`/inf/admin/all/${pageNo}/12`);

export const createNewInf = (data) => API.post(`/inf`, data);

export const updateInfById = (data, id) => API.put(`/inf/${id}`, data);

export const submitInf = (id) => API.get(`/inf/submit/${id}`);

export const deleteInfById = (id) => API.delete(`/inf/delete/${id}`);

export const getLatestInfOfUser = () => API.get('/inf/latest');

// ---------------------- JNF -----------------------------------

export const getjnfById = (id) => API.get(`/jnf/${id}`);

export const getAllJnfForUser = (userId, pageNo) =>
  API.get(`/jnf/user/${userId}/${pageNo}/12`);

export const getAllJnf = (pageNo) => API.get(`/jnf/admin/all/${pageNo}/12`);

export const createNewJnf = (data) => API.post(`/jnf`, data);

export const updateJnfById = (data, id) => API.put(`/jnf/${id}`, data);

export const submitJnf = (id) => API.get(`/jnf/submit/${id}`);

export const deleteJnfById = (id) => API.delete(`/jnf/delete/${id}`);

export const getLatestJnfOfUser = () => API.get('/jnf/latest');

// ----------------------- Contact -----------------------------------

export const getAllContacts = () => API.get('/contact/all');

export const postContactData = (data) => API.post(`/contact`, data);

export const updateContactStatus = (id) => API.put(`contact/${id}`);

export const deleteContactById = (id) => API.delete(`contact/${id}`);

// ------------------------ Jobs ------------------------------------

export const getAllJobs = () => API.get('/jobs/all');

export const getAllJobsForUser = (pageNo) =>
  API.get(`/jobs/user/all/${pageNo}/12`);

export const getAllPendingJobsForUser = (pageNo) =>
  API.get(`/jobs/user/pending/${pageNo}/12`);

export const updateGraduationYear = (data) => API.put('/jobs/year/admin', data);

export const getGraduationYear = () => API.get('/jobs/year');
//-------------------------Invites Companies...........................

export const sendInvitationToAllCompanies = () => API.post('/company/mail/all');
export const fetchAllCompaniesDeafultMail = () =>
  API.get('/company/mail/defaultinvites');
export const sendCustomEmail = (data) =>
  API.post('/company/sendcustommail', data);

//-------------------------Invites Companies...........................

export const searchCompanyByPattern = (pattern) =>
  API.get(`/company/search/${pattern}/1/5`);

export const searchInfByPattern = (pattern) =>
  API.get(`/inf/search/${pattern}/1/5`);

export const searchJnfByPattern = (pattern) =>
  API.get(`/jnf/search/${pattern}/1/5`);
// ------------------------ Courses ------------------------------------

export const getAllCourseData = () => API.get('/courses');

export const getPlacedCount = () => API.get('/courses/placed/count');
