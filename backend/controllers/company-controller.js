const AsyncHandler = require("express-async-handler");

const Company = require("../models/Company");
const Position = require("../models/Position");
const Connection = require("../models/Connection");
const PositionController = require("./position-controller");
const ConnectionController = require("./connection-controller");

const CompanyController = {

    /*
    @desc:    Creates a new company entry in the db
    @route:   POST /api/company
    @access:  Private (Users with authentication)
    */
    create_company_handler: AsyncHandler( async (req, res) => {
        // Get company from request body
        let company = CompanyController.get_company_from_request(req.body);

        // Validate company object
        const errors = CompanyController.validate_company(company);

        // If there are errors, respond
        if(errors.length) return res.status(400).json(errors);

        // Create company in db
        company = await Company.create(company);

        // Respond with company
        res.status(200).json(company);
    }),

    /*
    @desc:    Gets all user's company entries
    @route:   GET /api/company
    @access:  Private
    */
    get_companies_handler: AsyncHandler( async (req, res) => {
        // Get all companies owner by user from db
        const companies = await Company.find({user: req.user._id});

        // Respond with companies
        res.status(200).json({companies: companies});
    }),

    /*
    @desc:    Updates a specifies company's information within the database
    @route:   PUT /api/company/:id
    @access:  Private
    */
    update_company_handler: AsyncHandler( async (req, res) => {
        // Get company from db to verify ownership
        const company = await Company.findById(req.params.id);

        if(!company) return res.status(400).json([{msg: "Company not found"}]);
        if(company.user != req.user._id) return res.status(401).json([{msg: "Not authorized to access this resource"}]);

        // Get company object from request body
        let updatedCompany = CompanyController.get_company_from_request(req.body, req.user);

        // Validate information
        const errors = CompanyController.validate_company(updatedCompany);

        // If there are errors, send res with errors
        if(errors.length) {
            return res.status(400).json(errors);
        }

        // Update company
        updatedCompany = await CompanyController.update_company(updatedCompany, req.params.id, {new: true});

        // Send response with updated company info
        res.status(200).json(updatedCompany);
    }),

    /*
    @desc:    Creates a new connection and adds it to the company position array
    @route:   PUT /api/company/addConnection/:id
    @access:  Private
    */
    add_connection_handler: AsyncHandler( async (req, res) => {
        // Get company from db to verify ownership
        const company = await Company.findById(req.params.id);

        if(!company) return res.status(400).json([{msg: "Company not found"}]);
        if(company.user != req.user._id) return res.status(401).json([{msg: "Not authorized to access this resource"}]);

        // Get connection from request
        const connection = ConnectionController.get_connection_from_request(req.body, req.user);

        // Validate connection
        const errors = ConnectionController.validate_connection(connection);

        // Return if errors
        if(errors.length) return res.status(400).json(errors);

        // Create connection in db
        const newConnection = await Connection.create(connection);

        // Link connection to company
        await Company.findByIdAndUpdate(req.params.id, { $push: { connections: newConnection._id } });

        // Respond with connection object
        res.status(200).json(newConnection);
    }),

    /*
    @desc:    Creates a new position and adds it to the company position array
    @route:   PUT /api/company/addPosition/:id
    @access:  Private
    */
    add_position_handler: AsyncHandler( async (req, res) => {
        // Get company from db to verify ownership
        const company = await Company.findById(req.params.id);

        if(!company) return res.status(400).json([{msg: "Company not found"}]);
        if(company.user != req.user._id) return res.status(401).json([{msg: "Not authorized to access this resource"}]);

        // Get position from request
        const position = PositionController.get_position_from_request(req.body, req.user);

        // Validate position
        const errors = PositionController.validate_position(position);

        // Return if errors
        if(errors.length) return res.status(400).json(errors);

        // Create position in db
        const newPosition = await Position.create(position);

        // Link position to company
        await Company.findByIdAndUpdate(req.params.id, { $push: { positions: newPosition._id } });

        // Respond with position object
        res.status(200).json(newPosition);
    }),

    /*
    @desc:    Deletes a specified company document from the database
    @route:   DELETE /api/company/:id
    @access:  Private
    */
    delete_company_handler: AsyncHandler( async (req, res) => {
        // Get company from database, need to delete all related info
        const company = await Company.findById(req.params.id);

        // If company is not found in database, return user error
        if(!company) res.status(400).json([{msg: "Company not found"}]);
        // If owner of company resource is different from the requesting user, tell them they cant lol
        if(company.user != req.user._id) res.status(401).json([{msg: "Not authorized to edit this resource"}]);

        // Delete all associated positions and connections
        await Position.deleteMany({_id: {$in: company.positions}});
        await Connection.deleteMany({_id: {$in: company.connections}});

        // Delete company, get id back to send to client
        const id = await Company.findByIdAndDelete(req.params.id);

        // Send back all good
        res.status(200).json({id:id});
    }),

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