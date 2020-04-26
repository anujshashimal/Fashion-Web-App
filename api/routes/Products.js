const router = require('express').Router();
const upload  = require('../Uploadmiddleware/upload');
const ProductControlller = require('../controllers/Product');

router.get('/find/:stockmanagerid',ProductControlller.Find_Product);       // find the products

router.post('/add',upload.single('image'),ProductControlller.Store_Product);     //  Add the product

router.post('/update/:id',upload.single('image'),ProductControlller.Update_Product); // update  the product

router.delete('/delete/:productid',ProductControlller.Delete_Product);    // Delete Product

module.exports = router;  //exports
