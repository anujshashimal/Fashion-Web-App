
const router = require('express').Router();

const categoryController = require('../controllers/Category');


router.get('/findCategory/:id',categoryController.Find_Category);

router.post('/addCategory',categoryController.SaveCategory);

router.post('/updateCategory/:id',categoryController.Update_Category);

router.delete('/deletecategory/:id',categoryController.Delete_Category);

module.exports = router;  //exports
