
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/authRoute');
// const hotelRouter = require('./routes/hotelRoute'); 
const app = express();
const DBURL = process.env.DBURL;



app.use(cors());
app.use(express.json());

app.use('/api/auth', router);
// app.use('/api', hotelRouter);  // Use hotel route

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DBURL)
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });