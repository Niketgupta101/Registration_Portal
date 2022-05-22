const {
  readCoursesGSheets,
  getPlacedStudentsCount,
} = require('../services/coursesProvider');

const getAllCourseData = async (req, res, next) => {
  try {
    let response = await readCoursesGSheets();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
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

module.exports = { getAllCourseData, getPlacedCount };
