# Travoger

**Travoger** is a travel management platform designed to help users plan and manage their trips efficiently. It provides a user-friendly interface for organizing trips, storing images, creating vlogs, and more. Travoger aims to simplify the travel planning process by offering robust features like trip categorization, activity management, and multimedia support.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [API Endpoints](#api-endpoints)
6. [Frontend Integration (Next.js)](#frontend-integration-nextjs)
7. [Database Schema](#database-schema)
8. [License](#license)

---

## Project Overview

Travoger helps users efficiently plan and manage their trips with various features, including image storage, trip categorization, and search functionality. Users can upload images, organize them based on activities and trips, and even search for images based on captions. Additionally, Travoger supports creating vlogs for trips, making it a comprehensive solution for travel planning and documentation.

---

## Tech Stack

**Frontend:** 
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI Library](https://ui.shadcn.com/)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- Mongoose (ORM)

**Other Tools:**
- Axios (for HTTP requests)
- [dotenv](https://www.npmjs.com/package/dotenv) (for managing environment variables)
- [Multer](https://www.npmjs.com/package/multer) (for file handling)

---

## Features

- **Trip Planning:** Create and manage trips with detailed planning for each activity.
- **Image Storage:** Upload, store, and retrieve images for specific trips, activities, and users.
- **Image Captioning:** Generate image captions automatically using AI-powered services.
- **Search Images:** Search images by captions, trips, or activities to quickly find relevant content.
- **Create Vlogs:** Automatically create vlogs from trips to document memories.
- **User-specific content:** Each user can manage their own trips, activities, and images.

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

1. Node.js (v14+)
2. MongoDB (Local or cloud instance like MongoDB Atlas)
3. Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shaeakh/Tech_Titans_Buet_CSE_fest_24.git
   cd travoger
   ```

2. **Backend Setup**

   1. start to the auth backend:
   
      ```bash
      cd auth
      npm install
      ```

   2. Install dependencies:

      ```bash
      npm install
      ```

   3. Create a `.env` file in the root of the backend directory with the following environment variables:

      ```
      PORT=8000
      DBURL=mongodb://localhost:27017/travoger
      ```

   4. Run the backend server:

      ```bash
      npm start
      ```

    5. Start other two server in similar way:  
    ```
    # environment variables of trip_server are
    AUTH_SERVER_PORT = 8000
    GOOGLE_MAP_PLACE_KEY = "YOUR_API"
    DB_URL = mongodb://localhost:27017/travoger
    GEOCODE_API_KEY = "YOUR_API"
    OPENAPI_KEY = "YOUR_API"

    ````

3. **Frontend Setup**

   1. Navigate to the frontend directory:
   
      ```bash
      cd ../frontend
      ```

   2. Install dependencies:

      ```bash
      npm install
      ```

   3. Create a `.env.local` file with necessary variables for the frontend (if applicable):

      ```
      NEXT_PUBLIC_API_URL=http://localhost:5000/api
      ```

   4. Run the frontend development server:

      ```bash
      npm run dev
      ```

4. **Access the Application**

   The frontend app should now be accessible at `http://localhost:3000` and the backend API at `http://localhost:5000`.

---

## API Endpoints

The following endpoints are available in the backend API:

### **Image Management**

1. **Save Image**
   - **Endpoint:** `/api/save-img`
   - **Method:** `POST`
   - **Body Parameters:** `url`, `userID`, `tripID`, `activityID`
   - **Description:** Saves an image with a caption generated from the image URL.

2. **Get Images by User**
   - **Endpoint:** `/api/images/user/:userID`
   - **Method:** `GET`
   - **Description:** Fetches all images uploaded by a specific user.

3. **Get Images by Trip**
   - **Endpoint:** `/api/images/trip/:tripID`
   - **Method:** `GET`
   - **Description:** Fetches all images associated with a specific trip.

4. **Get Images by Activity**
   - **Endpoint:** `/api/images/activity/:activityID`
   - **Method:** `GET`
   - **Description:** Fetches all images associated with a specific activity.

5. **Search Image by Title**
   - **Endpoint:** `/api/images/search`
   - **Method:** `POST`
   - **Body Parameters:** `title`, `tripID`, `userID`
   - **Description:** Searches images based on caption and trip or user criteria.

### **Vlog Creation**

1. **Create Vlog**
   - **Endpoint:** `/api/vlog/create`
   - **Method:** `GET`
   - **Description:** Automatically creates a vlog for a given trip.

---

## Frontend Integration (Next.js)

The frontend of Travoger is built using Next.js. Here's a quick overview of how the frontend is structured:

1. **Pages**
   - `index.js`: The landing page where users can start planning trips.
   - `trip/[tripID].js`: A dynamic page displaying details about a specific trip.
   - `user/[userID].js`: A user profile page showing all trips and images associated with a user.
   
2. **API Integration**
   - Axios is used to communicate with the backend API. You can find the API calls in the `services` folder (e.g., `services/imageService.js`).

   Example API call for saving an image:

   ```javascript
   import axios from 'axios';

   const saveImage = async (data) => {
     try {
       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/save-img`, data);
       return response.data;
     } catch (error) {
       console.error('Error saving image:', error);
     }
   };
   ```

3. **Styling**
   - The app uses CSS Modules or Tailwind CSS for styling the components.
   
4. **State Management**
   - Local state management is done using React hooks (`useState`, `useEffect`). You can extend this to use a more sophisticated state management tool like Redux if needed.

---

## Database Schema

The primary data models used in Travoger are:

### **Image Model**

```javascript
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    caption: { type: String, required: true },
    userID: { type: String, required: true },
    tripID: { type: String, required: true },
    activityID: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Travoger** - Plan your trips better and never miss out on capturing your travel memories!

--- 

This README file should give a comprehensive overview of your project, including installation, features, API, and how everything fits together!
