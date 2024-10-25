const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    tripID: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;