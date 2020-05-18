const router = require('express').Router();
const UserControlller = require('../controllers/user');


router.get('/find',UserControlller.Find_All_Users);    // display the all the products

router.get('/finds/:username',UserControlller.Find_User);   // Find the User---------------------------------------

router.post('/add',UserControlller.Add_User);    // Add the User------------------------------------------------

router.post('/update/:userid',UserControlller.Update_User);   // Update  the User-------------------------------

router.delete('/delete/:userid',UserControlller.Delete_User);   // Delete User----------------------------------

module.exports = router;  //exports
