'use strict';

const response = require('./../response')
exports.users = (req, res) => {
    const user = [
        {
            id: 1,
            name: 'dfktynby'
        }
    ]
    response.status(user, res)
}
