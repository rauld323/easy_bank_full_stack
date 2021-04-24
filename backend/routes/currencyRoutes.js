const express = require('express');
const router = express.Router();

const { getAllCurrencies, getCurrenciesById} = require('../controller/currencyController')

//@desc GET all the currencies from DB
//@route GET /api/currencies
//@access Public
router.get('/', getAllCurrencies);


//@desc GET a currency by ID from DB
//@route GET /api/currencies/:id
//@access Public
router.get('/:id', getCurrenciesById);

module.exports = router;
