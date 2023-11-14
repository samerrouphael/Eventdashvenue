const express = require('express');
const router = express.Router();
const controllers = require('../controller/venuescontrollers');

router.post('/add', controllers.createVenue);
router.get('/getAll',controllers.getAllVenue);
router.delete('/delete/:Id',controllers.deleteVenuebyID);
router.put('/update/:Id', controllers.updateVenue);

module.exports = router;