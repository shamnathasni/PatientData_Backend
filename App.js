const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
require('dotenv').config(); // Ensure you require dotenv

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors())

require("./config/db_config")(); // Ensure database configuration is loaded

// Import and use routes
const route = require("./routes/route");
app.use(route);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
