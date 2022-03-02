const axios = require('axios');

const token = localStorage.getItem("token");
const API = axios.create({ baseURL: 'http://localhost:5000/v1',
    headers: {
        authorization: `Bearer ${JSON.parse(token)}`
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

// export const getAllJobs = () => API.get(`/inf/admin/all`);

export const createNewInf = (data) => API.post(`/inf`, data);

export const updateInfById = (data,id) => API.put(`/inf/${id}`, data);

export const submitInf = (id) => API.get(`/inf/submit/${id}`);

export const deleteInfById = (id) => API.delete(`/inf/${id}`);

// ---------------------- JNF -----------------------------------

export const getJnfById = (id) => API.get(`/jnf/${id}`);

export const getAllJnfForUser = (userId) => API.get(`/jnf/user/${userId}`);

export const getAllJnf = () => API.get(`/jnf/admin`);

export const createNewJnf = (data) => API.post(`/jnf`, data);

export const updateJnfById = (id) => API.put(`jnf/${id}`);

export const submitJnf = (id) => API.get(`jnf/submit/${id}`);

export const deleteJnfById = (id) => API.delete(`jnf/${id}`);

// ----------------------- Contact -----------------------------------

export const getAllContacts = () => API.get('/contact/all');

export const postContactData = (id) => API.post(`contact/`);

export const updateContactStatus = (id) => API.put(`contact/${id}`);

export const deleteContactById = (id) => API.delete(`contact/${id}`);

// ------------------------ Jobs ------------------------------------

export const getAllJobs = () => API.get('/jobs/all');

export const getAllPendingJobsForUser = () => API.get('/jobs/pending/all');

export const updateGraduationYear = (data) => API.put('/jobs/year/admin', data);

export const getGraduationYear = () => API.get('/jobs/year');