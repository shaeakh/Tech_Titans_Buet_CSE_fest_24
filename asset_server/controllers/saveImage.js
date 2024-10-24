const axios = require('axios');
const generateImageCaption = require('../utils/captionGenerator');
const Image = require('../models/Image');

exports.saveImage = async (req, res) => {
    const { url, userID, tripID, activityID } = req.body;
    if (!url || !userID || !tripID || !activityID) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const caption = await generateImageCaption(url);
        const newImage = new Image({
            url,
            caption,
            userID,
            tripID,
            activityID,
        });
        await newImage.save();
        res.status(201).json({ message: 'Image saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};