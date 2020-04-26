const router = require('express').Router();
const  Category = require('../models/Category');


exports.Find_Category = (req,res,next)=>{
    Category.findById(req.params.Category_ID)
        .then(Category => res.json(Category))
        .catch(err=>res.status(400).json("Error:"+err))

}

// router.route('/addCategory').post((req,res)=>{
//     const Category_ID = req.body.Category_ID;
//     const CategoryName = req.body.CategoryName;
//     const  MainCategory = req.body.MainCategory;
//     const  Admin = req.body.Admin;
//
//     const  newCategory = new Category({
//         Category_ID,
//         CategoryName,
//         MainCategory,
//         Admin
//     });
//
//     newCategory.save()
//         .then(()=>res.json('Category Added!'))
//         .catch(err=>res.status(400).json("Error:"+err));
//
// });

exports.SaveCategory = (req,res,next)=>{

    const Category_ID = req.body.Category_ID;
    const  CategoryName = req.body.CategoryName;
    const  MainCategory = req.body.MainCategory;
    const Admin = req.body.Admin;

    const  newCategory = new Category({
        Category_ID,
        CategoryName,
        MainCategory,
        Admin

    });


    newCategory.save()
        .then(()=>res.json('category Added!'))
        .catch(err=>res.status(400).json("Error:"+err));

}

exports.Update_Category = (req,res,next)=>{

    Category.findByIdAndUpdate(req.params.Category_ID)
        .then(category =>{
            category.CategoryName = req.body.CategoryName;
            category.MainCategory =  req.body.MainCategory;
            category.Admin  =   req.body.Admin;




            category.save()
                .then(()=>res.json('category Updated'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=> res.status(400).json('Err'+err));

}

exports.Delete_Category = (req,res,next)=>{

    Category.findByIdAndDelete(req.params.Category_ID)
        .then(()=>res.json('Category Deleted'))
        .catch(err=>res.status(400).json('Error'+err))

}

