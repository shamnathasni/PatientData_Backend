const mongoose = require("mongoose");

// Directly provide your MongoDB connection string here
const MONGOURL = "mongodb+srv://shamnathasni4:905905@cluster0.guc1xbz.mongodb.net/PatientsData?retryWrites=true&w=majority";

module.exports = (connection) => {
    const dbConnection = connection || MONGOURL;
    console.log("Attempting to connect to:", dbConnection); // Log the connection attempt

    mongoose
        .connect(dbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB connection successful");
        })
        .catch((err) => {
            console.error("DB connection error:", err);
        });

    // Log the database connection status
    mongoose.connection.on('connected', () => {
        console.log("Mongoose connected to: ", mongoose.connection.name);
    });

    mongoose.connection.on('error', (err) => {
        console.error("Mongoose connection error:", err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose disconnected");
    });
};
