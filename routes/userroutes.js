const express = require('express');
const router = express.Router();
const controllers = require('../controller/usercontroler');

router.post('/add', controllers.createUsers);
router.get('/getAll',controllers.getUsersbyId);
router.get('/getAll',controllers.getAllEvent);
router.delete('/delete/:Id',controllers.deleteUsersbyId);
router.put('/update/:Id', controllers.updateUsers);

module.exports = router;