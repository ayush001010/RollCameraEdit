const mongoose = require('mongoose');
const db = 'mongodb+srv://heyayush194:%40Yush869@cluster0.bmmlb.mongodb.net/RCEmediaDB?retryWrites=true&w=majority';

mongoose.set('debug', true);
mongoose.connect(db)
    .then(() => {
        console.log('RCEmedia Rolling Database_AllProtfolio !!!');
    })
    .catch((err) => {
        console.error('RCEmedia Cut !!!', err.message);
    });

const userSchema = mongoose.Schema({
    ProjectClient: String,
    ProjectImage: String,
    ProjectTitle: String,
    ProjectDiscription: String,
})

module.exports = mongoose.model("RCEDatabaseAllPortFolio", userSchema);