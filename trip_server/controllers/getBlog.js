// controllers/blogController.js
const Blog = require('../models/Blog'); // Adjust the path as necessary

const getBlogByTripID = async (req, res) => {
    const { tripID } = req.params;

    try {
        // Find the blog by tripID and select only the content field
        const blog = await Blog.findOne({ tripID }, 'content'); // Only retrieve the content

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Return the content of the blog
        return res.status(200).json({ content: blog.content });
    } catch (error) {
        console.error("Error fetching blog content:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getBlogByTripID,
};
