const { readSheet, updateSheet } = require('../utils/service/GSheets');

exports.readCoursesGSheets = async () => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Courses',
      'A2:K'
    );
    return { success: true, data: data };
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getPlacedStudentsCount = async (next) => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Courses',
      'A2:K54'
    );

    console.log({ data });

    let count = 0;

    for (let i in data) {
      if (data[i][2] != '') {
        count += parseInt(data[i][2]);
      }
    }

    return { placed: count };
  } catch (error) {
    console.log(error);
    next(error);
  }
};
