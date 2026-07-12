import express from "express";

import dotenv from "dotenv";

dotenv.config();
import {createServer} from "node:http";

import { Server } from "socket.io";

import { connectToSocket } from "./controllers/socketManager.js";
import mongoose  from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js"

const app = express();


// Express app ko HTTP server ke saath wrap kiya

const  server = createServer(app);

const io = connectToSocket(server);

 
app.use(cors({
    origin: "https://zoomclonefrontendd.onrender.com",
    credentials: true,
}));

app.use(express.json({limit:"40kb"}));

app.use(express.urlencoded({limit:"40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

