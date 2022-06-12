const fs = require('fs');
const path = require('path');

const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const { convert_client_id } = require('../../../config/vars');
const { env } = require('../../../config/vars');
const {
  uploadFile,
  generatePreviewUrl,
  generateDownloadUrl,
} = require('../service/PDFservice/upload');
const { sendMailWithAttachment } = require('../service/email');
const { NewInf } = require('../../models/InfData');

let basePathname;

if (env === 'production') {
  basePathname = '/root/src/api/utils/PDFservice';
} else {
  basePathname = '.';
}

const createInfPdfForAdmin = async (inf, filename) => {
  let content = fs.readFileSync(
    path.resolve(__dirname, `${basePathname}/${filename}`),
    'binary'
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render({
    ...inf.Company_Overview,
    ...inf.Intern_Profile,
    ...inf.Stipend_Details,
    ...getReleventData({ data: inf.Four_Year_Btech }),
    ...getReleventData({ data: inf.Five_Year_Integrated }),
    ...getReleventData({ data: inf.Two_Year_Mtech }),
    ...getReleventData({ data: inf.Three_Year_Msc }),
    ...getReleventData({ data: inf.Two_Year_MBA }),
    ...getReleventData({ data: inf.Minor }),
    ...getReleventData({ data: inf.Two_Year_Msc }),
    ...getReleventData({ data: inf.Five_Year_Dual_Degree }),
    ...getReleventData({ data: inf.Double_Major }),
    ...getReleventData({ data: inf.Skill_Based }),
    ...inf.Selection_Procedure,
    ...inf.Primary_Hr,
    ...inf.Secondary_Hr,
  });

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  fs.writeFileSync(path.resolve(__dirname, `${basePathname}/output.docx`), buf);

  var convertapi = require('convertapi')(convert_client_id);

  let result = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, `${basePathname}/output.docx`),
    },
    'docx'
  );

  if (env === 'production') {
    await result.saveFiles('/root/src/api/utils/service/PDFservice/');
  } else {
    await result.saveFiles(__dirname);
  }

  let response = await uploadFile(
    path.resolve(__dirname, `${basePathname}/output.pdf`),
    'INF',
    'admin'
  );

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  inf.set({
    adminPreviewLink: previewLink,
    adminDownloadLink: downloadLink,
    status: 'complete',
  });

  let cc = [
    // 'mahapatraakash.19je0086@cse.iitism.ac.in',
    'niketgupta101@gmail.com',
  ];

  if (inf.Secondary_Hr.Email !== '') {
    cc.push(inf.Secondary_Hr.Email);
  }

  sendMailWithAttachment(
    inf.Secondary_Hr.Email,
    'Thank you for filling the notification form!',
    'Hi',
    cc,
    inf.adminDownloadLink
  );
};

const createInfPdfForStudent = async (infId, filename) => {
  let inf = await NewInf.findOne({ _id: infId });

  let content = fs.readFileSync(
    path.resolve(__dirname, `${basePathname}/${filename}`),
    'binary'
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render({
    ...inf.Company_Overview,
    ...inf.Intern_Profile,
    ...inf.Stipend_Details,
    ...getReleventData({ data: inf.Four_Year_Btech }),
    ...getReleventData({ data: inf.Five_Year_Integrated }),
    ...getReleventData({ data: inf.Two_Year_Mtech }),
    ...getReleventData({ data: inf.Three_Year_Msc }),
    ...getReleventData({ data: inf.Two_Year_MBA }),
    ...getReleventData({ data: inf.Minor }),
    ...getReleventData({ data: inf.Two_Year_Msc }),
    ...getReleventData({ data: inf.Five_Year_Dual_Degree }),
    ...getReleventData({ data: inf.Double_Major }),
    ...getReleventData({ data: inf.Skill_Based }),
    ...inf.Selection_Procedure,
    ...inf.Primary_Hr,
    ...inf.Secondary_Hr,
  });

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  fs.writeFileSync(
    path.resolve(__dirname, `${basePathname}/studentOutput.docx`),
    buf
  );

  var convertapi = require('convertapi')(convert_client_id);

  let result = await convertapi.convert(
    'pdf',
    {
      File: path.resolve(__dirname, `${basePathname}/studentOutput.docx`),
    },
    'docx'
  );

  if (env === 'production') {
    await result.saveFiles('/root/src/api/utils/service/PDFservice/');
  } else {
    await result.saveFiles(__dirname);
  }

  let response = await uploadFile(
    path.resolve(__dirname, `${basePathname}/studentOutput.pdf`),
    'INF',
    'admin'
  );

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  inf.set({
    studentPreviewLink: previewLink,
    studentDownloadLink: downloadLink,
    status: 'complete',
  });

  let cc = [
    // 'mahapatraakash.19je0086@cse.iitism.ac.in',
    'niketgupta101@gmail.com',
  ];

  if (inf.Secondary_Hr.Email !== '') {
    cc.push(inf.Secondary_Hr.Email);
  }

  sendMailWithAttachment(
    inf.Secondary_Hr.Email,
    'Thank you for filling the notification form!',
    'Hi',
    cc,
    inf.studentDownloadLink
  );

  await inf.save();
};

const getReleventData = ({ data }) => {
  let newData = {};
  for (let field in data) {
    if (data[field]) newData[field] = 'Yes';
    else newData[field] = 'No';
  }
  return newData;
};

module.exports = { createInfPdfForAdmin, createInfPdfForStudent };
