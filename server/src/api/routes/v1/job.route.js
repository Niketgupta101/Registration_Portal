const express = require('express');

const router = express.Router();

const { protect, authorizeRoles } = require('../../middlewares/auth');

// const {
//   getAllJobs,
//   updateGraduationYear,
//   getGraduationYear,
//   getPendingJobForms,
//   getAllJobsForUser,
// } = require('../../controllers/job.controller');

// router.get('/all/:pageno/:pagelimit', protect, getAllJobs);

// router.get('/user/all/:pageno/:pagelimit', protect, getAllJobsForUser);

// router.put('/year/admin', protect, authorizeRoles, updateGraduationYear);

// router.get('/year', getGraduationYear);

// router.get('/user/pending/:pageno/:pagelimit', protect, getPendingJobForms);

// -------------------------------------------------------

const {
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
} = require('../../controllers/newJob.controller');

router.get('/all/:pageno/:pagelimit', protect, getAllJobs);

router.get('/user/all/:pageno/:pagelimit', protect, getAllJobsForUser);

router.put('/year/admin', protect, authorizeRoles, updateGraduationYear);

router.get('/year', getGraduationYear);

router.get('/user/pending/:pageno/:pagelimit', protect, getPendingJobForms);

router.get('/company/count', protect, companiesCount);
router.get('/inf/count', protect, infCount);
router.get('/user/inf/count', protect, infCountForUser);
router.get('/jnf/count', protect, jnfCount);
router.get('/user/jnf/count', protect, jnfCountForUser);

module.exports = router;
