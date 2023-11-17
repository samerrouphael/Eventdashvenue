const express = require('express');
const router = express.Router();
const controllers = require('../controller/usercontroler');

router.post('/add', controllers.createUsers);
router.get('/get/:Id',controllers.getUsersbyId);
router.get('/getAll',controllers.getAllUsers);
router.delete('/delete/:Id',controllers.deleteUsersbyId);
router.put('/update/:Id', controllers.updateUsers);

module.exports = router;