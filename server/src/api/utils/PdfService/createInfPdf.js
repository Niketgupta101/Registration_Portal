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
const { convertDocToPdf } = require('./docToPdf');

var converter = require('docx-pdf');

let basePathname;

if (env === 'production') {
  basePathname = '/root/src/api/utils/PDFservice';
} else {
  basePathname = '.';
}

const createInfPdfForAdmin = async (inf) => {
  let content = fs.readFileSync(
    path.resolve(__dirname, `${basePathname}/INF.docx`),
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
    ...inf.Salary_Details,
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

  await convertDocToPdf('output.docx', 'output.pdf');

  // converter(
  //   './src/api/utils/PdfService/output.docx',
  //   './src/api/utils/PdfService/output.pdf',
  //   (err, result) => {
  //     if (err) {
  //       console.log(error);
  //       return;
  //     } else {
  //       console.log(result);
  //     }
  //   }
  // );

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

const createInfPdfForStudent = async (inf) => {};

module.exports = { createInfPdfForAdmin, createInfPdfForStudent };
