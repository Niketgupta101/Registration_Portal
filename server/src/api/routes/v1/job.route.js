const express = require('express');

const router = express.Router();

const { protect, authorizeRoles } = require('../../middlewares/auth');

const { getAllJobs, updateGraduationYear, getGraduationYear, getPendingJobForms, getAllJobsForUser } = require('../../controllers/job.controller');

router.get('/all', protect, getAllJobs);

router.get('/user/all', protect, getAllJobsForUser);

router.put('/year/admin', protect, authorizeRoles, updateGraduationYear);

router.get('/year', getGraduationYear);

router.get('/user/pending', protect, getPendingJobForms);

module.exports = router;