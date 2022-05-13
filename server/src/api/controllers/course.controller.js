const { readCoursesGSheets } = require('../services/coursesProvider');

const getAllCourseData = async (req, res, next) => {
  try {
    let response = await readCoursesGSheets();
    res.status(201).json(response);
} catch (error) {
    res.send(error);
}
}

module.exports = { getAllCourseData}