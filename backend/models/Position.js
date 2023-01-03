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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
}, { timestamps: true } );

const Position = mongoose.model("Position", PositionSchema);

module.exports = Position;