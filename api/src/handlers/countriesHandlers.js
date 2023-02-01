const { searchCountryByName } = require('../controllers/countriesControllers');
const { loadApiDataToDB } = require('../controllers/DBController');
const { Country, Activity } = require('../db');

const getAllCountries = async (req, res) => {
	const { name } = req.query;

	const countries = await loadApiDataToDB();
	try {
		let result = name
			? await searchCountryByName(name)
			: await countries.map(country => {
					return {
						id: country.id,
						name: country.name,
						flag: country.flag,
						continet: country.continet,
						population: country.population,
					};
			  });
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send(error);
	}
};


const getCountryById = async (req, res) => {
	try {
		const { id } = req.params;
		const countryid = await Country.findByPk(id.toUpperCase(), {
			include: {
				model: Activity,
				through: {
					attributes: [],
				},
			},
		});

		!countryid &&
			res
				.status(400)
				.json(`No existe un pais con el ID: -${id.toUpperCase()}-`);

		return res.status(200).json(countryid);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getAllCountries,
	getCountryById,
};
