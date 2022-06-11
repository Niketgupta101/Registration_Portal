const fs = require('fs');
const path = require('path');

async function convertDocToPdf(inputfile, outputfile) {
  return new Promise(async (resolve, reject) => {
    const inputPath = path.join(__dirname, 'test.docx');
    let docData = await fs
      .readFile(inputPath)
      .docxConverter(inputfile, outputfile, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
  });
}
module.exports = { convertDocToPdf };
