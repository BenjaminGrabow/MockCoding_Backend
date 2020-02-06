const router = require('express').Router();

const videoController = require('../controller/video-controllers');

router.get('/token', videoController.getToken);
router.post('/token', videoController.postToken);

module.exports = router;