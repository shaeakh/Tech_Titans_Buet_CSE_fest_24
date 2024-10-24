const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAPI_KEY });

const model = "gpt-3.5-turbo"; // Ensure you're using a valid model

// Function to compare image captions using GPT
async function textualSearch(imageData, title) {
    // Construct the prompt to send to GPT
    const messages = [
        {
            role: "system",
            content: `You are an image selector assistant. Based on the given title, select the most relevant images by comparing the image captions provided. Make sure the image IDs are returned as strings. Only provide the array of the selected image IDs in the following JSON format:
            {
                "matchedImageIds": ["1", "2", "3"],
                "message": "Optional message or feedback for the user."
            }`,
        },
        {
            role: "user",
            content: `Title: ${title}\nImages: ${JSON.stringify(imageData)}`,
        },
    ];

    try {
        // Send the prompt to GPT and get the completion
        const completion = await openai.chat.completions.create({
            model,
            messages,
        });

        // Extract the response from GPT
        const response = completion.choices[0].message.content;

        // Parse the JSON response
        const { matchedImageIds, message } = JSON.parse(response);

        return { matchedImageIds, message };
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        throw new Error("Failed to generate GPT response.");
    }
}

module.exports = textualSearch;
