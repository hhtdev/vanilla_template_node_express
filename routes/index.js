const express = require("express");
const router = express.Router();

const testController = require('../controllers/test.controller');

//Appel d'une page
router.get('/', testController.getNamePage);

module.exports = router;