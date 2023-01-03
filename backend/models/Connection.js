const mongoose = require("mongoose");

const ConnectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
    role: {
        type: String,
    },
    email: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    twitter: {
        type: String,
    },
    firstMessage: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }

}, { timestamps: true });

const Connection = mongoose.model("Connection", ConnectionSchema);

module.exports = Connection;