const Position = require("../models/Position");

const PositionController = {

    /*
    @desc:   
    @route:  
    @access: 
    */
    create_position_handler: async (req, res, next) => {
        try {
            const position = PositionController.get_position_from_request(req.body);
            const errors = PositionController.validate_position(position);

            if(errors.length) {
                return res.status(400).json({errors: errors});
            }

            const newPosition = await PositionController.create_position(position);
            res.status(200).json({position: newPosition});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:   
    @route:  
    @access: 
    */
    get_position_handler: async (req, res, next) => {
        try {
            const positions = await Position.find();
            res.status(200).json({positions: positions});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:   
    @route:  
    @access: 
    */
    update_position_handler: async (req, res, next) => {
        try {
            const updatedPosition = PositionController.get_position_from_request(req.body);
            const errors = PositionController.validate_position(updatedPosition);

            if(errors.length) {
                return res.status(400).json({errors: errors});
            }

            const newPosition = await PositionController.update_position(updatedPosition, req.params.id);
            res.status(200).json({position: newPosition});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:   
    @route:  
    @access: 
    */
    delete_position_handler: async (req, res, next) => {
        try {
            const deletedID = await PositionController.delete_position(req.params.id);
            res.status(200).json({id:deletedID});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    create_position: async (position) => {
        const newPosition = await Position.create(position);
        return newPosition;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    update_position: async (updatedPosition, id) => {
        const newPosition = await Position.findByIdAndUpdate(updatedPosition, id);
        return newPosition;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    delete_position: async (id) => {
        const oldPosition = await Position.findByIdAndDelete(id);
        return oldPosition._id;
    },

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