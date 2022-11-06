const Company = require("../models/Company");

const CompanyController = {

    /*
    @desc:    Creates a new company entry in the db
    @route:   POST /api/company
    @access:  Private (Users with authentication)
    */
    create_company_handler: async (req, res, next) => {
        try{
            const company = CompanyController.get_company_from_request(req.body);

            const errors = CompanyController.validate_company(company);

            await CompanyController.create_company(company);

            if(errors.length) {
                return res.status(400).json({errors});
            }

            res.status(200).json(company);
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:    Gets all user's company entries
    @route:   GET /api/company
    @access:  Private
    */
    get_companies_handler: async (req, res, next) => {
        try {
            const companies = await Company.find();

            res.status(200).json({companies: companies});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:    Updates a specifies company's information within the database
    @params: {
        id: company id
    }
    @route:   PUT /api/company/:id
    @access:  Private
    */
    update_company_handler: async (req, res, next) => {
        try {
            const updatedCompany = CompanyController.get_company_from_request(req.body);

            const errors = CompanyController.validate_company(updatedCompany);

            await CompanyController.update_company(updatedCompany, req.params.id);

            if(errors.length) {
                return res.status(400).json({errors});
            }

            res.status(200).json(updatedCompany);
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:    Deletes a specified company document from the database
    @params:  {
        id: Company id,
    }
    @route:   DELETE /api/company/:id
    @access:  Private
    */
    delete_company_handler: async (req, res, next) => {
        try {
            const id = await CompanyController.delete_company(req.params.id);

            res.status(200).json({id:id});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

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

    @returns: Id of created company, or will throw an error
    */
    update_company: async (updatedCompany, id) => {
        updatedCompany = await Company.findByIdAndUpdate(id, updatedCompany);

        if(!updatedCompany) {
            throw new Error("Company not found");
        }

        return updatedCompany._id;
    },

    /*
    @desc: Takes in an id of a document to delete, deletes it, and returns its id if the operation is successful

    @params: id: MongoDB id of company document to delete

    @returns: Id of deleted company, or will throw an error
    */
    delete_company: async (id) => {
        deletedCompany = await Company.findByIdAndDelete(id);

        if(!deletedCompany) {
            throw new Error("Company not found");
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