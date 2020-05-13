const  StoreManagerID = require('../models/StoreManagerID');

exports.Find_StoreManagerID = (req,res,next)=>{
    StoreManagerID.find()
        .then(storeManager => res.json(storeManager))
        .catch(err=>res.status(400).json("Error:"+err))
}

exports.SaveStoreManagerID = (req,res,next)=>{

    const smId = req.body.smId;


    const  newStoreManager = new StoreManagerID({
        smId
    });


    newStoreManager.save()
        .then(()=>res.json('Store Manager ID Added!'))
        .catch(err=>res.status(400).json("Error:"+err));

}

exports.Update_StoreMangerID = (req,res,next)=>{

    StoreManagerID.findOne()
        .then(storemangerID =>{

            storemangerID.smId=req.body.smId






            storemangerID.save()
                .then(()=>res.json('Product Updated'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=> res.status(400).json('Err'+err))

}