const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");
const INF = require("../../models/INF");

let filePath = path.join(__dirname, "invoice.pdf");

const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const { uploadFile, generateDownloadUrl, generatePreviewUrl } = require("./upload");

exports.fillINFDoc = async (inf) => {
  console.log("fill inf doc");
  console.log(__dirname);
  const content = fs.readFileSync(
    path.resolve(__dirname, "INF.docx"),
    "binary"
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render(inf.Company_Overview);

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);

  var convertapi = require("convertapi")("qrIqxick6zL34d5B");
  let result = await convertapi.convert(
    "pdf",
    {
      File: path.resolve(__dirname, "output.docx"),
    },
    "docx"
  );
  await result.saveFiles(path.resolve(__dirname));

  let response = await uploadFile(path.resolve(__dirname, "output.pdf"));
  console.log(response)

  let {previewLink} = await generatePreviewUrl(response.data.id);
  let {downloadLink} = await generateDownloadUrl(response.data.id);

  inf.set({ previewLink, downloadLink });
  console.log(inf);
  await inf.save();
};

exports.fillJNFDoc = async (jnf) => {};

exports.createInvoice = (invoice) => {
  let doc = new PDFDocument({ margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(filePath));
};

function generateHeader(doc) {
  doc.fontSize(20).text("Internship Notification Form", 150, 100).moveDown();
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text("This is Footer", 50, 780, { align: "center", width: 500 });
}

function generateCustomerInformation(doc, invoice) {}

function generateTableRow(doc, y, c1, c2) {
  doc.fontSize(10).text(c1, 50, y).text(c2, 250, y);
}

function generateInvoiceTable(doc, invoice) {
  let invoiceTableTop = 120;
  let cnt = 0;
  for (var tag in invoice) {
    doc
      .fontSize(15)
      .text(`${tag}`, 180, invoiceTableTop + (cnt + 2) * 30)
      .moveDown();
    cnt = cnt + 3;
    for (var subTag in invoice[tag]) {
      let position = invoiceTableTop + (cnt + 1) * 30;
      generateTableRow(doc, position, subTag, invoice[tag][subTag]);
      cnt = cnt + 1;
    }
  }
}
