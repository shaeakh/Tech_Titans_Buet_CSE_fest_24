const axios = require("axios");

const geoCoding = async (address) => {
    const geoResponse = await axios.get(`https://geocode.maps.co/search?q=${address}&api_key=${process.env.GEOCODE_API_KEY}`);
    if (!geoResponse.data || geoResponse.data.length === 0) {
        return null;
    }
    else {
        return {
            lat : geoResponse.data[0].lat,
            lon : geoResponse.data[0].lon
        };
    }
};

module.exports = geoCoding;