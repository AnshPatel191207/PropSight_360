const commuteService = require('../services/commuteService');

/**
 * @desc    Generate a forensic commute audit
 * @route   POST /api/commute/audit
 * @access  Private
 */
const getCommuteAudit = async (req, res) => {
  const { origin, destination, listedTime, timeContext, mode } = req.body;

  if (!origin || !destination || listedTime === undefined) {
    console.error('Missing parameters:', { origin, destination, listedTime });
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${!origin ? 'Origin ' : ''}${!destination ? 'Destination ' : ''}${listedTime === undefined ? 'ListedTime' : ''}`
    });
  }

  try {
    const auditReport = await commuteService.generateAudit(
      origin, 
      destination, 
      Number(listedTime),
      timeContext || 'MORNING',
      mode || 'DRIVE'
    );
    
    res.status(200).json({
      success: true,
      data: auditReport
    });
  } catch (error) {
    console.error('Audit Error:', error.message);
    // If TomTom returns a specific error, pass a helpful message
    const status = error.response?.status === 400 ? 400 : 500;
    res.status(status).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getCommuteAudit
};
