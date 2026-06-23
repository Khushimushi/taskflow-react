const mongoose = require("mongoose");

const connectDB = async () => { //connection to MongoDbB takes time

    try {
        //console.log(process.env.MONGO_URI);
        await mongoose.connect(  //waiting for connection to establish
            process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 10000,
            }
        );

        console.log("MongoDB Connected");

    } catch (error) {
        console.error("FULL ERROR:")
        console.error(error/*.message*/);
        process.exit(1);
    }
};

module.exports = connectDB;