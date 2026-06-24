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
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,  //ObjectId stores ongodb doc id
        ref: "User",  //tells mongoose this objid points to a User doc
        required: "true"
    }

}, {
    timestamps: true  //automatically creates createdAt/updatedAt
});

module.exports = mongoose.model("Task", taskSchema);
