const express = require('express');
const router = express.Router();
const { getCommuteAudit } = require('../controllers/commuteController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/commute/audit - Generate a commute audit report
router.post('/audit', protect, getCommuteAudit);

module.exports = router;
