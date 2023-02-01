const { Op } = require("sequelize")
const{ Country, Activity} = require("../db")



const searchCountryByName = async (name) => {

  const foundCountry  = await Country.findAll({
      where: {
          name: {[ Op.iLike ]: `%${name}%`}
      },
      include: {
				model: Activity,
				through:{
					attributes:[],
				}
			},
  })

  return foundCountry
}



module.exports ={searchCountryByName}