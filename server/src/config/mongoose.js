const mongoose = require('mongoose');
const { mongouri } = require('./vars.js');

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(-1);
})

exports.connect = () => {
    mongoose.connect(mongouri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB connected...'));
    return mongoose.connection;
}
