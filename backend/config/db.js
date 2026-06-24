//responsibility: connect to MongoDB Atlas

const mongoose = require("mongoose"); //import mongoose library

const connectDB = async () => { //connection to MongoDbB takes time

    try {
        //console.log(process.env.MONGO_URI);
        await mongoose.connect(  //waiting for connection to establish
            process.env.MONGO_URI, { //read connection str from .env
                serverSelectionTimeoutMS: 10000,  //waits max 10s for DB to respond
            }
        );

        console.log("MongoDB Connected");

    } catch (error) {
        console.error("FULL ERROR:")
        console.error(error);  //shows entire err obj
        process.exit(1);  //app crashed cuz of an err
    }
};

module.exports = connectDB;  //exports function