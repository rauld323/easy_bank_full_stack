require('dotenv').config();

const express = require('express')
const connectDB = require('./config/db');
const currencyRoutes = require('./routes/currencyRoutes')

connectDB();

const app = express();

// we will be retrieving json data with use
app.use(express.json());

app.use('/api/currencies', currencyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
