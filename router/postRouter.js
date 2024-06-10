const express = require("express");
const router = express.Router();
const { create, index, show, update, destroy } = require('../controllers/posts.js');
const validator = require('../middlewares/validator.js')
const bodyData = require('../validations/posts.js')
const authenticateToken = require('../middlewares/auth.js')

router.use(authenticateToken)

router.post('/', validator(bodyData), create)

router.get('/', index)

router.get('/:slug', show)

router.put('/:slug', validator(bodyData), update)

router.delete('/:slug', destroy)

module.exports = router; 