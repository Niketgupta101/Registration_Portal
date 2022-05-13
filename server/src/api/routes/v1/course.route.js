const express = require('express');
const router = express.Router();
const { getAllCourseData } = require('../../controllers/course.controller');


router.get('/',getAllCourseData);

module.exports = router;

