const router = require('express').Router();
const userCtrl = require('../controllers/userController');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router.post('/register', userCtrl.register);

router.post('/activation', userCtrl.activateEmail);

router.post('/login', userCtrl.login);

router.post('/refresh_token', userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', auth, userCtrl.resetPassword);

router.get('/info', auth, userCtrl.getUserInfo);

router.get('/all_info', auth, authAdmin, userCtrl.getUserInfo);

router.get('/logout', userCtrl.logout);

module.exports = router;
