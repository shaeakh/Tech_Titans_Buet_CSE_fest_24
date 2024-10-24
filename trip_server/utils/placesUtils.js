const axios = require("axios");

const fetchNearbyPlaces = async (lat, lon) => {
  const placesOptions = {
    method: "GET",
    url: "https://google-map-places.p.rapidapi.com/maps/api/place/nearbysearch/json",
    params: {
      location: `${lat},${lon}`,
      radius: "1000000",
      type: "tourist_attraction",
      language: "en",
      rankby: "prominence",
      keyword: "tourist place",
    },
    headers: {
      "x-rapidapi-key": process.env.GOOGLE_MAP_PLACE_KEY,
      "x-rapidapi-host": "google-map-places.p.rapidapi.com",
    },
  };

  const placesResponse = await axios.request(placesOptions);
  const places = placesResponse.data.results.map((place) => ({
    name: place.name,
    latitude: place.geometry.location.lat,
    longitude: place.geometry.location.lng,
    vicinity: place.vicinity,
    rating: place.rating,
    user_ratings_total: place.user_ratings_total,
  }));

  return places;
};

module.exports = {
  fetchNearbyPlaces,
};
