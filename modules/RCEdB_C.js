const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/RCEmediaDB`);

const userSchema = mongoose.Schema({
    ClientImage: String,
    ClientName: String,
})

module.exports = mongoose.model("RCEDatabaseOfClient", userSchema);

