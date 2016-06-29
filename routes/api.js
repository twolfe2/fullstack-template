'use strict';


const express = require('express');



let router = express.Router();


router.use('/crud', require('./cruds'))




module.exports = router;  