const express = require('express');
const router = express.Router();
const controllers = require('../controller/eventcontrollers');

router.post('/add', controllers.createEvent);
router.get('/getAll',controllers.getEventbyID);
router.get('/getAll',controllers.getAllEvent);
router.delete('/delete/:Id',controllers.deleteEventbyId);
router.put('/update/:Id', controllers.updateEvent);

module.exports = router;