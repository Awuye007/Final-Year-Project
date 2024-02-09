const User = require("../../models/user.model");
const bcryptjs = require("bcryptjs");

async function register(req, res) {
	try {
		const { firstName, lastName, DOB, gender, hivStatus } = req.body;

		if (!firstName || !lastName || !DOB || !gender || !hivStatus) {
			return res.status(400).json({ message: "Missing required fields" });
		}

		let saltString = await bcryptjs.genSalt(10);

		const user = new User({
			firstName,
			lastName,
			password: await bcryptjs.hash("L!V_Pa55w0rd41#", saltString),
			DOB: new Date(DOB),
			gender,
			hivStatus,
			saltString,
		});

		await user.save();

		return res.status(200).json({ message: "User created successfully!" });
	} catch (error) {
		console.error("Error creating user: " + error);
		return res.status(500).json({ message: "Internal Server error" });
	}
}

module.exports = {
	method: "post",
	route: "/register",
	controller: [register],
};
