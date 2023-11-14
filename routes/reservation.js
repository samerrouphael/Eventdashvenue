const express = require('express');
const router = express.Router();
const controllers = require('../controller/reservationcontrollers');

router.post('/add', controllers.createReservation);
router.get('/getAll',controllers.getReservationbyEventID);
router.get('/getAll',controllers.getReservationbyID);
router.get('/getAll',controllers.getAllReservation);
router.get('/getAll',controllers.getReservationbyUserID);
router.delete('/delete/:Id',controllers.deleteReservationbyId);
router.put('/update/:Id', controllers.updateReservation);

module.exports = router;