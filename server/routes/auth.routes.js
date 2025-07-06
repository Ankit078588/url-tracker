const express = require('express');
const router = express.Router();

const { AuthenticateUser } = require('../middlewares/auth');
const authController = require('../controllers/authController');



router.post('/register', authController.handleRegister);
router.post('/login', authController.handleLogin);
router.get('/me', AuthenticateUser, authController.handleGetUserInfo);
router.get('/logout', authController.handleLogout);




module.exports = router;


