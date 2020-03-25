const express = require('express');

const SessionController = require('./controllers/SessionController');
const TableController = require('./controllers/TableController');
const RollController = require('./controllers/RollController');
const DeleteController = require('./controllers/DeleteController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/tables', TableController.store);
routes.post('/rolls', RollController.store);
routes.delete('/delete', DeleteController.delete);

module.exports = routes;