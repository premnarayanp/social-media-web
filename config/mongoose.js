const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/codeial_development');
mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function() {
    console.log('connected to Database :: MongoDB');
});

module.exports = db;