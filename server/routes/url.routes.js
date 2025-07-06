const express = require('express');
const router = express.Router();
const { AuthenticateUser } = require('../middlewares/auth');
const urlController = require('../controllers/urlController');



router.post('/shorten', AuthenticateUser, urlController.handleShortenUrl);
router.get('/list', AuthenticateUser, urlController.handelListUrls);
router.delete('/:id', AuthenticateUser, urlController.handleDeleteURL);



module.exports = router;