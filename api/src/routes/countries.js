const { Router } = require("express");
const { loadApiDataToDB } = require("../controllers/DBController");
const { getAllCountries, getCountryById} = require('../handlers/countriesHandlers')
const countriesRouter = Router();




countriesRouter.get('/', getAllCountries )
countriesRouter.get('/:id', getCountryById )





 module.exports = countriesRouter;