const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { createTrip } = require('./controllers/createTrip');
const { createItinerary } = require('./controllers/createItinerary');
const { getItinerary } = require('./controllers/getItinerary');
const { getTripByUserID } = require('./controllers/getTripBbyUserID');

const app = express();
const PORT = process.env.PORT || 6001;
const DBURL = process.env.DB_URL;

app.use(cors());
app.use(express.json());

app.post('/api/create-trip',createTrip);
app.post('/api/create-itinerary',createItinerary);
app.get('/api/itinerary', getItinerary);
app.get('/api/trip-list',getTripByUserID);

mongoose.connect(DBURL)
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });