/* Atakan Aytar 301240597 2/4/2022 */ 

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


router.get('/', indexController.home);


router.get('/projects', indexController.projects);


router.get('/contact', indexController.contact);

router.get('/about', indexController.about);
router.get('/Services', indexController.services);
module.exports = router;
