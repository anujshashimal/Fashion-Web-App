
const router = require('express').Router();
const  Category = require('../models/Category');

router.route('/:id').get((req,res)=>{
    Category.find()
        .then(Categories => res.json(Categories))
        .catch(err=>res.status(400).json("Error:"+err))
});

const categoryController = require('../controllers/Category');


router.get('/findCategory/:MainCategory/:Admin',categoryController.findCategory);

router.get('/findCategorybyname/:MainCategory/:CategoryName',categoryController.findCategoryByName);

router.post('/addCategory',categoryController.SaveCategory);

router.post('/updateCategory/:Category_ID',categoryController.Update_Category);

router.delete('/deletecategory/:Category_ID',categoryController.Delete_Category);

module.exports = router;
