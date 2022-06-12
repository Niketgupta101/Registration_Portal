const express = require('express');
const router = express.Router();
const {
  CoursePlacementData,
  CourseInternshipData,
  getPlacedCount,
} = require('../../controllers/course.controller');

router.get('/placement', CoursePlacementData);
router.get('/internship', CourseInternshipData);
router.get('/placed/count', getPlacedCount);

module.exports = router;
