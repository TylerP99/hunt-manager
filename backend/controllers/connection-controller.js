const Connection = require("../models/Connection");

const ConnectionController = {

    /*
    @desc:   Handles the connection creation route. Creates a connection from body and validates it. If invalid, return errors,     otherwise create connection in db and return the connection.
    @route:  POST /api/connection
    @access: Private
    */
    create_connection_handler: async (req, res, next) => {
        try {
            const connection = ConnectionController.get_connection_from_request(req.body);

            const errors = ConnectionController.validate_connection(connection);

            if(errors.length) {
                return res.status(400).json({errors:errors});
            }

            const newConnection = await ConnectionController.create_connection(connection);

            res.status(200).json({connection: newConnection});
        }
        catch(e) {
            console.error(e);
            next(e);
        }
    },

    /*
    @desc:   Gets all connections from database
    @route:  GET /api/connection
    @access: Private
    */
    get_connections_handler: async (req, res, next) => {
        try {
            const connections = await Connection.find();

            res.status(200).json({connections:connections});
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
    update_connection_handler: async (req, res, next) => {
        try {
            let updatedConnection = ConnectionController.get_connection_from_request(req.body);
            const errors = ConnectionController.validate_connection(updatedConnection);

            if(errors.length) {
                return res.status(400).json({errors:errors});
            }

            const newConnection = await ConnectionController.update_connection(updatedConnection, req.params.id);
            
            res.status(200).json({connection: newConnection});
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
    delete_connection_handler: async (req, res, next) => {
        try {
            const id = await ConnectionController.delete_connection(req.params.id);
            res.status(200).json({id:id});
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
    create_connection: async (connection) => {
        const newConnection = await Connection.create(connection);
        return newConnection;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    update_connection: async (updatedConnection, id) => {
        const newConnection = await Connection.findByIdAndUpdate(id, updatedConnection);
        return newConnection;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    delete_connection: async (id) => {
        const oldConnection = await Connection.findByIdAndDelete(id);
        return oldConnection._id;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    get_connection_from_request: (requestBody, user) => {
        const connection = {
            name: requestBody.name,
            about: (requestBody.about?.length > 0) ? requestBody.about : null,
            role: (requestBody.role?.length > 0) ? requestBody.role : null,
            email: (requestBody.email?.length > 0) ? requestBody.email : null,
            twitter: (requestBody.twitter?.length > 0) ? requestBody.twitter : null,
            linkedin: (requestBody.linkedin?.length > 0) ? requestBody.linkedin : null,
        };

        return connection;
    },

    /*
    @desc:    
    @params:  
    @returns:  
    */
    validate_connection: (connection) => {
        const SHORT_TEXT_LENGTH = 50; // Length of characters for short text fields
        const LONG_TEXT_LENGTH = 250; // Length of characters for long text fields

        const errors = [];

        if(!connection.name || connection.name.length < 1) {
            errors.push({"msg": "Name field required"});
        }
        else if(connection.name.length > SHORT_TEXT_LENGTH) {
            errors.push({"msg": `Name can not exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        if(connection.about?.length > LONG_TEXT_LENGTH) {
            errors.push({"msg": `About can not exceed ${LONG_TEXT_LENGTH} characters`});
        }

        if(connection.role?.length > SHORT_TEXT_LENGTH) {
            errors.push({"msg": `Role can not exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        if(connection.email?.length > SHORT_TEXT_LENGTH) {
            errors.push({"msg": `Email can not exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        if(connection.twitter?.length > SHORT_TEXT_LENGTH) {
            errors.push({"msg": `Twitter link can not exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        if(connection.linkedin?.length > SHORT_TEXT_LENGTH) {
            errors.push({"msg": `Linkedin link can not exceed ${SHORT_TEXT_LENGTH} characters`});
        }

        return errors;
        
    },

};

module.exports = ConnectionController;