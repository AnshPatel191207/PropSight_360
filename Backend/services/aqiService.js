const axios = require('axios');

/**
 * Fetch AQI data from OpenWeather
 * @param {string} city - City name
 * @returns {Promise<Object>} AQI data
 */
const getAQIData = async (city = 'Ahmedabad') => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    
    // Step 1: Geocode city name to get coordinates
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
    const geoResponse = await axios.get(geoUrl);
    
    if (!geoResponse.data || geoResponse.data.length === 0) {
      throw new Error('City not found');
    }
    
    const { lat, lon, name, state, country } = geoResponse.data[0];
    
    // Step 2: Get Air Pollution data
    const pollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const pollutionResponse = await axios.get(pollutionUrl);
    
    if (pollutionResponse.data && pollutionResponse.data.list) {
      const data = pollutionResponse.data.list[0];
      // Map OpenWeather AQI (1-5) to a more standard scale or keep it and map in UI
      // OW AQI: 1=Good, 2=Fair, 3=Moderate, 4=Poor, 5=Very Poor
      return {
        aqi: data.main.aqi, // 1-5
        components: data.components,
        city: {
          name: `${name}${state ? ', ' + state : ''}${country ? ', ' + country : ''}`,
          geo: [lat, lon]
        },
        source: 'OpenWeather'
      };
    } else {
      throw new Error('Failed to fetch pollution data');
    }
  } catch (error) {
    console.error('OpenWeather AQI Service Error:', error.message);
    throw error;
  }
};

/**
 * Fetch AQI data by coordinates
 */
const getAQIByCoords = async (lat, lng) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const pollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    const response = await axios.get(pollutionUrl);
    
    if (response.data && response.data.list) {
      const data = response.data.list[0];
      return {
        aqi: data.main.aqi,
        components: data.components,
        source: 'OpenWeather'
      };
    } else {
      throw new Error('Failed to fetch pollution data by coordinates');
    }
  } catch (error) {
    console.error('OpenWeather AQI Service (Coords) Error:', error.message);
    throw error;
  }
};

module.exports = {
  getAQIData,
  getAQIByCoords
};
