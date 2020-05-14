const router = require('express').Router();

const CategoryIDControlller = require('../controllers/CategoryID');

router.get('/CategoryID',CategoryIDControlller.Find_CategoryID);
router.post('/saveCategoryID',CategoryIDControlller.SaveCategoryID);
router.post('/updateCategoryID',CategoryIDControlller.Update_CategoryID);

module.exports = router;