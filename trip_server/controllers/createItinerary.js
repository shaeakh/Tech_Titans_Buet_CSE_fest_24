const Trip = require("../models/Trip");
const mongoose = require("mongoose");
const geoCoding = require("../utils/geoCoding");
const { fetchNearbyPlaces } = require("../utils/placesUtils");
const { generateSkeletonItinerary } = require("../utils/openAIUtils");

exports.createItinerary = async (req, res) => {
    try {
        const { tripID } = req.query;

        // Fetch the trip based on tripID
        const trip = await Trip.findOne({ tripID });
        if (!trip) return res.status(404).json({ message: 'Trip not found' });

        // Geocode destination to get latitude and longitude
        const { lat, lon } = await geoCoding(trip.tripTo);

        // Fetch nearby places based on coordinates
        const places = await fetchNearbyPlaces(lat, lon);

        // Generate skeleton itinerary from OpenAI
        const itineraryResponse = await generateSkeletonItinerary(places, trip.tripduration, trip.tripStartDate);

        // Sanitize the response: remove backticks, extra whitespace, or any formatting issues
        const sanitizedResponse = itineraryResponse.replace(/```json|```/g, '').trim();

        // Parse the cleaned JSON string
        const itinerary = JSON.parse(sanitizedResponse);

        // Prepare the data to store in the Trip schema
        const itineraryDays = itinerary.map((dayObj) => ({
            day: dayObj.day,
            date: new Date(dayObj.date),
            weatherCondition: "sunny",  // Add weather API later
            activities: dayObj.activities.map(activity => ({
                time: activity.time,
                title: activity.title,
                description: activity.description,
                location: activity.location,
                lat: activity.lat,
                long: activity.long,
                estimatedCost: !isNaN(parseFloat(activity.estimatedCost)) ? parseFloat(activity.estimatedCost) : 0,  // Convert to number if cost is provided
                duration: activity.duration,
                transportation: activity.transportation,
                name: activity.name,
                isVisited: activity.isVisited || false,  // Default to false if not set
            }))
        }));

        // Update the Trip with the generated itinerary
        trip.days = itineraryDays;

        // Save the updated trip to the database
        await trip.save();

        // Respond with the saved itinerary
        res.json({ message: 'Itinerary generated and saved successfully', itinerary: trip.days });

    } catch (error) {
        console.error("Error generating itinerary:", error);
        res.status(500).json({ message: 'An error occurred while generating the itinerary' });
    }
};
