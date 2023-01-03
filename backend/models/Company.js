const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    websiteURL: {
        type: String,
    },
    positions: {
        type: Array,
        default: [],
    },
    connections: {
        type: Array,
        default: [],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
}, { timestamps:true } );

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;