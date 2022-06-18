const axios = require('axios');

const isRequestSuccessful = function (statusCode) {
  return 200 <= statusCode && statusCode <= 299;
};

const getApiObject = function () {
  if (process.env.NODE_ENV === 'production') {
    return {
      get: async function (path) {
        const tokenString = `Bearer ${JSON.parse(
          localStorage.getItem('token')
        )}`;
        let req = await fetch(`/v1${path}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: tokenString,
          },
        });
        let resp = await req.json();

        if (!isRequestSuccessful(req.status)) {
          // eslint-disable-next-line no-throw-literal
          throw { response: { data: resp } };
        }

        return { data: resp };
      },
      post: async function (path, data) {
        const tokenString = `Bearer ${JSON.parse(
          localStorage.getItem('token')
        )}`;
        let req = await fetch(`/v1${path}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: tokenString,
          },
          body: JSON.stringify(data),
        });
        let resp = await req.json();

        if (!isRequestSuccessful(req.status)) {
          // eslint-disable-next-line no-throw-literal
          throw { response: { data: resp } };
        }

        return { data: resp };
      },
      put: async function (path, data) {
        const tokenString = `Bearer ${JSON.parse(
          localStorage.getItem('token')
        )}`;
        let req = await fetch(`/v1${path}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: tokenString,
          },
          body: JSON.stringify(data),
        });
        let resp = await req.json();

        if (!isRequestSuccessful(req.status)) {
          // eslint-disable-next-line no-throw-literal
          throw { response: { data: resp } };
        }

        return { data: resp };
      },
      delete: async function (path) {
        const tokenString = `Bearer ${JSON.parse(
          localStorage.getItem('token')
        )}`;
        let req = await fetch(`/v1${path}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: tokenString,
          },
        });
        let resp = await req.json();

        if (!isRequestSuccessful(req.status)) {
          // eslint-disable-next-line no-throw-literal
          throw { response: { data: resp } };
        }

        return { data: resp };
      },
    };
  } else {
    const APIObj = axios.create({
      baseURL: `http://localhost:5000/v1`,
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    return APIObj;
  }
};

const API = getApiObject();

const setHeader = () => {
  return {
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    },
  };
};

// -------------------- Auth apis ---------------------------

export const register = (user) => API.post(`/auth/register`, user, setHeader());

export const login = (data) => API.post(`/auth/login`, data, setHeader());

export const adminLogin = (data) =>
  API.post('/auth/admin/login', data, setHeader());

export const forgetPassword = (emailId) =>
  API.post(`/auth/forgotPassword`, { emailId }, setHeader());

export const resetPassword = (id, password) =>
  API.put(`/auth/resetPassword/${id}`, { password }, setHeader());

export const sendConfirmationLink = (email) =>
  API.put('/auth/sendLink', { emailId: email }, setHeader());

// -------------------- Company details -------------------------

export const postCompanyDetails = (data) =>
  API.post(`/company`, data, setHeader());

export const getCompanyDetailsById = (id) =>
  API.get(`/company/${id}`, setHeader());

export const getAllCompanyDetails = (pageNo) =>
  API.get(`/company/all/${pageNo}/12`, setHeader());

// --------------------- INF ------------------------------------

export const getInfById = (id) => API.get(`/inf/${id}`, setHeader());

export const getAllInfForUser = (userId, pageNo) =>
  API.get(`/inf/user/${userId}/${pageNo}/12`, setHeader());

export const getAllInf = (pageNo) =>
  API.get(`/inf/admin/all/${pageNo}/12`, setHeader());

export const createNewInf = (data) => API.post(`/inf`, data, setHeader());

export const updateInfById = (data, id) =>
  API.put(`/inf/${id}`, data, setHeader());

export const submitInf = (id) => API.get(`/inf/submit/${id}`, setHeader());

export const deleteInfById = (id) =>
  API.delete(`/inf/delete/${id}`, setHeader());

export const getLatestInfOfUser = () => API.get('/inf/latest', setHeader());

// ---------------------- JNF -----------------------------------

export const getjnfById = (id) => API.get(`/jnf/${id}`, setHeader());

export const getAllJnfForUser = (userId, pageNo) =>
  API.get(`/jnf/user/${userId}/${pageNo}/12`, setHeader());

export const getAllJnf = (pageNo) =>
  API.get(`/jnf/admin/all/${pageNo}/12`, setHeader());

export const createNewJnf = (data) => API.post(`/jnf`, data, setHeader());

export const updateJnfById = (data, id) =>
  API.put(`/jnf/${id}`, data, setHeader());

export const submitJnf = (id) => API.get(`/jnf/submit/${id}`, setHeader());

export const deleteJnfById = (id) =>
  API.delete(`/jnf/delete/${id}`, setHeader());

export const getLatestJnfOfUser = () => API.get('/jnf/latest', setHeader());

// ----------------------- Contact -----------------------------------

export const getAllContacts = () => API.get('/contact/all', setHeader());

export const postContactData = (data) =>
  API.post(`/contact`, data, setHeader());

export const updateContactStatus = (id) =>
  API.put(`/contact/${id}`, setHeader());

export const deleteContactById = (id) =>
  API.delete(`/contact/${id}`, setHeader());

// ------------------------ Jobs ------------------------------------

export const getAllJobs = (pageLimit, pageNo) =>
  API.get(`/jobs/all/${pageNo}/${pageLimit}`, setHeader());

export const getAllJobsForUser = (pageLimit, pageNo) =>
  API.get(`/jobs/user/all/${pageNo}/${pageLimit}`, setHeader());

export const getAllPendingJobsForUser = (pageLimit, pageNo) =>
  API.get(`/jobs/user/pending/${pageNo}/${pageLimit}`, setHeader());

export const updateGraduationYear = (data) =>
  API.put('/jobs/year/admin', data, setHeader());

export const getGraduationYear = () => API.get('/jobs/year', setHeader());
export const getCompanyCount = () =>
  API.get('/jobs/company/count', setHeader());
export const getInfCount = () => API.get('/jobs/inf/count', setHeader());
export const getJnfCount = () => API.get('/jobs/jnf/count', setHeader());
//-------------------------Invites Companies...........................

export const sendInvitationToAllCompanies = () =>
  API.post('/company/mail/all', setHeader());
export const fetchAllCompaniesDeafultMail = () =>
  API.get('/company/mail/defaultinvites', setHeader());
export const sendCustomEmail = (data) =>
  API.post('/company/sendcustommail', data, setHeader());

//-------------------------Invites Companies...........................

export const searchCompanyByPattern = (pattern) =>
  API.get(`/company/search/${pattern}/1/12`, setHeader());

export const searchInfByPattern = (pattern) =>
  API.get(`/inf/search/${pattern}/1/12`, setHeader());

export const searchJnfByPattern = (pattern) =>
  API.get(`/jnf/search/${pattern}/1/12`, setHeader());

// ------------------------ Courses ------------------------------------

export const getInternshipData = () =>
  API.get('/courses/internship', setHeader());
export const getPlacementData = () =>
  API.get('/courses/placement', setHeader());

export const getPlacedCount = () =>
  API.get('/courses/placed/count', setHeader());

// -------------------------------------------

export const fetchInf = (id) => API.get(`/inf/new/fetch/${id}`, setHeader());
export const createInf = (data) => API.post(`/inf/new`, data, setHeader());
export const updateInf = (data) =>
  API.put('/inf/new/update', data, setHeader());
export const submitReviewedInf = (id) =>
  API.put(`/inf/new/submit/${id}`, setHeader());
export const removeInf = (id) =>
  API.delete(`/inf/new/delete/${id}`, setHeader());
export const fetchAllInf = (pageLimit, pageNo) =>
  API.get(`/inf/new/admin/${pageLimit}/${pageNo}`, setHeader());
export const fetchAllInfForUser = (pageLimit, pageNo) =>
  API.get(`/inf/new/user/${pageLimit}/${pageNo}`, setHeader());
export const fetchPendingInfForUser = (pageLimit, pageNo) =>
  API.get(`/inf/new/user/pending/${pageLimit}/${pageNo}`, setHeader());
export const searchInf = (pattern, pageLimit, pageNo) =>
  API.get(`/inf/new/search/${pattern}/${pageLimit}/${pageNo}`, setHeader());

// ------------------------------------------------

export const fetchJnf = (id) => API.get(`/jnf/new/fetch/${id}`, setHeader());
export const createJnf = (data) => API.post(`/jnf/new`, data, setHeader());
export const updateJnf = (data) =>
  API.put('/jnf/new/update', data, setHeader());
export const submitReviewedJnf = (id) =>
  API.put(`/jnf/new/submit/${id}`, setHeader());
export const removeJnf = (id) =>
  API.delete(`/jnf/new/delete/${id}`, setHeader());
export const fetchAllJnf = (pageLimit, pageNo) =>
  API.get(`/jnf/new/admin/${pageLimit}/${pageNo}`, setHeader());
export const fetchAllJnfForUser = (pageLimit, pageNo) =>
  API.get(`/jnf/new/user/${pageLimit}/${pageNo}`, setHeader());
export const fetchPendingJnfForUser = (pageLimit, pageNo) =>
  API.get(`/jnf/new/user/pending/${pageLimit}/${pageNo}`, setHeader());
export const searchJnf = (pattern, pageLimit, pageNo) =>
  API.get(`/jnf/new/search/${pattern}/${pageLimit}/${pageNo}`, setHeader());

// ----------------------------------------------------
