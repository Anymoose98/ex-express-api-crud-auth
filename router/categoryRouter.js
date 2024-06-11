const express = require("express");
const router = express.Router();
const { create, index, show, update, destroy } = require('../controllers/category.js');
const validator = require('../middlewares/validator.js')
const bodyData = require('../validations/category.js')
const authenticateToken = require('../middlewares/auth.js')

// router.use(authenticateToken)

router.post('/', validator(bodyData), create)

router.get('/', index)

router.get('/:id', show)

router.put('/:id', validator(bodyData), update)

router.delete('/:id', destroy)

module.exports = router; 