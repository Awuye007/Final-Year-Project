// Importing the jsonwebtoken library for working with JWTs
const jsonwebtoken = require("jsonwebtoken");

// Middleware function to verify JWT token
module.exports.verifyJwtToken = (req, res, next) => {
	// Variable to store the extracted JWT token
	let token;

	// Checking if "Authorization" header exists in the request
	if ("authorization" in req.headers)
		// Extracting the JWT token from the "Authorization" header
		token = req.headers["authorization"].split(" ")[1];

	// If no token is found, pass control to the next middleware
	if (!token) next();
	else {
		// Verifying the JWT token using the secret key
		jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			// If there's an error during token verification
			if (err)
				// Sending a 500 Internal Server Error response with authentication failure message
				return res
					.status(500)
					.send({ auth: false, message: "Token authentication failed." });
			else {
				// If token verification is successful, attaching the decoded user ID to the request object
				req._id = decoded._id;
				// Passing control to the next middleware
				next();
			}
		});
	}
};
