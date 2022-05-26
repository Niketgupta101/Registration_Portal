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

const createStudentInfPdf = async (data, id) => {
  const student = fs.readFileSync(
    path.resolve(__dirname, 'INFstudent.docx'),
    'binary'
  );

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

  fs.writeFileSync(path.resolve(__dirname, 'studentOutput.docx'), studentBuf);

  var convertapi = require('convertapi')('fNvk89UQF26MbYaX');

  let studentResult = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, 'studentOutput.docx'),
    },
    'docx'
  );

  await studentResult.saveFiles(__dirname);

  let studentResponse = await uploadFile(
    path.resolve(__dirname, 'studentOutput.pdf'),
    'INF',
    'students'
  );

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
  const student = fs.readFileSync(
    path.resolve(__dirname, 'JNFstudent.docx'),
    'binary'
  );

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

  fs.writeFileSync(path.resolve(__dirname, 'studentOutput.docx'), studentBuf);

  var convertapi = require('convertapi')('fNvk89UQF26MbYaX');

  let studentResult = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, 'studentOutput.docx'),
    },
    'docx'
  );

  await studentResult.saveFiles(__dirname);

  let studentResponse = await uploadFile(
    path.resolve(__dirname, 'studentOutput.pdf'),
    'JNF',
    'students'
  );

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
  const content = fs.readFileSync(
    path.resolve(__dirname, 'INF.docx'),
    'binary'
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  let fourYear = inf.Eligible_Courses_And_Disciplines.Four_Year_Btech_Programs;
  let fiveYear =
    inf.Eligible_Courses_And_Disciplines
      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs;
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
  console.log(priority_Details);
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
    Priority_One: priority_Details.Priority1,
    Priority_Two : priority_Details.Priority2
  };
  console.log({ selectionProcedure });
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

  fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);

  var convertapi = require('convertapi')('fNvk89UQF26MbYaX');
  let result = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, 'output.docx'),
    },
    'docx'
  );

  await result.saveFiles(__dirname);

  let response = await uploadFile(
    path.resolve(__dirname, 'output.pdf'),
    'INF',
    'admin'
  );

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  inf.set({
    previewLink,
    downloadLink,
    status: 'complete',
  });
  await inf.save();

  sendMailWithAttachment(
    'niketgupta101@gmail.com',
    'Job form notification',
    '<h5>Company has successfully filled a vacancy form</h5>',
    inf.previewLink
  );
  sendMailWithAttachment(
    inf.HR_Details.Primary_Hr.email,
    'Job form notification',
    '<h5>Company has successfully filled a vacancy form</h5>',
    inf.previewLink
  );
  if (inf.HR_Details.Alternate_Hr.email !== '') {
    sendMailWithAttachment(
      inf.HR_Details.Alternate_Hr.email,
      'Job form notification',
      '<h5>Company has successfully filled a vacancy form</h5>',
      inf.previewLink
    );
  }

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
  const content = fs.readFileSync(
    path.resolve(__dirname, 'JNF.docx'),
    'binary'
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  let fourYear = jnf.Eligible_Courses_And_Disciplines.Four_Year_Btech_Programs;
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
  let priority_Details = jnf.Priority_Details;
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
    Priority_One: priority_Details.Priority1,
    Priority_Two : priority_Details.Priority2
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

  fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);

  var convertapi = require('convertapi')('fNvk89UQF26MbYaX');
  let result = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, 'output.docx'),
    },
    'docx'
  );

  await result.saveFiles(path.resolve(__dirname));
  console.log('line 558');

  let response = await uploadFile(
    path.resolve(__dirname, 'output.pdf'),
    'JNF',
    'admin'
  );

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  jnf.set({
    previewLink,
    downloadLink,
    status: 'complete',
  });
  await jnf.save();

  sendMailWithAttachment(
    'niketgupta101@gmail.com',
    'Job form notification',
    '<h5>Company has successfully filled a vacancy form</h5>',
    jnf.previewLink
  );
  sendMailWithAttachment(
    jnf.HR_Details.Primary_Hr.email,
    'Job form notification',
    '<h5>Company has successfully filled a vacancy form</h5>',
    jnf.previewLink
  );
  if (jnf.HR_Details.Alternate_Hr.email !== '') {
    sendMailWithAttachment(
      jnf.HR_Details.Alternate_Hr.email,
      'Job form notification',
      '<h5>Company has successfully filled a vacancy form</h5>',
      jnf.previewLink
    );
  }

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
