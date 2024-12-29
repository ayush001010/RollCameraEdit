const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/RCEmediaDB`);

const userSchema = mongoose.Schema({
    ProjectTitle: String,
    ProjectSubTitle: String,
    ProjectDiscription: String,
})

module.exports = mongoose.model("RCEDatabaseOfPorfolio", userSchema);

