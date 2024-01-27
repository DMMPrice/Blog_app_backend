const mongoose = require('mongoose');

MONGO_URI=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sdihrlj.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
const connectDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI, {}).then(() => {
        console.log('DB Connected');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDatabase;
