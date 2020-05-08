const router = require('express').Router();

const { test } = require('../controllers/authController');

router.route('/').get(test);


module.exports = router;
