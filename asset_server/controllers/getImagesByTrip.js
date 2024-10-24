const Image = require('../models/Image');

// Get images by tripID
exports.getImagesByTrip = async (req, res) => {
    const { tripID } = req.params;

    try {
        const images = await Image.find({ tripID });
        if (!images.length) {
            return res.status(404).json({ message: 'No images found for this trip' });
        }
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
