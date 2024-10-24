const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { saveImage } = require('./controllers/saveImage');
const { getImagesByUser } = require('./controllers/getImagesByUser ');
const { getImagesByActivity } = require('./controllers/getImagesByActivity');
const { getImagesByTrip } = require('./controllers/getImagesByTrip');

const app = express();
const PORT = process.env.PORT || 5000;
const DBURL = process.env.DBURL;

app.use(cors());
app.use(express.json());

app.post('/api/save-img',saveImage);
app.get('/api/images/user/:userID',getImagesByUser);
app.get('/api/images/trip/:tripID' ,getImagesByTrip);
app.get('/api/images/activity/:activityID',getImagesByActivity);

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
