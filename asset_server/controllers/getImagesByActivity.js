const Image = require('../models/Image');

// Get images by activityID
exports.getImagesByActivity = async (req, res) => {
    const { activityID } = req.params;

    try {
        const images = await Image.find({ activityID });
        if (!images.length) {
            return res.status(404).json({ message: 'No images found for this activity' });
        }
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};