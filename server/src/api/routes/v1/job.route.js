const express = require('express');

const router = express.Router();

const { protect, authorizeRoles } = require('../../middlewares/auth');

const { getAllJobs, updateGraduationYear, getGraduationYear, getPendingJobForms } = require('../../controllers/job.controller');

router.get('/all', protect, getAllJobs);

router.put('/year/admin', protect, authorizeRoles, updateGraduationYear);

router.get('/year', getGraduationYear);

router.get('/user/pending', protect, getPendingJobForms);

module.exports = router;