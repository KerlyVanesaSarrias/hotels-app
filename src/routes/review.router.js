const { getAll, create } = require('../controllers/review.controllers');
const express = require('express');
const { getOne, remove, update } = require('../controllers/review.controllers');
const verifyJWT = require('../utils/verifyJWT');

const reviewRouter = express.Router();

reviewRouter.route('/reviews')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);
reviewRouter.route('/reviews/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = reviewRouter;