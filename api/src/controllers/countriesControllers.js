const { Op } = require("sequelize")
// const Country = require("../models/Country")
const{ Country, Activity} = require("../db")



const searchCountryByName = async (name) => {
  let nameToUpperCase = name.charAt(0).toUpperCase() + name.slice(1) 

  const foundCountry  = await Country.findAll({
      where: {
          name: {[ Op.iLike ]: `%${nameToUpperCase}%`}
      },
      include: Activity
  })

  if(!foundCountry.length) throw Error(`There is no country with the name: ${name.toUpperCase()}`)
  
  return foundCountry
}



module.exports ={searchCountryByName}