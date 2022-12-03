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
    @desc:    
    @params:  
    @returns:  
    */
    get_position_from_request: (requestBody, user) => {
        const position = {
            name: requestBody.name,
            description: (requestBody.description?.length > 0) ? requestBody.description : null,
            source: requestBody.source,
            url: (requestBody.url?.length > 0) ? requestBody.url : null,
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