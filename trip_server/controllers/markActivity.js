const Trip = require('../models/Trip');

exports.toggleActivityVisited = async (req, res) => {
    try {
        const { activityID } = req.params; // Get activityID from the URL parameters
        
        // Find the trip containing the activity
        const trip = await Trip.findOne({ "days.activities._id": activityID });

        if (!trip) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        // Locate the specific activity within the trip
        const activity = trip.days.flatMap(day => day.activities).find(act => act._id.toString() === activityID);

        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        // Toggle the isVisited status
        activity.isVisited = !activity.isVisited;

        // Save the updated trip
        await trip.save();

        return res.status(200).json({ message: 'Activity visited status toggled successfully', trip });
    } catch (error) {
        console.error("Error toggling activity visited status:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
