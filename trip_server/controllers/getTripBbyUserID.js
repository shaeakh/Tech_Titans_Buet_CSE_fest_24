const Trip = require('../models/Trip');

exports.getTripByUserID = async (req, res) => {
    try {
        const { userID } = req.query;
        if (!userID) {
            return res.status(400).json({ message: 'userID is required for fetching trip.' });
        }
        const trips = await Trip.find({ userID }, '-_id tripTitle tripID tripProgress');
        const response = trips.reverse();
        
        // Send the response with the fetched trips
        return res.status(200).json({ trips: response });
    } catch (error) {
        console.error("Error fetching trip:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
