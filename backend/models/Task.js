const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({  //Schema = blueprint

    text: {
        type: String,
        required: true  //validation rule
    },

    completed: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true  //automatically creates createdAt/updatedAt
});

module.exports = mongoose.model("Task", taskSchema);