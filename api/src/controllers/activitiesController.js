const {Country,Activity} = require("../db");

// const createActivity = async (name,level,duration,season,id) =>{
  
// }

const createActivity = async(name,level,duration,season,countryid) => {

  const newActivity = await Activity.create({name,level,duration,season,countryid})
  
  const countryFound = await Country.findAll({
    where:{
      id: countryid,
    }
  })
  
  await newActivity.addCountry(countryFound)
  return newActivity
};




module.exports = { createActivity }