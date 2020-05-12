const router = require('express').Router();

const StoreManagerIDControlller = require('../controllers/storemanagerID');

router.get('/storemanagerID',StoreManagerIDControlller.Find_StoreManagerID);
router.post('/savestoremanagerID',StoreManagerIDControlller.SaveStoreManagerID);
router.post('/updatestoremanagerID',StoreManagerIDControlller.Update_StoreMangerID);

module.exports = router;