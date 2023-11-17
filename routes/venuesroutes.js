const express = require('express');
const router = express.Router();
const controllers = require('../controller/venuescontrollers');

router.post('/add', controllers.createVenues);
router.get('/getAll',controllers.getAllVenue);
router.delete('/delete/:Id',controllers.deleteVenuebyId);
router.put('/update/:Id', controllers.updateVenues);

module.exports = router;