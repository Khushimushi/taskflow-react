//structure of user docs

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);


//model creation
module.exports = mongoose.model("User", userSchema);
