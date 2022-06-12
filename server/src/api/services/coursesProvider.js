const { readSheet } = require('../utils/service/GSheets');

exports.getPlacementData = async () => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Courses-Placement',
      'A2:D91'
    );
    return { success: true, data: data };
  } catch (error) {
    return error;
  }
};
exports.getInternshipData = async () => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Courses-Internship',
      'A2:D107'
    );
    return { success: true, data: data };
  } catch (error) {
    return error;
  }
};

exports.getPlacedStudentsCount = async (next) => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Courses',
      'A69:C69'
    );


    return { placed: data[0][2] };
  } catch (error) {
    next(error);
  }
};
