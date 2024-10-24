const Image = require('../models/Image');
const textualSearch = require('../utils/textualSearch');

// Search images by title
exports.searchImage = async (req, res) => {
    const { title, tripID, userID } = req.body; // Extract title, tripID, and userID from the request body
    if (!title) {
        return res.status(400).json({ message: 'Title is required for searching images.' });
    }

    try {
        // Find images based on tripID or userID
        let images = [];
        if (tripID) {
            images = await Image.find({ tripID }, '_id caption url'); // Select only _id, caption, and url
        } else if (userID) {
            images = await Image.find({ userID }, '_id caption url');
        } else {
            return res.status(400).json({ message: 'Either tripID or userID is required.' });
        }

        // If no images found
        if (!images.length) {
            return res.status(404).json({ message: 'No images found for the given criteria.' });
        }

        // Prepare a list of image IDs and captions to pass to textualSearch
        const imageData = images.map(image => ({
            id: image._id,
            caption: image.caption,
        }));

        // Call the textualSearch function and get the result (returns an array of matching image IDs and a message)
        const { matchedImageIds, message } = await textualSearch(imageData,title);

        // Filter images that match any of the IDs returned by textualSearch
        const filteredImages = images.filter(image => matchedImageIds.includes(image._id.toString()));

        // Prepare the response with image id, url, and caption for matched images
        const responseImages = filteredImages.map(image => ({
            id: image._id,
            url: image.url,
            caption: image.caption,
        }));

        // Send the filtered images and the message from textualSearch
        res.status(200).json({ images: responseImages, message });
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'An error occurred while processing the request.', error: error.message });
    }
};
