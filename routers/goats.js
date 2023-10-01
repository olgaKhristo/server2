// routers/goats.js
const { Router } = require('express');
const goatsController = require('../controllers/goats')

const router = Router();

router.get('/', goatsController.index)

module.exports = router;