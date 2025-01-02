const mongoose = require('mongoose');
const db = 'mongodb+srv://heyayush194:%40Yush869@cluster0.bmmlb.mongodb.net/RCEmediaDB?retryWrites=true&w=majority';

mongoose.set('debug', true);
mongoose.connect(db)
    .then(() => {
        console.log('RCEmedia Rolling Database_Protfolio !!!');
    })
    .catch((err) => {
        console.error('RCEmedia Cut !!!', err.message);
    });

const userSchema = mongoose.Schema({
    ProjectTitle: String,
    ProjectSubTitle: String,
    ProjectDiscription: String,
})

module.exports = mongoose.model("RCEDatabaseOfPorfolio", userSchema);

