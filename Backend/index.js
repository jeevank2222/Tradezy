require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

mongoose
    .connect(URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:");
        console.error(err.message);
    });

const app = express();

app.listen(PORT, ()=>{
    console.log("Started");
})