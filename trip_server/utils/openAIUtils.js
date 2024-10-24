const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAPI_KEY });

const model = "gpt-3.5-turbo-0125";

// Function to generate skeleton itinerary using GPT
const generateSkeletonItinerary = async (places, duration, startDate) => {
  let messages = [
    {
      role: "system",
      content: `You are a travel assistant. Generate a basic travel itinerary from ${ startDate } for full ${duration} days using the given list of places. Each day should have activities based on the locations provided. Return the result in strict JSON format with the structure:

      [{
          "day": 1,
          "date": "2021-06-01T00:00:00.000Z",
          "activities": [
              {
                  "time": "8:00AM",
                  "title": "Visit [place-name]",
                  "description": "Enjoy your time at [place-name], known for its [key-features].",
                  "location": "[place-location]",
                  "lat": [place-latitude],
                  "long": [place-longitude],
                  "estimatedCost": [estimated-cost],
                  "duration": "2 hours",
                  "transportation": "[transportation-mode]",
                  "name": "[place-name]",
                  "isVisited": false
              },...
          ]
      },...]`,
    },
    {
      role: "user",
      content: JSON.stringify(places), // Pass the entire places list here
    },
  ];

  const completion = await openai.chat.completions.create({
    model,
    messages,
  });

  return completion.choices[0].message.content;
};

module.exports = {
  generateSkeletonItinerary,
};
