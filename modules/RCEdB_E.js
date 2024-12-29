const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/RCEmediaDB`);

const userSchema = mongoose.Schema({
    ExpertiesTitle: String,
    ExpertiesInfo: String,
})

module.exports = mongoose.model("RCEDatabaseOfExperties", userSchema);

