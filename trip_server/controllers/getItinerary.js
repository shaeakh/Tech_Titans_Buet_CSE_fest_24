const Trip = require("../models/Trip");
const mongoose = require("mongoose");

exports.getItinerary = async (req, res) => {
    try {
        const { tripID } = req.query;
        const trip = await Trip.findOne({ tripID });
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.json(trip);
    }
    catch (error) {
        console.error("Error fetching itinerary:", error);
    }

};