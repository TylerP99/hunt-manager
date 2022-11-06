const Company = require("../models/Company");

const CompanyController = {

    /*
    @desc:    Creates a new company entry in the db
    @route:   POST /api/company
    @access:  Private (Users with authentication)
    */
    create_company_handler: (req, res, next) => {
        res.status(200).json({"message":"Create new company"});
    },

    /*
    @desc:    Gets all user's company entries
    @route:   GET /api/company
    @access:  Private
    */
    get_company_handler: (req, res, next) => {
        res.status(200).json({"message":"Get companies"});
    },

    /*
    @desc:    Updates a specifies company's information within the database
    @params: {
        id: company id
    }
    @route:   PUT /api/company/:id
    @access:  Private
    */
    update_company_handler: (req, res, next) => {
        res.status(200).json({"message":`Update company with id ${req.params.id}`});
    },

    /*
    @desc:    Deletes a specified company document from the database
    @params:  {
        id: Company id,
    }
    @route:   DELETE /api/company/:id
    @access:  Private
    */
    delete_company_handler: (req, res, next) => {
        res.status(200).json({"message":`Delete company with id ${req.params.id}`});
    },

    get_company_from_request: (requestBody, user) => {

    },

    validate_company: (company) => {

    },

};

module.exports = CompanyController;