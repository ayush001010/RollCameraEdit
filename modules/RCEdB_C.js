const mongoose = require('mongoose');
const db = 'mongodb+srv://heyayush194:%40Yush869@cluster0.bmmlb.mongodb.net/RCEmediaDB?retryWrites=true&w=majority';

mongoose.set('debug', true);
mongoose.connect(db)
    .then(() => {
        console.log('RCEmedia Rolling Database_Client !!!');
    })
    .catch((err) => {
        console.error('RCEmedia Cut !!!', err.message);
    });

const userSchema = mongoose.Schema({
    ClientImage: String,
    ClientName: String,
    ClientAbout: String
})

module.exports = mongoose.model("RCEDatabaseOfClient", userSchema);

