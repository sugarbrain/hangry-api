const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController')
router.post('/', controller.addOrder);
router.get('/', controller.getAllOrders);
router.get('/:id/getAllMealsFromOrder', controller.getAllMealsFromOrder);
module.exports = router;