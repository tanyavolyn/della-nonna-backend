const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Dish", dishSchema)