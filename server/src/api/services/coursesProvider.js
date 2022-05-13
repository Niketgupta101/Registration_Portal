const { readSheet, updateSheet } = require('../utils/service/GSheets');

exports.readCoursesGSheets=async ()=>{
    try {
        const data = await readSheet('1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4', 'Courses', 'A2:K');
        return {success: true,data:data};
    } catch (error) {
        console.log(error);
        return (error);
    }

}


