const express = require('express');
const router = express.Router();
const { getAQI } = require('../controllers/aqiController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAQI);

module.exports = router;
