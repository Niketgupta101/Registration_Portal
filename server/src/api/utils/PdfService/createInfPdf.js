let basePathname;

if (env === 'production') {
  basePathname = '/root/src/api/utils/PDFservice';
} else {
  basePathname = '';
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
};

const createInfPdfForStudent = async (inf) => {};
