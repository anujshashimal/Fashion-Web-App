const router = require('express').Router();
const CommentsControlller = require('../controllers/Comments');


router.get('/find',CommentsControlller.Find_All_Comments);    // display the all the Comments

router.get('/finds/:username',CommentsControlller.Find_Comments);   // Find the Comments---------------------------------------

router.get('/findByProduct/:productId',CommentsControlller.Find_CommentsByProducts);   // Find the Comments---------------------------------------

router.post('/add',CommentsControlller.Add_Comments);    // Add the Comments------------------------------------------------

router.post('/update/:_id',CommentsControlller.Update_Comments);   // Update  the Comment-------------------------------

router.delete('/delete/:_id',CommentsControlller.Delete_Comments);   // Delete Comments----------------------------------

module.exports = router;  //exports
