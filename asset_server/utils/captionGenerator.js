const axios = require('axios');

// Utility function to generate image caption from an image URL
async function generateImageCaption(imageUrl) {
  try {
    // Step 1: Download the image from the URL
    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer', // Get the binary data of the image
    });
    const imageData = imageResponse.data;

    // Step 2: Send the image to Hugging Face API for captioning
    const apiResponse = await axios.post(
      'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
      imageData, // Pass the binary image data
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN }`, // Replace with your Hugging Face API key
          'Content-Type': 'application/octet-stream', // Send the data as binary
        },
      }
    );

    // Step 3: Extract and return the caption from the response
    const result = apiResponse.data;
    if (result && result.length > 0) {
      return result[0].generated_text; // The caption should be in 'generated_text' field
    } else {
      throw new Error('No caption generated');
    }
  } catch (error) {
    console.error('Error generating image caption:', error);
    return null;
  }
}

module.exports = generateImageCaption;