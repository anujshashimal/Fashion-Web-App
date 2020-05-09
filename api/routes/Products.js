const router = require('express').Router();
const upload  = require('../Uploadmiddleware/upload');
const ProductControlller = require('../controllers/Product');


router.get('/find',ProductControlller.Find_All_Product);    // display the all the products

router.get('/finds/:productid',ProductControlller.Find_Edit_Product)  // get specific product detail

router.get('/find/:stockmanagerid',ProductControlller.Find_Product);       // find the stockmanager products

router.post('/add',upload.single('image'),ProductControlller.Store_Product);     //  Add the product

router.put('/update/:id',upload.single('image'),ProductControlller.Update_Product); // update  the product

router.delete('/delete/:productid',ProductControlller.Delete_Product);    // Delete Product

module.exports = router;  //exports
