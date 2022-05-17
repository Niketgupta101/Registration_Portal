const express = require('express');
const router = express.Router();
const {
  getAllCourseData,
  getPlacedCount,
} = require('../../controllers/course.controller');

router.get('/', getAllCourseData);
router.get('/placed/count', getPlacedCount);

module.exports = router;
