const express = require('express');

const router = express.Router();

const { protect, authorizeRoles } = require('../../middlewares/auth');

const { getAllJobs, updateGraduationYear, getGraduationYear } = require('../../controllers/job.controller');

router.get('/all', protect, getAllJobs);

router.put('/year/admin', protect, authorizeRoles, updateGraduationYear);

router.get('/year', getGraduationYear);

module.exports = router;