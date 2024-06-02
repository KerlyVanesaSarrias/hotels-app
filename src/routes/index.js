const express = require('express');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí

router.use(userRouter)
router.use(cityRouter)
module.exports = router;