const { createActivity } = require("../controllers/activitiesController.js");




const postActivities = async (req,res) => {
  
  const {name,level,duration,season,countryid}= req.body 
  try {
    const newActivity = await createActivity(name,level,duration,season,countryid);
    res.status(200).json(newActivity);

  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



module.exports = postActivities;
