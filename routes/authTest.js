const router = require('express').Router();
const { protect } = require('../middleware/auth');

const { test } = require('../controllers/testController');

router.route('/').get(protect, test);


module.exports = router;
