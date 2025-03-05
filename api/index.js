import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = 3000;


mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connection is suceessful");
})
.catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use("/api/user", userRoutes);