
const router = require('express').Router();
const  Category = require('../models/Category');

router.route('/:id').get((req,res)=>{
    Category.find()
        .then(Categories => res.json(Categories))
        .catch(err=>res.status(400).json("Error:"+err))
});






// router.route('/addCategory').post((req,res)=>{
//     const Category_ID = req.body.Category_ID;
//     const CategoryName = req.body.CategoryName;
//     const  MainCategory = req.body.MainCategory;
//     const  Admin = req.body.Admin;

//     const  newCategory = new Category({
//         Category_ID,
//         CategoryName,
//         MainCategory,
//         Admin
//     });

//     newCategory.save()
//         .then(()=>res.json('Category Added!'))
//         .catch(err=>res.status(400).json("Error:"+err));

// });

const categoryController = require('../controllers/Category');


router.get('/findCategory/:MainCategory/:Admin',categoryController.findCategory);

router.post('/addCategory',categoryController.SaveCategory);

router.post('/updateCategory/:Category_ID',categoryController.Update_Category);

router.delete('/deletecategory/:Category_ID',categoryController.Delete_Category);

module.exports = router;
