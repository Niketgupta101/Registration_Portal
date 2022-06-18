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
} = require('../service/upload');
const { sendMailWithAttachment } = require('../service/email');
const { NewInf } = require('../../models/InfData');
const { readSheet, updateSheet } = require('../service/GSheets');

let basePathname;

if (env === 'production') {
  basePathname = '/root/src/api/utils/PdfService';
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
    await result.saveFiles('/root/src/api/utils/PdfService/');
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
    'mahapatraakash.19je0086@cse.iitism.ac.in',
    // 'niketgupta101@gmail.com',
  ];

  if (inf.Secondary_Hr.SH_Email !== '') {
    cc.push(inf.Secondary_Hr.SH_Email);
  }

  sendMailWithAttachment(
    inf.Primary_Hr.PH_Email,
    'Thank you for filling the notification form!',
    AttachmentMailHtml(),
    'You have successfully filled the job notification form. The pdf of the same is attached herewith',
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
    await result.saveFiles('/root/src/api/utils/PdfService/');
  } else {
    await result.saveFiles(__dirname);
  }

  let response = await uploadFile(
    path.resolve(__dirname, `${basePathname}/studentOutput.pdf`),
    'INF',
    'student'
  );

  let { previewLink } = await generatePreviewUrl(response.data.id);
  let { downloadLink } = await generateDownloadUrl(response.data.id);

  inf.set({
    studentPreviewLink: previewLink,
    studentDownloadLink: downloadLink,
    status: 'complete',
  });

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

const updateInfInGSheets = async (inf) => {
  let details = [
    inf._id.valueOf(),
    inf.userId,
    inf.Company_Overview.CO_Name_Of_The_Company,
    // ...getValues(inf.Intern_Profile),
    inf.Intern_Profile.IP_Job_Designation,
    // ...getValues(inf.Salary_Details),
    inf.adminPreviewLink,
    inf.adminDownloadLink,
    inf.createdAt,
    inf.updatedAt,
  ];

  let data = await readSheet(
    '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    'INF',
    'A1:J'
  );
  data.push(details);
  await updateSheet(
    '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    'INF',
    data,
    'A1:J'
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

module.exports = {
  createInfPdfForAdmin,
  createInfPdfForStudent,
  updateInfInGSheets,
};
