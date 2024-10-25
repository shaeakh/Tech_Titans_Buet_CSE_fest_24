const Trip = require('../models/Trip');
const Blog = require('../models/Blog'); // Import the Blog model
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Store your OpenAI API key in .env file

exports.generateBlog = async (req, res) => {
    try {
        const { tripID } = req.params; // Get tripID from the URL parameters

        // Fetch the trip itinerary based on tripID
        const trip = await Trip.findOne({ tripID });

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        // Analyze the activities to prepare input for GPT
        const activities = trip.days.flatMap(day => day.activities);
        const activityDescriptions = activities.map(activity => {
            return `**Title:** ${activity.title}\n**Description:** ${activity.description}\n**Location:** ${activity.location}\n**Visited:** ${activity.isVisited ? 'Yes' : 'No'}`;
        }).join('\n\n');

        const prompt = `
        Based on the following activities, create a blog post in Markdown format with a suitable title:
        
        ${activityDescriptions}
        `;

        // Call the OpenAI API
        const gptResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 500,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const blogContent = gptResponse.data.choices[0].message.content;

        // Create a new blog entry
        const newBlog = await Blog.create({
            tripID: trip._id,
            content: blogContent,
        });

        // Update the trip with the blogID
        trip.tripBlogID = newBlog._id;
        await trip.save();

        return res.status(200).json({
            title: `Blog Post for Trip ${tripID}`,
            content: blogContent,
            blogID: newBlog._id,
        });
    } catch (error) {
        console.error("Error generating blog:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
