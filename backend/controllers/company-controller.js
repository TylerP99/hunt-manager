const AsyncHandler = require("express-async-handler");

const Company = require("../models/Company");

const CompanyController = {

    /*
    @desc:    Creates a new company entry in the db
    @route:   POST /api/company
    @access:  Private (Users with authentication)
    */
    create_company_handler: AsyncHandler( async (req, res) => {
        const company = CompanyController.get_company_from_request(req.body);

        const errors = CompanyController.validate_company(company);

        if(errors.length) {
            return res.status(400).json({errors});
        }

        await CompanyController.create_company(company);

        res.status(200).json(company);
    }),

    /*
    @desc:    Gets all user's company entries
    @route:   GET /api/company
    @access:  Private
    */
    get_companies_handler: AsyncHandler( async (req, res) => {
        const companies = await Company.find({user: req.user._id});

        res.status(200).json({companies: companies});
    }),

    /*
    @desc:    Updates a specifies company's information within the database
    @params: {
        id: company id
    }
    @route:   PUT /api/company/:id
    @access:  Private
    */
    update_company_handler: AsyncHandler( async (req, res) => {
        const updatedCompany = CompanyController.get_company_from_request(req.body);

        const errors = CompanyController.validate_company(updatedCompany);

        if(errors.length) {
            return res.status(400).json({errors});
        }

        await CompanyController.update_company(updatedCompany, req.params.id);

        res.status(200).json(updatedCompany);
    }),

    /*
    @desc:    Creates a new connection and adds it to the company position array
    @route:   PUT /api/company/addConnection/:id
    @access:  Private
    */
    add_connection_handler: AsyncHandler( async (req, res) => {
        // Get connection from request

        // Validate connection

        // Return if errors

        // Create connection in db

        // Link connection to company

        // Respond with connection object
    }),

    /*
    @desc:    Creates a new position and adds it to the company position array
    @route:   PUT /api/company/addPosition/:id
    @access:  Private
    */
    add_position_handler: AsyncHandler( async (req, res) => {
        // Get position from request

        // Validate position

        // Return if errors

        // Create position in db

        // Link position to company

        // Respond with position object
    }),

    /*
    @desc:    Deletes a specified company document from the database
    @route:   DELETE /api/company/:id
    @access:  Private
    */
    delete_company_handler: AsyncHandler( async (req, res) => {
        const id = await CompanyController.delete_company(req.params.id);

        res.status(200).json({id:id});
    }),

    /*
    @desc: Takes in a validated company object and creates a document in the company collection

    @params: company: A validated company object

    @returns: Id of created company, or will throw an error
    */
    create_company: async (company) => {
        company = await Company.create(company);
        return company._id;
    },

    /*
    @desc: Takes in a validated company object and updates a specified document in the company collection

    @params: updatedCompany: A validated company object
             id: MongodDB id of company to update

    @returns: Id of created company, or null if company not found
    */
    update_company: async (updatedCompany, id) => {
        const updatedCompany = await Company.findByIdAndUpdate(id, updatedCompany);

        if(!updatedCompany) {
            return null;
        }

        return updatedCompany._id;
    },

    /*
    @desc: Takes in an id of a document to delete, deletes it, and returns its id if the operation is successful

    @params: id: MongoDB id of company document to delete

    @returns: Id of deleted company, or null is company is not found
    */
    delete_company: async (id) => {
        const deletedCompany = await Company.findByIdAndDelete(id);

        if(!deletedCompany) {
            return null;
        }

        return deletedCompany._id;
    },

    /*
    @desc:   Takes in a request body object and a user object, adds the request body fields to an object, and returns the object. Takes into account that optional fields may not be present

    @params: requestBody: request.body from express route function
             user: Object representing current user
    
    @returns: An object representing a company
    */
    get_company_from_request: (requestBody, user) => {
        const company = {
            name: requestBody.name,

            description: (requestBody.description?.length > 0) ? requestBody.description : null,

            websiteURL: (requestBody.websiteURL?.length > 0) ? requestBody.websiteURL : null,

            user: req.user._id,
        };

        return company;
    },

    /*
    @desc:  Takes in a company object and ensures it meets specifies requirements. If requirements are unmet, they are added to an error array, which is returned.

    @params: company: Object representing a company

    @returns: An error array. If empty, object passed all checks
    */
    validate_company: (company) => {
        const SHORT_TEXT_LENGTH = 50; // Length of characters for short text fields
        const LONG_TEXT_LENGTH = 250; // Length of characters for long text fields

        const errors = [];

        if(!company.name || company.name.length < 1) {
            errors.push({msg: "Name field required"});
        }
        else if (company.name.length > SHORT_TEXT_LENGTH) {
            errors.push({msg: `Name field cannot exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        if(company.description?.length > LONG_TEXT_LENGTH) errors.push({msg: `Description can not exceed ${LONG_TEXT_LENGTH} characters`});
        
        return errors;
    },

};

module.exports = CompanyController;