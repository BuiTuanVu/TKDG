var mongoose = require('mongoose');

const urlDB = '';
const dbName = 'news-website';

const connectDB = mongoose.connect(urlDB, (error) => {
    if (error) {
        console.log('Error connect mgDB' + error);
    } else {
        console.log('Connected successfully to server!');
    }
});
module.exports = connectDB;