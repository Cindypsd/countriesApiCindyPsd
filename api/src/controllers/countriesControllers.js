const { Op } = require("sequelize")
const{ Country, Activity} = require("../db")



const searchCountryByName = async (name) => {

  const foundCountry  = await Country.findAll({
      where: {
          name: {[ Op.iLike ]: `%${name}%`}
      },
      include: Activity
  })

  if(!foundCountry.length) throw Error(`There is no country with the name: ${name.toUpperCase()}`)
  
  return foundCountry
}



module.exports ={searchCountryByName}