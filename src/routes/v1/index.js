const express = require('express');
const router = express.Router();
const TickerController = require('../../controllers/ticket-controller');

router.post('/tickets', TickerController.create);

module.exports = router;