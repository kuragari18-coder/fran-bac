const express = require('express')
const { createCheckout, getAllOrder, guestCheckout } = require('../controller/order.controller')
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/createCheckout', authenticate, createCheckout)
router.post('/guestCheckout', guestCheckout)
router.get('/orders', authenticate, authorizeRoles('Admin'), getAllOrder)


module.exports = router;