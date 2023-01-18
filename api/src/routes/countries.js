const { Router } = require("express");
const { getAllCountries, getCountryById, getCountryByName } = require('../handlers/countriesHandlers')
const countriesRouter = Router();


countriesRouter.get('/', getAllCountries )

countriesRouter.get('/:id', getCountryById )





 module.exports = countriesRouter;