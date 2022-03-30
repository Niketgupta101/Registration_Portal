const { google } = require('googleapis');

let { gs_client_email, gs_private_key } = require('../../../config/vars');

gs_private_key = gs_private_key.replace(/\\n/g ,'\n');

const client = new google.auth.JWT(
    gs_client_email, 
    null, 
    gs_private_key,
    ['https://www.googleapis.com/auth/spreadsheets'] 
);

client.authorize((err, tokens) => {
    if(err){
        console.log(err);
        return;
    }
});

const readSheet = async (spreadsheetId) => {
    const gsapi = google.sheets({
        version: 'v4',
        auth: client
    });


    const options = {
        spreadsheetId: spreadsheetId,
        range: 'Companies!A1:K'
    };

    let {data} = await gsapi.spreadsheets.values.get(options);

    let dataValues = data.values;

    dataValues = dataValues.map((item) => {
        while(item.length < 2){
            item.push('');
        }
        return item;
    })
    return dataValues;
};

const updateSheet = async (spreadsheetId, dataValues) => {

    const gsapi = google.sheets({
        version: 'v4',
        auth: client
    });
    console.log({ dataValues });
    const updateOptions = {
        spreadsheetId,
        range: 'Companies!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: dataValues
        }
    };

    try {
        await gsapi.spreadsheets.values.update(updateOptions);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { readSheet, updateSheet };