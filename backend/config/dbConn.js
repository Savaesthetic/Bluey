const mongoose = require('mongoose');

/*
    Connects to a mongodb database using the URI in the .env file.
    additional settings are required to avoid deprecated warnings
*/
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB