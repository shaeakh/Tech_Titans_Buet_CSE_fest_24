const axios = require("axios");

const getHotelInfo = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/detail",
    params: {
      id: "eyJlbnRpdHlJZCI6IjI3NTM3NTQyIiwiaWQiOiI0Njk0NDY1MyJ9",
      currency: "USD"
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "sky-scanner3.p.rapidapi.com"
    },
  };

  try {
    const hotelResponse = await axios.request(options);
    costPerNight.log(options)
    const hotelData = hotelResponse.data.data;
    console.log(hotelData);

    // Extract relevant information
    // const hotelInfo = {
    //   name: hotelData.name,
    //   costPerNight: "Unavailable", // This field can be dynamically updated with actual logic when provided
    //   stayDuration: "2024-10-25 to 2024-10-31", // Static value for now
    //   imageUrl: hotelData.image || hotelResponse.data.gallery.images[0].dynamic, // Use outlook image or fallback
    //   bookingLink: "https://www.booking.com/hotel/in/novotel-mumbai-juhu-beach.html", // Example booking link
    //   address: hotelResponse.data.location.shortAddress,
    //   description: hotelData.description.content || "No description available",
    // };

    // // Send the hotel information as a JSON response
    // res.json(hotelInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch hotel data" });
  }
};

module.exports = getHotelInfo;
