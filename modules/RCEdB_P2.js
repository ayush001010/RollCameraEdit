const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/RCEmediaDB`);

const userSchema = mongoose.Schema({
    ProjectClient: String,
    ProjectImage: String,
    ProjectTitle: String,
    ProjectDiscription: String,
})

module.exports = mongoose.model("RCEDatabaseAllPortFolio", userSchema);