const  CategoryID = require('../models/CategoryID');

exports.Find_CategoryID = (req,res,next)=>{
    CategoryID.find()
        .then(CategoryID => res.json(CategoryID))
        .catch(err=>res.status(400).json("Error:"+err))
}

exports.SaveCategoryID = (req,res,next)=>{
    const Category_ID = req.body.Category_ID;
    const  newCategoryID = new CategoryID({
        Category_ID
    });
    newCategoryID.save()
        .then(()=>res.json('category ID Added!'))
        .catch(err=>res.status(400).json("Error:"+err));
}

exports.Update_CategoryID = (req,res,next)=>{
    CategoryID.findOne()
        .then(CategoryID =>{
            CategoryID.Category_ID=req.body.Category_ID
            CategoryID.save()
                .then(()=>res.json('Product Updated'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=> res.status(400).json('Err'+err))
}