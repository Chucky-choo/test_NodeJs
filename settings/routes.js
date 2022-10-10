'use strict';

module.exports = (app) => {
    const indexController = require('./../Controller/indexController');
    const userController = require('./../Controller/userController');

    app.route('/').get(indexController.index)
    app.route('/users').get(userController.users)
}