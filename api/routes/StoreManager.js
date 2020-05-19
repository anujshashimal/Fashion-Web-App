
const router = require('express').Router();
const StoreManagerControlller = require('../controllers/StoreManager');


router.get('/findstoreManager/:storemanagerusername',StoreManagerControlller.Find_StoreManager_byname);


router.get('/findstoreManager/:smId',StoreManagerControlller.Find_StoreManager);

router.get('/getallstoremanagers',StoreManagerControlller.getAllStoreManager);

router.post('/addstoremanager',StoreManagerControlller.SaveStoreManager);

router.post('/updatestoreManager',StoreManagerControlller.Update_StoreManger);

router.delete('/deletestoreManager/:smId',StoreManagerControlller.Delete_StoreManager);





module.exports = router;