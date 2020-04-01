module.exports = {
    sendSuccess: function(message, result = true){
        let successResponse = {
            statusCode: 200,
            body: JSON.stringify({
                result,
                message
            }),
        }
        return sendSuccess
    },

    sendError: function(message, result = false){
        let successResponse = {
            statusCode: 400,
            body: JSON.stringify({
                result,
                message
            }),
        }
        return sendSuccess
    }


}