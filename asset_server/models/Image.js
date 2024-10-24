const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    tripID: {
        type: String,
        required: true,
    },
    activityID: {
        type: String,
        required: true,
    },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;