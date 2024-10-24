const Image = require('../models/Image');

// Get all images for a user
exports.getImagesByUser = async (req, res) => {
    const { userID } = req.params;

    try {
        const images = await Image.find({ userID });
        if (!images.length) {
            return res.status(404).json({ message: 'No images found for this user' });
        }
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
