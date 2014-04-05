var db = require('../lib/db');

var schema = new db.Schema({
  name: String,
  path: String
});

module.exports = db.mongoose.model('Photo', schema);
