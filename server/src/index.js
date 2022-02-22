const { port, env } = require('./config/vars.js');
const app = require('./config/express.js');
const mongoose = require('./config/mongoose.js');

mongoose.connect();

// const { createInvoice } = require('./api/utils/service/createPDF');

// const invoice = require('./api/utils/service/invoice.json');

// createInvoice(invoice);

app.listen(port, () => {
    console.log(`server started on port ${port} (${env})`);
})

module.exports = app;