var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error: '));
db.once('open', function() {
  console.log('MongoDB connection open');
});

module.exports = db;



