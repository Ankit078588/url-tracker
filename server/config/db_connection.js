const mongoose = require('mongoose');
const URL = process.env.DB_URL;

mongoose.connect(URL)
.then(() => { console.log('DB connection established'); })
.catch((err) => { console.error('DB connection error:', err); });


module.exports = mongoose.connection;