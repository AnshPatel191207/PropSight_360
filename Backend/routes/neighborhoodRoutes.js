const express = require('express');
const router = express.Router();
const neighborhoodController = require('../controllers/neighborhoodController');

router.get('/intelligence', neighborhoodController.getIntelligence);

module.exports = router;
