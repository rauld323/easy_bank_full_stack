const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
	country: {
		type: String,
		required: true
	},
	currencyName: {
		type: String,
		required: true
	},
	valueDescription: {
		type: Number,
		required: true
	},
	coutryFlag: {
		type: String,
		required: true
	}
})


const product = mongoose.model('currency', currencySchema )

module.exports = product
