const express = require('express');
const router = express.Router();
const Bot = require('../Controllers/bot');


router.post('/', Bot.input);


module.exports = router;
