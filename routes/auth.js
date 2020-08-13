const router = require('express').Router();

const { register, login, getMe, getAllMember } = require('../controllers/authController');

const { protect, authorize } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect,authorize('manager'), getMe);
router.route('/member').get(protect, getAllMember);


module.exports = router;
