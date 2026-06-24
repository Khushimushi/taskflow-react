//structure of task docs

const mongoose = require("mongoose");  //to create schemas and model

const taskSchema = new mongoose.Schema({  //Schema = blueprint
    
    //task description
    text: {
        type: String,
        required: true  //validation rule
    },

    //task status
    completed: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true  //automatically creates createdAt/updatedAt
});

module.exports = mongoose.model("Task", taskSchema);
