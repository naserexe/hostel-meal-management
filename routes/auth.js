const router = require('express').Router();

const { register } = require('../controllers/authController');

router.route('/').post(register);


module.exports = router;
