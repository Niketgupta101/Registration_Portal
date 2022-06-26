const { google } = require('googleapis');
const fs = require('fs');
const {
  UploadClientId,
  UploadClientSecret,
  UploadRedirectURI,
  UploadRefreshToken,
} = require('../../../config/vars');

const oAuth2Client = new google.auth.OAuth2(
  UploadClientId,
  UploadClientSecret,
  UploadRedirectURI
);

oAuth2Client.setCredentials({ refresh_token: UploadRefreshToken });

const drive = google.drive({
  version: 'v3',
  auth: oAuth2Client,
});
const parents = [
  '1ADxisnnvOwSHXKZg61jZ_0MQzA7v0kGU', //intern student
  '1F3Vv-7tI6djoYKqiuMSLhrsksKRIIIS-', //intern cdc
  '1cYV1Nbg-MIfl4ipVQHJGMCa9K9PBUQMR', //job cdc
  '1JYDBumRjdHVatHzPXnlMzjGF8B-MHI6O', //job students
];

exports.uploadFile = async (filePath, type, viewer) => {
  let parent = '';
  if (type == 'INF') {
    if (viewer == 'students') parent = parents[0];
    else parent = parents[1];
  } else {
    if (viewer == 'students') parent = parents[2];
    else parent = parents[3];
  }
  try {
    const response = await drive.files.create({
      requestBody: {
        name: `file-${Date.now()}`,
        mimeType: 'application/pdf',
        parents: [parent],
      },
      media: {
        mimeType: 'application/pdf',
        body: fs.createReadStream(filePath),
      },
    });

    return {
      success: true,
      message: 'File uploaded successfully',
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return { success: true, message: 'File could not be uploaded' };
  }
};

exports.deleteFile = async (id) => {
  try {
    await drive.files.delete({
      fileId: id,
    });

    return { success: true, message: 'File deleted successfully' };
  } catch (error) {
    return { success: true, message: 'File could not be deleted' };
  }
};

exports.generatePreviewUrl = async (id) => {
  try {
    const fileId = id;

    await drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    const result = await drive.files.get({
      fileId,
      fields: 'webViewLink',
    });

    return { success: true, previewLink: result.data.webViewLink };
  } catch (error) {
    return { success: true, message: 'File link could not be fetched' };
  }
};

exports.generateDownloadUrl = async (id) => {
  try {
    const fileId = id;

    await drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    const result = await drive.files.get({
      fileId,
      fields: 'webContentLink',
    });

    return { success: true, downloadLink: result.data.webContentLink };
  } catch (error) {
    return { success: true, message: 'File link could not be fetched' };
  }
};
