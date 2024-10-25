const express = require('express');
const getHotelInfo = require('../controllers/getHotelInfo')

  // Import the controller function

  const router = express.Router();

  router.get('/hotel-info', getHotelInfo);
  
  module.exports = router;  // Define the route and link to the controller


