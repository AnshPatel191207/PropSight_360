const aqiService = require('../services/aqiService');

/**
 * @desc    Get AQI data for a city or current location
 * @route   GET /api/aqi
 * @access  Public
 */
const getAQI = async (req, res) => {
  try {
    const { city, lat, lng } = req.query;
    let data;

    if (lat && lng) {
      data = await aqiService.getAQIByCoords(lat, lng);
    } else {
      data = await aqiService.getAQIData(city || 'here');
    }

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAQI
};
