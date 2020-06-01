const express = require('express');
const router = express.Router({ caseSensitive: true });
const categoryController = require('../controller/category.controller');
router.get('/fetchAll',categoryController.getCategory);
router.post('/add',categoryController.category);
module.exports = router;