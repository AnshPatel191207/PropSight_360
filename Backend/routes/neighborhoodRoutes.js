const express = require('express');
const router = express.Router();
const neighborhoodController = require('../controllers/neighborhoodController');
const { protect } = require('../middleware/authMiddleware');

router.get('/intelligence', protect, neighborhoodController.getIntelligence);

module.exports = router;
