
const  StoreManager = require('../models/StoreManager');

exports.Find_StoreManager = (req,res,next)=>{
    StoreManager.find(
        req.params.smId)
        .then(storeManager => res.json(storeManager))
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

exports.SaveStoreManager = (req,res,next)=>{

    const smId = req.body.smId;
    const UserName = req.body.UserName;
    const  Email = req.body.Email;
    const  Password = req.body.Password;
    const  RePassword = req.body.RePassword;
    const  Admin = req.body.Admin;

    const  newStoreManager = new StoreManager({
        smId,
        UserName,
        Email,
        Password,
        RePassword,
        Admin
    });


    newStoreManager.save()
        .then(()=>res.json('Store Manager Added!'))
        .catch(err=>res.status(400).json("Error:"+err));

}

exports.Update_StoreManger = (req,res,next)=>{

    StoreManager.findByIdAndUpdate(req.params.smId)
        .then(storeManager =>{
            storeManager.UserName = req.body.UserName;
            storeManager.Email =  req.body.Email;
           storeManager.Password = req.body.Password;
            storeManager.RePassword = req.body.RePassword
            storeManager.Admin  =   req.body.Admin;




            StoreManager.save()
                .then(()=>res.json('store Manger Updated'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=> res.status(400).json('Err'+err));

}

exports.Delete_StoreManager = (req,res,next)=>{

    StoreManager.findOneAndDelete(req.params.smId)
        .then(()=>res.json('store Manager Deleted'))
        .catch(err=>res.status(400).json('Error'+err))

}


