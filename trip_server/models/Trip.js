const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  time: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  estimatedCost: {
    type: Number,
  },
  duration: {
    type: String,
  },
  transportation: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  isVisited: {
    type: Boolean,
    default: false,
  },
});

const daySchema = new Schema({
  day: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  weatherCondition: {
    type: String,
  },
  activities: [activitySchema],
});

const tripSchema = new Schema(
  {
    tripTitle: {
      type: String,
      required: true,
    },
    tripID: {
      type: String,
      required: true,
    },
    tripFrom: {
      type: String,
      required: true,
    },
    tripTo: {
      type: String,
      required: true,
    },
    tripVehicle: {
      type: String,
      required: true,
    },
    tripProgress: {
      type: Number,
      default: 0,
    },
    tripBlogID: {
      type: String,
      default: null,
    },
    tripVlogUrl: {
      type: String,
      default: null,
    },
    days: [daySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
