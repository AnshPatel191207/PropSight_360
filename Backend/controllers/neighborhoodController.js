const neighborhoodService = require('../services/neighborhoodService');

const getIntelligence = async (req, res) => {
  try {
    const { area } = req.query;
    if (!area) {
      return res.status(400).json({ success: false, message: 'Area is required' });
    }

    const data = await neighborhoodService.getNeighborhoodIntelligence(area);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getIntelligence
};
