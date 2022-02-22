const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");

let filePath = path.join(__dirname, "invoice.pdf");

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
    doc.fontSize(15).text(`${tag}`, 180, invoiceTableTop + (cnt + 2) * 30).moveDown();
    cnt = cnt + 3;
    for (var subTag in invoice[tag]) {
      let position = invoiceTableTop + (cnt + 1) * 30;
      generateTableRow(doc, position, subTag, invoice[tag][subTag]);
      cnt = cnt + 1;
    }
  }
}
