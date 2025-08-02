# Chatly - A Real-time Chat Application

![Chatly Demo](frontend/public/screenshots/Screenshot%202025-08-02%20065038.png)

Chatly is a full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. It allows users to sign up, log in, search for other users, and engage in one-on-one or group chats.

**Live Demo:** [https://chatly-chat-app.onrender.com](https://chatly-chat-app.onrender.com)

## Features

- **User Authentication:** Secure user registration and login with JWT (JSON Web Tokens).
- **Real-time Messaging:** Instant messaging with Socket.io for a seamless chat experience.
- **One-on-One Chat:** Users can search for other registered users and start private conversations.
- **Group Chat:** Create and manage group chats with multiple participants.
- **User Search:** Easily find other users on the platform.
- **Profile Viewing:** View user profiles, including their name and profile picture.
- **Notifications:** Receive notifications for new messages.

## Screenshots

| Screenshot 1                                                                      | Screenshot 2                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![Screenshot 1](frontend/public/screenshots/Screenshot%202025-08-02%20024729.png) | ![Screenshot 2](frontend/public/screenshots/Screenshot%202025-08-02%20024747.png) |
| **Screenshot 3**                                                                 | **Screenshot 4**                                                                 |
| ![Screenshot 3](frontend/public/screenshots/Screenshot%202025-08-02%20024903.png) | ![Screenshot 4](frontend/public/screenshots/Screenshot%202025-08-02%20025313.png) |
 **Screenshot 5**                                                                                                                                                     
<img src="frontend/public/screenshots/Screenshot%202025-08-02%20065019.png" alt="Screenshot 5" style="width: 100%; max-width: 900px;"/>

## Tech Stack

- **Frontend:** React, Chakra UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Real-time Communication:** Socket.IO
- **Authentication:** JWT (JSON Web Tokens)

## Installation and Setup

To get the project running on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/PrashantKumarD/chatly-chat-app.git
cd chatly-chat-app
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development
```

- `PORT`: The port on which the backend server will run.
- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for signing JWTs.
- `NODE_ENV`: Set to `development` for local development.

### 5. Run the application

You'll need two terminals open to run both the backend and frontend servers.

- **Terminal 1: Start the backend server**

```bash
# From the root directory
npm start
```

- **Terminal 2: Start the frontend server**

```bash
# From the frontend directory
cd frontend
npm start
```

The application should now be running at `http://localhost:3000`.

## Deployment

This application is configured for deployment on platforms like Render or Heroku. Ensure you set the environment variables in your deployment service's dashboard.
