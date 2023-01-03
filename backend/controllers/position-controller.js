const AsyncHandler = require("express-async-handler");

const Position = require("../models/Position");

const PositionController = {

    /*
    @desc:   
    @route:  
    @access: 
    */
    create_position_handler: AsyncHandler( async (req, res) => {
        // Get position from request body
        const position = PositionController.get_position_from_request(req.body, req.user);

        // Validate position object
        const errors = PositionController.validate_position(position);

        // If there are errors, respond
        if(errors.length) return res.status(400).json({errors: errors});

        // Create position in database
        const newPosition = await PositionController.create_position(position);

        // Respond with position
        res.status(200).json({position: newPosition});
    }),

    /*
    @desc:   
    @route:  
    @access: 
    */
    get_position_handler: AsyncHandler( async (req, res) => {
        const positions = await Position.find({user: req.user._id});
        res.status(200).json({positions: positions});
    }),

    /*
    @desc:   
    @route:  
    @access: 
    */
    update_position_handler: AsyncHandler( async (req, res) => {
        // Get position from db for verification
        const position = await Position.findById(req.user._id);

        if(!position) return res.status(400).json([{msg: "Position not found"}]);
        if(position.user != req.user._id) return res.status(401).json([{msg: "Not authorized to access this resource"}]);

        // Get position from request body
        const updatedPosition = PositionController.get_position_from_request(req.body);

        // Validate position
        const errors = PositionController.validate_position(updatedPosition);

        // If there are errors, respond
        if(errors.length) return res.status(400).json({errors: errors});
        
        // Update position in db
        const newPosition = await PositionController.update_position(updatedPosition, req.params.id, {new: true});

        // Respond
        res.status(200).json({position: newPosition});
    }),

    /*
    @desc:   
    @route:  
    @access: 
    */
    delete_position_handler: AsyncHandler( async (req, res) => {
        // Get position from db for verification
        const position = await Position.findById(req.user._id);

        if(!position) return res.status(400).json([{msg: "Position not found"}]);
        if(position.user != req.user._id) return res.status(401).json([{msg: "Not authorized to access this resource"}]);
        
        const deletedID = await PositionController.delete_position(req.params.id);
        res.status(200).json({id:deletedID});
    }),

    /*
    @desc:    Checks an incoming position request to ensure that all required fields are present and all resources exist
    @params:  requestBody: The body of the incoming request
    @returns: An array containing any errors found during validation
    */
    validate_position_request: async (requestBody="", resourceID = "", user) => {
        // Error object for tracking type of HTTP error and error messages
        const errorObj = {
            statusCode: "",
            errors: []
        };

        // Since this function can be used by the delete request to check existance and ownership of a position, we don't always need to check a request body.
        if(requestBody !== "") {
            // Get required fields from request body
            const { name, source } = requestBody;

            // If the required fields are not present, add an error message and set the status
            if(!name || !name.length) errorObj.errors.push({message: "Name field is required"});
            if(!source || !source.length) errorObj.errors.push({message: "Source field is required"});
            if(errorObj.errors.length) {
                errorObj.statusCode = 400;
                // Since we set a status code, we can exit and send a response from the controller
                return errorObj;
            }
        }

        if(resourceID !== "") {
            // Get position from db
            const position = await Position.findById(resourceID);

            // If the position was not found, add a message, set the status code, and return
            if(!position) {
                errorObj.errors.push({message: "Position with that ID was not found"});
                errorObj.statusCode = 404;
                return errorObj;
            }

            // If there is no user logged in, or the user does not match the owner of the position, add a message and set the status code. The return comes next.
            if(!user || user.id !== position.user) {
                errorObj.errors.push({message: "Not authorized to access that resource"});
                errorObj.statusCode = 401;
            }
        }

        return errorObj;
    },

    /*
    @desc:    Constructs a position object from an incoming request body and user data
    @params:  requestBody: Incoming request body
                     user: Requesting user data
    @returns: The constructed position object
    */
    get_position_from_request: (requestBody, user) => {
        const position = {
            name: requestBody.name,
            description: (requestBody.description?.length > 0) ? requestBody.description : null,
            source: requestBody.source,
            url: (requestBody.url?.length > 0) ? requestBody.url : null,
            user: user.id,
        };

        return position;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    validate_position: (position) => {
        const SHORT_TEXT_LENGTH = 50;
        const LONG_TEXT_LENGTH = 250;

        const errors = [];

        if(!position.name || position.name.length < 1) errors.push({"msg": "Name field required"});
        else if(position.name.length > SHORT_TEXT_LENGTH) errors.push({"msg": `Name can not exceed ${SHORT_TEXT_LENGTH} characters`});

        if(position.description?.length > LONG_TEXT_LENGTH) errors.push({"msg": `Description can not exceed ${LONG_TEXT_LENGTH} characters`});

        if(!position.source || position.source.length < 1) errors.push({"msg": "Position source required"});
        else if(position.source.length > SHORT_TEXT_LENGTH) errors.push({"msg": `Position source can not exceed ${SHORT_TEXT_LENGTH} characters`});

        if(position.url?.length > 1000) errors.push({"msg": `URL can not exceed ${1000} characters`});

        return errors;
    }

};

module.exports = PositionController;