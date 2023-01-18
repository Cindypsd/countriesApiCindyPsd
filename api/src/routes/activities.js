const { Router } = require("express");
const postActivities = require("../handlers/activitiesHandlers");


const activitiesRouter = Router();

activitiesRouter.post('/', postActivities )



module.exports = activitiesRouter;