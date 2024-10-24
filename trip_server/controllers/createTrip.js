const Trip = require("../models/Trip");
const mongoose = require("mongoose");

exports.createTrip = async (req, res) => {
  const { source, destination, vehicle, date, budgetType, person } = req.body;

  // Body validation
  if (!source || !destination || !vehicle || !date || !budgetType || !person) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Calculate duration in days
    const startDate = new Date(date.from);
    const endDate = new Date(date.to);
    const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    const trip = new Trip({
      tripTitle: `${duration} day Trip from ${source} to ${destination}`,
      tripID: new mongoose.Types.ObjectId(),
      tripVehicle: vehicle,
      tripFrom: source,
      tripTo: destination,
      tripProgress: 0,
      itineraries: [],
    });
    await trip.save();
    res.json({ tripID: trip.tripID });
  } catch (error) {
    res.status(500).json({ message: "Error creating trip", error });
  }
};
