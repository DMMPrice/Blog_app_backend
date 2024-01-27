const mongoose = require('mongoose');

MONGO_URI=`mongodb+srv://admin:admin@cluster0.sdihrlj.mongodb.net/?retryWrites=true&w=majority`;
const connectDatabase = async () => {
    await mongoose.connect(MONGO_URI, {}).then(() => {
        console.log('DB Connected');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDatabase;
