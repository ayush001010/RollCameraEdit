const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/RCEmediaDB`);

const userSchema = mongoose.Schema({
    NameOfTestimonial: String,
    Testimonial: String,
})

module.exports = mongoose.model("RCEDatabaseOfTmnl", userSchema);

