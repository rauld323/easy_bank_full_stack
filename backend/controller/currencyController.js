const Currency = require('../models/Currency');

const getAllCurrencies = async (req, res) => {
	try{
		const currencies = await Currency.find({});

		res.json(currencies)
	}catch (error){
		console.error(error)
		res.status(500).json({message: "Server Error"})
	}
}


const getCurrenciesById = async (req, res) => {
	try {
		const currencies = await Currency.findByIds(req.params.id);

		res.json(currencies)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Server Error" })
	}
}

module.exports = {
	getAllCurrencies,
	getCurrenciesById
}
