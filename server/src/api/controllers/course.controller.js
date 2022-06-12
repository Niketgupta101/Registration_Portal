const {
  // readCoursesGSheets,
  getPlacementData,
  getInternshipData,
  getPlacedStudentsCount,
} = require('../services/coursesProvider');

const CourseInternshipData = async (req, res, next) => {
  try {
    let response = await getInternshipData(next);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
const CoursePlacementData = async (req, res, next) => {
  try {
    let response = await getPlacementData(next);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getPlacedCount = async (req, res, next) => {
  try {
    let response = await getPlacedStudentsCount(next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { CourseInternshipData,CoursePlacementData, getPlacedCount };
