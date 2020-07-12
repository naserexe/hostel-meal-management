const router = require('express').Router();

const { deposit } = require('../controllers/depositController');

const { protect, authorize } = require('../middleware/auth');

router.route('/').post(protect, authorize('manager'), deposit);



module.exports = router;
