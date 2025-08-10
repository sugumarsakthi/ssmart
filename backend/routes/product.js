// const express = require('express');
// const { getProducts, getSingleProducts } = require('../controllers/productsController');

// router.route('/product').get(getProducts);
// router.route('/product/:id').get(getSingleProducts);

// module.exports = router;


const express = require('express');
const { getProducts, getSingleProducts } = require('../controllers/productsController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProducts);

module.exports = router;