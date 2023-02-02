const { Router } = require('express');
const activitiesRouter = require('./activities');
const countriesRouter = require('./countries');


const router = Router();

router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);


module.exports = router;
