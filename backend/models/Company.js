const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    }
}, { timestamps:true } );

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;