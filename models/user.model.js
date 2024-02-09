const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userName: {
			type: String,
			min: 3,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
			min: 3,
		},
		lastName: {
			type: String,
			required: true,
			min: 3,
		},
		password: {
			type: String,
			required: true,
			min: 3,
		},
		DOB: {
			type: Date,
			required: true,
			min: 3,
		},
		gender: {
			type: String,
			required: true,
			min: 3,
		},
		hivStatus: {
			type: String,
			required: true,
			min: 3,
		},
		profileImage: {
			type: String,
			default: "",
		},
		saltString: String,
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
	const avatarNames = [
		"Dusty",
		"Jasper",
		"Lola",
		"Jack",
		"Felix",
		"Bandit",
		"Kiki",
		"Buster",
		"Lucky",
		"Casper",
		"Whiskers",
		"Muffin",
		"Charlie",
		"Patches",
		"Bubba",
		"Milo",
		"Boots",
		"Tigger",
	];

	this.profileImage = `https://api.dicebear.com/7.x/adventurer/svg?seed=${
		avatarNames[Math.floor(Math.random() * avatarNames.length)]
	}`;

	function generateRandomNumbers() {
		return Math.floor(1000 + Math.random() * 9000);
	}

	this.userName =
		"@" +
		this.firstName.slice(0, 2) +
		generateRandomNumbers() +
		this.lastName.slice(-2);

	next();
});

module.exports = mongoose.model("user", userSchema);
