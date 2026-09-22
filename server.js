

// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI
const { MongoClient } = require('mongodb');


//MIDDLEWARE
const client = new MongoClient(uri);

//DATABASE

// ROUTES
app.get('/', async(req, res) => {
    try {
        await client.connect();
        const db = client.db("test");
        res.status(200).json({ message: "Successfully connected to the database!" });
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Failed to connect to the database." });
    }
})


//PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
    
})

