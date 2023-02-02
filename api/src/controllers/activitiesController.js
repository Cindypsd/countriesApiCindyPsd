const {Activity} = require("../db");

const createActivity = async(name,level,duration,season,countryid) => {
  const newActivity = await Activity.create({name,level,duration,season})
  await newActivity.addCountry(countryid);
  return newActivity
};




module.exports = { createActivity }