const axios = require('axios');

// const token = localStorage.getItem("token");

const API = axios.create({ baseURL: 'http://localhost:5000/v1',
credentials: "include",
    withCredentials: true,
    headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
 });

// -------------------- Auth apis ---------------------------

export const register = (user) => API.post(`/auth/register`, user);

export const login = (data) => API.post(`/auth/login`, data);

export const adminLogin = (data) => API.post('/auth/admin/login', data);

export const forgetPassword = (emailId) => API.post(`/auth/forgotPassword`, { emailId });

export const resetPassword = (id, password) => API.put(`/auth/resetPassword/${id}`, {password});

export const sendConfirmationLink = (email) => API.put('/auth/sendLink', { emailId : email });

// -------------------- Company details -------------------------

export const postCompanyDetails = (data) => API.post(`/company`, data);

export const getCompanyDetailsById = (id) => API.get(`/acompany/${id}`);

export const getAllCompanyDetails = () => API.get(`/company/all/1/20`);

// --------------------- INF ------------------------------------

export const getInfById = (id) => API.get(`/inf/${id}`);

export const getAllInfForUser = (userId) => API.get(`/inf/user/${userId}`);

export const getAllInf = () => API.get(`/inf/admin`);

export const createNewInf = (data) => API.post(`/inf`, data);

export const updateInfById = (data,id) => API.put(`/inf/${id}`, data);

export const submitInf = (id) => API.get(`/inf/submit/${id}`);

export const deleteInfById = (id) => API.delete(`/inf/${id}`);

export const getLatestInfOfUser = () => API.get('/inf/latest');

// ---------------------- JNF -----------------------------------

export const getjnfById = (id) => API.get(`/jnf/${id}`);

export const getAllJnfForUser = (userId) => API.get(`/jnf/user/${userId}`);

export const getAllJnf = () => API.get(`/jnf/admin`);

export const createNewJnf = (data) => API.post(`/jnf`, data);

export const updateJnfById = (data,id) => API.put(`/jnf/${id}`, data);

export const submitJnf = (id) => API.get(`/jnf/submit/${id}`);

export const deleteJnfById = (id) => API.delete(`/jnf/${id}`);

export const getLatestJnfOfUser = () => API.get('/jnf/latest');

// ----------------------- Contact -----------------------------------

export const getAllContacts = () => API.get('/contact/all');

export const postContactData = (data) => API.post(`/contact`, data);

export const updateContactStatus = (id) => API.put(`contact/${id}`);

export const deleteContactById = (id) => API.delete(`contact/${id}`);

// ------------------------ Jobs ------------------------------------

export const getAllJobs = () => API.get('/jobs/all');

export const getAllJobsForUser = () => API.get('/jobs/user/all');

export const getAllPendingJobsForUser = () => API.get('/jobs/user/pending');

export const updateGraduationYear = (data) => API.put('/jobs/year/admin', data);

export const getGraduationYear = () => API.get('/jobs/year');
//-------------------------Invites Companies...........................

export const sendInvitationToAllCompanies = () => API.post('/company/mail/all');
export const fetchAllCompaniesDeafultMail = () => API.get('/company/mail/defaultinvites');
export const sendCustomEmail = (data) =>API.post('/company/sendcustommail',data);

//-------------------------Invites Companies...........................

export const searchCompanyByPattern = (pattern) =>API.get(`/company/${pattern}/1/5`)