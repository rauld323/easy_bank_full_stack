require('dotenv').config();

const currencyData = require('./data/currencies')
const connectDB = require('./config/db')
const Currency = require('./models/Currency')

connectDB();

const importData = async () => {
	try {
		await Currency.deleteMany({});

		await Currency.insertMany(currencyData)

		console.log("Data Successfully Imported");

		process.exit();
	}catch (error) {
		console.error("Error with data import");
		process.exit(1);
	}
}

importData();
