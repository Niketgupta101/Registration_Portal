const fs = require('fs');
const path = require('path');

const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const {
  uploadFile,
  generateDownloadUrl,
  generatePreviewUrl,
} = require('./upload');
const { sendMailWithAttachment } = require('../email');

const { INF } = require('../../../models/INF');
const { JNF } = require('../../../models/JNF');
const { convert_client_id } = require('../../../../config/vars');
const { env } = require('../../../../config/vars');

const createStudentInfPdf = async (data, id) => {
  
  let student;
  if(env === 'production'){
    student = fs.readFileSync(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/INFstudent.docx'),
      'binary'
    );}
    else{
      student = fs.readFileSync(
    path.resolve(__dirname, 'INFstudent.docx'),
    'binary'
  );
    }

  const studentZip = new PizZip(student);

  const studentDoc = new Docxtemplater(studentZip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  studentDoc.render({ ...data });

  const studentBuf = studentDoc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  if(env === 'production'){fs.writeFileSync(path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.docx'), studentBuf);}
    else{fs.writeFileSync(path.resolve(__dirname, 'studentOutput.docx'), studentBuf);}
  

  var convertapi = require('convertapi')(convert_client_id);

  let studentResult;
  if(env === 'production'){
    studentResult = await convertapi.convert(
      'pdf',
      {
        File: path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.docx'),
      },
      'docx'
    );
  }
    else{
      studentResult = await convertapi.convert(
        'pdf',
        {
          File: path.resolve(__dirname, 'studentOutput.docx'),
        },
        'docx'
      );
    }

  if(env === 'production'){await studentResult.saveFiles('/root/src/api/utils/service/PDFservice/');}
  else{  await studentResult.saveFiles(__dirname);}

  let studentResponse;
  if(env === 'production'){
    studentResponse = await uploadFile(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.pdf'),
      'INF',
      'students'
    );
  }
    else{
      studentResponse = await uploadFile(
        path.resolve(__dirname, 'studentOutput.pdf'),
        'INF',
        'students'
      );
    }

  let resPrev = await generatePreviewUrl(studentResponse.data.id);
  let resDown = await generateDownloadUrl(studentResponse.data.id);

  let inf = await INF.findOne({ _id: id });

  inf.set({
    studentPreview: resPrev.previewLink,
    studentDownload: resDown.downloadLink,
  });

  await inf.save();
};

const createStudentJnfPdf = async (data, id) => {

  
  let student;
  if(env === 'production'){
    student = fs.readFileSync(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/JNFstudent.docx'),
      'binary'
    );}
    else{
      student = fs.readFileSync(
    path.resolve(__dirname, 'JNFstudent.docx'),
    'binary'
  );
    }

  const studentZip = new PizZip(student);

  const studentDoc = new Docxtemplater(studentZip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  studentDoc.render({ ...data });

  const studentBuf = studentDoc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  if(env === 'production'){fs.writeFileSync(path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.docx'), studentBuf);}
    else{fs.writeFileSync(path.resolve(__dirname, 'studentOutput.docx'), studentBuf);}
  

  var convertapi = require('convertapi')(convert_client_id);

  let studentResult;
  if(env === 'production'){
    studentResult = await convertapi.convert(
      'pdf',
      {
        File: path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.docx'),
      },
      'docx'
    );}
    else{
      studentResult = await convertapi.convert(
        'pdf',
        {
          File: path.resolve(__dirname, 'studentOutput.docx'),
        },
        'docx'
      );
    }

  if(env === 'production') {await studentResult.saveFiles('/root/src/api/utils/service/PDFservice/');}
  else {await studentResult.saveFiles(__dirname);}

  
  let studentResponse;
  if(env === 'production'){
    studentResponse = await uploadFile(
    path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/studentOutput.pdf'),
    'JNF',
    'students'
  );}
    else{
      studentResponse = await uploadFile(
      path.resolve(__dirname, 'studentOutput.pdf'),
      'JNF',
      'students'
    );}

  let resPrev = await generatePreviewUrl(studentResponse.data.id);
  let resDown = await generateDownloadUrl(studentResponse.data.id);

  let jnf = await JNF.findOne({ _id: id });

  jnf.set({
    studentPreview: resPrev.previewLink,
    studentDownload: resDown.downloadLink,
  });

  await jnf.save();
};

exports.fillINFDoc = async (inf) => {
  let content;
  if(env === 'production'){
    content = fs.readFileSync(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/INF.docx'),
      'binary'
    );}
    else{
      content = fs.readFileSync(
    path.resolve(__dirname, 'INF.docx'),
    'binary'
  );
    }

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
  let Category = inf.Company_Overview.Category;
  let Sector = inf.Company_Overview.Sector;

  let fourYear = inf.Eligible_Courses_And_Disciplines.Four_Year_Btech_Programs;
  let fiveYear =
    inf.Eligible_Courses_And_Disciplines
      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs;
  let doubleMajor = inf.Eligible_Courses_And_Disciplines.Double_Major;
  let dualDegree = inf.Eligible_Courses_And_Disciplines.Dual_Degree;
  let skill = inf.Eligible_Courses_And_Disciplines.Skill_Based_Hiring;
  let threeYear =
    inf.Eligible_Courses_And_Disciplines.Three_Year_MSc_Tech_Programs;
  let twoYearMtech =
    inf.Eligible_Courses_And_Disciplines.Two_Year_Mtech_Programs;
  let twoYearMba = inf.Eligible_Courses_And_Disciplines.Two_Year_MBA_Programs;
  let twoYearMsc = inf.Eligible_Courses_And_Disciplines.Two_Year_MSc_Programs;
  let selectionProcedure = inf.Selection_Procedure;
  let hR_Details = inf.HR_Details;
  let priority_Details = inf.Priority_Details;
  let data = {
    Four_Year_Select_All: fourYear.Select_All ? 'Yes' : 'No',
    Four_Year_Chemical_Engineering: fourYear.Chemical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Civil_Engineering: fourYear.Civil_Engineering ? 'Yes' : 'No',
    Four_Year_Computer_Science_and_Engineering:
      fourYear.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Four_Year_Electrical_Engineering: fourYear.Electrical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Electronics_and_Communication_Engineering:
      fourYear.Electronics_and_Communication_Engineering ? 'Yes' : 'No',
    Four_Year_Engineering_Physics: fourYear.Engineering_Physics ? 'Yes' : 'No',
    Four_Year_Environmental_Engineering: fourYear.Environmental_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Mechanical_Engineering: fourYear.Mechanical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Mineral_and_Metallurgical_Engineering:
      fourYear.Mineral_and_Metallurgical_Engineering ? 'Yes' : 'No',
    Four_Year_Mining_Engineering: fourYear.Mining_Engineering ? 'Yes' : 'No',
    Four_Year_Mining_Machinery_Engineering:
      fourYear.Mining_Machinery_Engineering ? 'Yes' : 'No',
    Four_Year_Petroleum_Engineering: fourYear.Petroleum_Engineering
      ? 'Yes'
      : 'No',
    Five_Year_Select_All: fiveYear.Select_All ? 'Yes' : 'No',
    Five_Year_Computer_Science_and_Engineering:
      fiveYear.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Five_Year_Mathematics_and_Computing: fiveYear.Mathematics_and_Computing
      ? 'Yes'
      : 'No',
    Five_Year_Applied_Geology: fiveYear.Applied_Geology ? 'Yes' : 'No',
    Five_Year_Applied_Geophysics: fiveYear.Applied_Geophysics ? 'Yes' : 'No',
    Double_Major_Select_All: doubleMajor.Select_All ? 'Yes' : 'No',
    Double_Major_Computer_Science_and_Engineering:
      doubleMajor.Computer_Science_and_Engineering_Double_Major ? 'Yes' : 'No',
    Dual_Degree_Select_All: dualDegree.Select_All ? 'Yes' : 'No',
    Dual_Degree_Computer_Science_and_Engineering:
      dualDegree.Computer_Science_and_Engineering_Dual_Degree ? 'Yes' : 'No',
    Dual_Degree_Environmental_Science_and_Engineering:
      dualDegree.Environmental_Science_and_Engineering_Dual_Degree
        ? 'Yes'
        : 'No',

    Skill_C_Cpp_Java_Python_etc: skill.C_Cpp_Java_Python_etc ? 'Yes' : 'No',
    Skill_Full_Stack_Development_Frontend_or_Backend:
      skill.Full_Stack_Development_Frontend_or_Backend ? 'Yes' : 'No',
    Skill_Civil_Engineering: skill.Civil_Engineering ? 'Yes' : 'No',
    Skill_AI_ML_DL_Data_Science: skill.AI_ML_DL_Data_Science ? 'Yes' : 'No',
    Skill_Business_Data_Analytics_Product_Management:
      skill.Business_Data_Analytics_Product_Management ? 'Yes' : 'No',
    Three_Year_Select_All: threeYear.Select_All ? 'Yes' : 'No',
    Three_Year_Applied_Geology: threeYear.Applied_Geology ? 'Yes' : 'No',
    Three_Year_Applied_Geophysics: threeYear.Applied_Geophysics ? 'Yes' : 'No',
    Two_Year_Mtech_Select_All: twoYearMtech.Select_All ? 'Yes' : 'No',
    Two_Year_Mtech_Applied_Geology: twoYearMtech.Applied_Geology ? 'Yes' : 'No',
    Two_Year_Mtech_Applied_Geophysics: twoYearMtech.Applied_Geophysics
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Chemical_Engineering: twoYearMtech.Chemical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Civil_Engineering: twoYearMtech.Civil_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Computer_Science_and_Engineering:
      twoYearMtech.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Data_Analytics: twoYearMtech.Data_Analytics ? 'Yes' : 'No',
    Two_Year_Mtech_Electrical_Engineering: twoYearMtech.Electrical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Electronics_and_Communication_Engineering:
      twoYearMtech.Electronics_and_Communication_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Environmental_Engineering:
      twoYearMtech.Environmental_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Industrial_Engineering_and_Management:
      twoYearMtech.Industrial_Engineering_and_Management ? 'Yes' : 'No',
    Two_Year_Mtech_Mechanical_Engineering: twoYearMtech.Mechanical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Fuel_Minerals_and_Metallurgical_Engineering:
      twoYearMtech.Fuel_Minerals_and_Metallurgical_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Mining_Engineering: twoYearMtech.Mining_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Mining_Machinery_Engineering:
      twoYearMtech.Mining_Machinery_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Petroleum_Engineering: twoYearMtech.Petroleum_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Pharmaceutical_Science_and_Engineering:
      twoYearMtech.Pharmaceutical_Science_and_Engineering ? 'Yes' : 'No',
    Two_Year_Mba_Select_All: twoYearMba.Select_All ? 'Yes' : 'No',
    Two_Year_Mba_Business_Analytics: twoYearMba.Business_Analytics
      ? 'Yes'
      : 'No',
    Two_Year_Mba_Finance: twoYearMba.Finance ? 'Yes' : 'No',
    Two_Year_Mba_Human_Resources: twoYearMba.Human_Resources ? 'Yes' : 'No',
    Two_Year_Mba_Marketing: twoYearMba.Marketing ? 'Yes' : 'No',
    Two_Year_Mba_Operations: twoYearMba.Operations ? 'Yes' : 'No',
    Two_Year_Msc_Select_All: twoYearMsc.Select_All ? 'Yes' : 'No',
    Two_Year_Msc_Chemistry: twoYearMsc.Chemistry ? 'Yes' : 'No',
    Two_Year_Msc_Mathematics_and_Computing: twoYearMsc.Mathematics_and_Computing
      ? 'Yes'
      : 'No',
    Two_Year_Msc_Physics: twoYearMsc.Physics ? 'Yes' : 'No',
    Selection_Procedure_Resume_Shortlisting:
      selectionProcedure.Resume_Shortlisting ? 'Yes' : 'No',
    Selection_Procedure_Type_Of_Test_Technical: selectionProcedure.Type_Of_Test
      .Technical
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_Aptitude: selectionProcedure.Type_Of_Test
      .Aptitude
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_Both: selectionProcedure.Type_Of_Test.Both
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_None: selectionProcedure.Type_Of_Test.None
      ? 'Yes'
      : 'No',
    Selection_Procedure_Other_Qualification_Rounds_GD: selectionProcedure
      .Other_Qualification_Rounds.GD
      ? 'Yes'
      : 'No',
    Selection_Procedure_Other_Qualification_Rounds_Case_Study:
      selectionProcedure.Other_Qualification_Rounds.Case_Study ? 'Yes' : 'No',
    Selection_Procedure_Other_Qualification_Rounds_Interview: selectionProcedure
      .Other_Qualification_Rounds.Interview
      ? 'Yes'
      : 'No',
    Selection_Procedure_Total_Number_Of_Rounds:
      selectionProcedure.Total_Number_Of_Rounds,
    Selection_Procedure_Number_Of_Offers: selectionProcedure.Number_Of_Offers,
    Selection_Procedure_Eligibility_Criteria:
      selectionProcedure.Eligibility_Criteria,
    Primary_Hr_Name: hR_Details.Primary_Hr.name,
    Primary_Hr_Email: hR_Details.Primary_Hr.email,
    Primary_Hr_Mobile: hR_Details.Primary_Hr.mobile,
    Secondary_Hr_Name: hR_Details.Alternate_Hr.name,
    Secondary_Hr_Email: hR_Details.Alternate_Hr.email,
    Secondary_Hr_Mobile: hR_Details.Alternate_Hr.mobile,
    Priority_One: priority_Details.Priority_One,
    Priority_Two: priority_Details.Priority_Two,
    Sector: Sector,
    Category: Category,
  };
  doc.render({
    ...inf.Company_Overview,
    ...inf.Intern_Profile,
    ...inf.Salary_Details,
    ...inf.hR_Details,
    ...inf.priority_Details,
    ...data,
  });

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  if(env === 'production'){fs.writeFileSync(path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.docx'), buf);}
    else{fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);}

  

  var convertapi = require('convertapi')(convert_client_id);

  let result;
  if(env === 'production'){
    result = await convertapi.convert(
      'pdf',
      {
        File: path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.docx'),
      },
      'docx'
    );}
    else{
      result = await convertapi.convert(
        'pdf',
        {
          File: path.resolve(__dirname, 'output.docx'),
        },
        'docx'
      );
    }


  if(env === 'production') {await result.saveFiles('/root/src/api/utils/service/PDFservice/');}
  else {await result.saveFiles(__dirname);}

  let response;
  if(env === 'production'){
    response = await uploadFile(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.pdf'),
      'INF',
      'admin'
    );
  }
    else{
      response = await uploadFile(
        path.resolve(__dirname, 'output.pdf'),
        'INF',
        'admin'
      );
    }

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  
  inf.set({
    previewLink,
    downloadLink,
    status: 'complete',
  });
  await inf.save();

  let cc = [
    'mahapatraakash.19je0086@cse.iitism.ac.in',
    'niketgupta101@gmail.com'
  ];

  if (inf.HR_Details.Alternate_Hr.email !== '') {
    cc.push(inf.HR_Details.Alternate_Hr.email);
  }
  
  sendMailWithAttachment(
    inf.HR_Details.Primary_Hr.email,
    'Thank you for filling the notification form!',
    AttachmentMailHtml(),
    cc,
    inf.downloadLink
  );
  await inf.save();

  createStudentInfPdf(
    {
      ...inf.Company_Overview,
      ...inf.Intern_Profile,
      ...inf.Salary_Details,
      ...data,
    },
    inf._id
  );
};

exports.fillJNFDoc = async (jnf) => {

  
  let content;
  if(env === 'production'){
    content = fs.readFileSync(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/JNF.docx'),
      'binary'
    );}
    else{
      content = fs.readFileSync(
    path.resolve(__dirname, 'JNF.docx'),
    'binary'
  );
    }

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
  let Category = jnf.Company_Overview.Category;
  let Sector = jnf.Company_Overview.Sector;
  let fourYear = jnf.Eligible_Courses_And_Disciplines.Four_Year_Btech_Programs;
  let minor = jnf.Eligible_Courses_And_Disciplines.Minors;
  let fiveYear =
    jnf.Eligible_Courses_And_Disciplines
      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs;
  let skill = jnf.Eligible_Courses_And_Disciplines.Skill_Based_Hiring;
  let threeYear =
    jnf.Eligible_Courses_And_Disciplines.Three_Year_MSc_Tech_Programs;
  let twoYearMtech =
    jnf.Eligible_Courses_And_Disciplines.Two_Year_Mtech_Programs;
  let twoYearMba = jnf.Eligible_Courses_And_Disciplines.Two_Year_MBA_Programs;
  let twoYearMsc = jnf.Eligible_Courses_And_Disciplines.Two_Year_MSc_Programs;
  let selectionProcedure = jnf.Selection_Procedure;
  let hR_Details = jnf.HR_Details;
  let priority_Details_Job = jnf.Priority_Details;
  let data = {
    Four_Year_Select_All: fourYear.Select_All ? 'Yes' : 'No',
    Four_Year_Chemical_Engineering: fourYear.Chemical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Civil_Engineering: fourYear.Civil_Engineering ? 'Yes' : 'No',
    Four_Year_Computer_Science_and_Engineering:
      fourYear.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Four_Year_Electrical_Engineering: fourYear.Electrical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Electronics_and_Communication_Engineering:
      fourYear.Electronics_and_Communication_Engineering ? 'Yes' : 'No',
    Four_Year_Engineering_Physics: fourYear.Engineering_Physics ? 'Yes' : 'No',
    Four_Year_Environmental_Engineering: fourYear.Environmental_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Mechanical_Engineering: fourYear.Mechanical_Engineering
      ? 'Yes'
      : 'No',
    Four_Year_Mineral_and_Metallurgical_Engineering:
      fourYear.Mineral_and_Metallurgical_Engineering ? 'Yes' : 'No',
    Four_Year_Mining_Engineering: fourYear.Mining_Engineering ? 'Yes' : 'No',
    Four_Year_Mining_Machinery_Engineering:
      fourYear.Mining_Machinery_Engineering ? 'Yes' : 'No',
    Four_Year_Petroleum_Engineering: fourYear.Petroleum_Engineering
      ? 'Yes'
      : 'No',
    Five_Year_Select_All: fiveYear.Select_All ? 'Yes' : 'No',
    Five_Year_Computer_Science_and_Engineering:
      fiveYear.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Five_Year_Mathematics_and_Computing: fiveYear.Mathematics_and_Computing
      ? 'Yes'
      : 'No',
    Five_Year_Applied_Geology: fiveYear.Applied_Geology ? 'Yes' : 'No',
    Five_Year_Applied_Geophysics: fiveYear.Applied_Geophysics ? 'Yes' : 'No',
    Minor_Select_All: minor.Select_All ? 'Yes' : 'No',
    Minor_Exploration_Geology: minor.Exploration_Geology ? 'Yes' : 'No',
    Minor_Exploration_Geophysics: minor.Exploration_Geophysics ? 'Yes' : 'No',
    Minor_Separation_and_Purification_Technology:
      minor.Separation_and_Purification_Technology ? 'Yes' : 'No',
    Minor_Materials_Science: minor.Materials_Science ? 'Yes' : 'No',
    Minor_Infrastructure_Engineering: minor.Infrastructure_Engineering
      ? 'Yes'
      : 'No',
    Minor_Data_Science: minor.Data_Science ? 'Yes' : 'No',
    Minor_Electrical_Technology: minor.Electrical_Technology ? 'Yes' : 'No',
    Minor_Embedded_System_Design: minor.Embedded_System_Design ? 'Yes' : 'No',
    Minor_Environmental_Management: minor.Environmental_Management
      ? 'Yes'
      : 'No',
    Minor_Metallurgical_Engineering: minor.Metallurgical_Engineering
      ? 'Yes'
      : 'No',
    Minor_Opeartions_Management: minor.Opeartions_Management ? 'Yes' : 'No',
    Minor_Finance: minor.Finance ? 'Yes' : 'No',
    Minor_Marketing: minor.Marketing ? 'Yes' : 'No',
    Minor_Mathematics_and_Statistics: minor.Mathematics_and_Computing
      ? 'Yes'
      : 'No',
    Minor_Robotics: minor.Robotics ? 'Yes' : 'No',
    Minor_Manufacturing: minor.Manufacturing ? 'Yes' : 'No',
    Minor_Computational_Fluid_Dynamics: minor.Computational_Fluid_Dynamics
      ? 'Yes'
      : 'No',
    Minor_Mining_Methods_and_Safety: minor.Mining_Methods_and_Safety
      ? 'Yes'
      : 'No',
    Minor_Material_Handling_Engineering: minor.Material_Handling_Engineering
      ? 'Yes'
      : 'No',
    Minor_Petroleum_Production_Operations: minor.Petroleum_Production_Operations
      ? 'Yes'
      : 'No',
    Minor_High_Energy_Physics: minor.High_Energy_Physics ? 'Yes' : 'No',
    Minor_Nanotechnology: minor.Nanotechnology ? 'Yes' : 'No',

    Skill_C_Cpp_Java_Python_etc: skill.C_Cpp_Java_Python_etc ? 'Yes' : 'No',
    Skill_Full_Stack_Development_Frontend_or_Backend:
      skill.Full_Stack_Development_Frontend_or_Backend ? 'Yes' : 'No',
    Skill_Civil_Engineering: skill.Civil_Engineering ? 'Yes' : 'No',
    Skill_AI_ML_DL_Data_Science: skill.AI_ML_DL_Data_Science ? 'Yes' : 'No',
    Skill_Business_Data_Analytics_Product_Management:
      skill.Business_Data_Analytics_Product_Management ? 'Yes' : 'No',
    Three_Year_Select_All: threeYear.Select_All ? 'Yes' : 'No',
    Three_Year_Applied_Geology: threeYear.Applied_Geology ? 'Yes' : 'No',
    Three_Year_Applied_Geophysics: threeYear.Applied_Geophysics ? 'Yes' : 'No',
    Two_Year_Mtech_Select_All: twoYearMtech.Select_All ? 'Yes' : 'No',
    Two_Year_Mtech_Applied_Geology: twoYearMtech.Applied_Geology ? 'Yes' : 'No',
    Two_Year_Mtech_Applied_Geophysics: twoYearMtech.Applied_Geophysics
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Chemical_Engineering: twoYearMtech.Chemical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Civil_Engineering: twoYearMtech.Civil_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Computer_Science_and_Engineering:
      twoYearMtech.Computer_Science_and_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Data_Analytics: twoYearMtech.Data_Analytics ? 'Yes' : 'No',
    Two_Year_Mtech_Electrical_Engineering: twoYearMtech.Electrical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Electronics_and_Communication_Engineering:
      twoYearMtech.Electronics_and_Communication_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Environmental_Engineering:
      twoYearMtech.Environmental_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Industrial_Engineering_and_Management:
      twoYearMtech.Industrial_Engineering_and_Management ? 'Yes' : 'No',
    Two_Year_Mtech_Mechanical_Engineering: twoYearMtech.Mechanical_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Fuel_Minerals_and_Metallurgical_Engineering:
      twoYearMtech.Fuel_Minerals_and_Metallurgical_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Mining_Engineering: twoYearMtech.Mining_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Mining_Machinery_Engineering:
      twoYearMtech.Mining_Machinery_Engineering ? 'Yes' : 'No',
    Two_Year_Mtech_Petroleum_Engineering: twoYearMtech.Petroleum_Engineering
      ? 'Yes'
      : 'No',
    Two_Year_Mtech_Pharmaceutical_Science_and_Engineering:
      twoYearMtech.Pharmaceutical_Science_and_Engineering ? 'Yes' : 'No',
    Two_Year_Mba_Select_All: twoYearMba.Select_All ? 'Yes' : 'No',
    Two_Year_Mba_Business_Analytics: twoYearMba.Business_Analytics
      ? 'Yes'
      : 'No',
    Two_Year_Mba_Finance: twoYearMba.Finance ? 'Yes' : 'No',
    Two_Year_Mba_Human_Resources: twoYearMba.Human_Resources ? 'Yes' : 'No',
    Two_Year_Mba_Marketing: twoYearMba.Marketing ? 'Yes' : 'No',
    Two_Year_Mba_Operations: twoYearMba.Operations ? 'Yes' : 'No',
    Two_Year_Msc_Select_All: twoYearMsc.Select_All ? 'Yes' : 'No',
    Two_Year_Msc_Chemistry: twoYearMsc.Chemistry ? 'Yes' : 'No',
    Two_Year_Msc_Mathematics_and_Computing: twoYearMsc.Mathematics_and_Computing
      ? 'Yes'
      : 'No',
    Two_Year_Msc_Physics: twoYearMsc.Physics ? 'Yes' : 'No',
    Selection_Procedure_Resume_Shortlisting:
      selectionProcedure.Resume_Shortlisting ? 'Yes' : 'No',
    Selection_Procedure_Type_Of_Test_Technical: selectionProcedure.Type_Of_Test
      .Technical
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_Aptitude: selectionProcedure.Type_Of_Test
      .Aptitude
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_Both: selectionProcedure.Type_Of_Test.Both
      ? 'Yes'
      : 'No',
    Selection_Procedure_Type_Of_Test_None: selectionProcedure.Type_Of_Test.None
      ? 'Yes'
      : 'No',
    Selection_Procedure_Other_Qualification_Rounds_GD: selectionProcedure
      .Other_Qualification_Rounds.GD
      ? 'Yes'
      : 'No',
    Selection_Procedure_Other_Qualification_Rounds_Case_Study:
      selectionProcedure.Other_Qualification_Rounds.Case_Study ? 'Yes' : 'No',
    Selection_Procedure_Other_Qualification_Rounds_Interview: selectionProcedure
      .Other_Qualification_Rounds.Interview
      ? 'Yes'
      : 'No',
    Selection_Procedure_Total_Number_Of_Rounds:
      selectionProcedure.Total_Number_Of_Rounds,
    Selection_Procedure_Number_Of_Offers: selectionProcedure.Number_Of_Offers,
    Selection_Procedure_Eligibility_Criteria:
      selectionProcedure.Eligibility_Criteria,
    Primary_Hr_Name: hR_Details.Primary_Hr.name,
    Primary_Hr_Email: hR_Details.Primary_Hr.email,
    Primary_Hr_Mobile: hR_Details.Primary_Hr.mobile,
    Secondary_Hr_Name: hR_Details.Alternate_Hr.name,
    Secondary_Hr_Email: hR_Details.Alternate_Hr.email,
    Secondary_Hr_Mobile: hR_Details.Alternate_Hr.mobile,
    Priority_One_Job: priority_Details_Job.Priority_One_Job,
    Priority_Two_Job: priority_Details_Job.Priority_Two_Job,
    Sector: Sector,
    Category: Category,
  };
  doc.render({
    ...jnf.Company_Overview,
    ...jnf.Job_Details,
    ...jnf.Salary_Details,
    ...jnf.HR_Details,
    ...jnf.Priority_Details,
    ...data,
  });

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });


  if(env === 'production'){fs.writeFileSync(path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.docx'), buf);}
    else{fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);}
  

  var convertapi = require('convertapi')(convert_client_id);

  let result;
  if(env === 'production'){
    result = await convertapi.convert(
      'pdf',
      {
        File: path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.docx'),
      },
      'docx'
    );}
    else{
      result = await convertapi.convert(
        'pdf',
        {
          File: path.resolve(__dirname, 'output.docx'),
        },
        'docx'
      );
    }

  if(env === 'production') {await result.saveFiles(path.resolve(__dirname,'/root/src/api/utils/service/PDFservice/'));}
  else {await result.saveFiles(path.resolve(__dirname));}

  let response;
  if(env === 'production'){
    response = await uploadFile(
      path.resolve(__dirname, '/root/src/api/utils/service/PDFservice/output.pdf'),
      'JNF',
      'admin'
    );
  }
    else{
      response = await uploadFile(
        path.resolve(__dirname, 'output.pdf'),
        'JNF',
        'admin'
      );
    }

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  

  jnf.set({
    previewLink,
    downloadLink,
    status: 'complete',
  });
  await jnf.save();

  let cc = [
    'niketgupta101@gmail.com',
    'mahapatraakash.19je0086@cse.iitism.ac.in',
  ];
  
  if (jnf.HR_Details.Alternate_Hr.email !== '') {
    cc.push(jnf.HR_Details.Alternate_Hr.email);
  }

  sendMailWithAttachment(
    jnf.HR_Details.Primary_Hr.email,
    'Thank you for filling the notification form!',
    AttachmentMailHtml(),
    cc,
    jnf.downloadLink
  );
  await jnf.save();
  createStudentJnfPdf(
    {
      ...jnf.Company_Overview,
      ...jnf.Job_Details,
      ...jnf.Salary_Details,
      ...data,
    },
    jnf._id
  );
};

const AttachmentMailHtml = () => {
  return `<div>
  <div marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="
            @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
            font-family: 'Open Sans', sans-serif;
          ">
      <tr>
        <td>
          <table style="
                  background-color: #f2f3f8;
                  max-width: 670px;
                  margin: 0 auto;
                " width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="
                        max-width: 670px;
                        background: #fff;
                        border-radius: 3px;
                        text-align: center;
                        -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      ">
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 35px">
                      <div>
                        <h1 style="
                                color: #1e1e2d;
                                font-weight: 500;
                                margin: 10px 0;
                                font-size: 30px;
                                font-family: 'Rubik', sans-serif;
                                letter-spacing: 2px;
                              ">
                          Thank you for filling the notification form!
                        </h1>
                      </div>

                      <span style="
                              display: inline-block;
                              vertical-align: middle;
                              margin: 29px 0 26px;
                              border-bottom: 1px solid #cecece;
                              width: 100px;
                            "></span>
                      <p style="
                              color: #455056;
                              font-size: 15px;
                              line-height: 24px;
                              margin: 0;
                            ">
                        This automatic reply is just to let you know that we have received your response.
                        Attached below is the copy of your responses. For queries kindly email the Career and Develpment
                        Cell of IIT(ISM) Dhanbad at
                        <span style="color:blue; cursor:pointer;">cdc@iitism.ac.in</span>
                      </p>
                      <p>
                      <div style="
                          color: #455056;
                          font-size: 13px;
                          line-height: 24px;
                          font-weight: 500;
                          margin: 30px 0 0 0;
                          letter-spacing: 1px;
                        ">Thanks</div>
                      <div style="
                        color: #455056;
                        font-size: 13px;
                        line-height: 24px;
                        font-weight: 500;
                        margin: 0px 0 20px 0;
                        letter-spacing: 1px;
                      ">CDC, IIT(ISM) Dhanbad</div>
                      </p>

                    </td>
                  </tr>
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p style="
                        font-size: 14px;
                        color: rgba(69, 80, 86, 0.7411764705882353);
                        line-height: 18px;
                        margin: 0 0 0;
                      ">
                  <a target="_blank" href="https://cdc.iitism.ac.in/"><strong>https://cdc.iitism.ac.in/</strong></a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--/100% body table-->
  </div>
</div>`;
};
