let  Category = require('../models/Category');



exports.findCategory = (req,res,next)=>{
    Category.find({'MainCategory':req.params.MainCategory,'Admin':req.params.Admin})
        .then(category=>res.json(category))
        .catch(err=> res.status(400).json("error : "+err));
}

exports.findCategoryByName = (req,res,next)=>{
    Category.find({'MainCategory':req.params.MainCategory,'CategoryName':req.params.CategoryName})
        .then(category=>res.json(category))
        .catch(err=> res.status(400).json("error : "+err));
}


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

    Category.findByIdAndUpdate({'Category_ID':req.params.Category_ID})
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
    Category.findOneAndDelete({'Category_ID':req.params.Category_ID})
        .then(()=>res.json('Category Deleted'))
        .catch(err=>res.status(400).json('Error'+err))
}


