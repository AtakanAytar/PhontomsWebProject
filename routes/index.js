var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

/* GET Project page. */
router.get('/projects', indexController.projects);

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About' });
});


module.exports = router;