const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    source: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
}, { timestamps: true } );

const Position = mongoose.model("Position", PositionSchema);

module.exports = Position;