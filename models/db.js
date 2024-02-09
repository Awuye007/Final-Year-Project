const mongoose = require("mongoose");

try {
	mongoose.connect(process.env.MONGODB_URL);
	require("./user.model.js")
	console.log("MongoDB connection established");
} catch (error) {
	console.log("MongoDB connection not established");
}
