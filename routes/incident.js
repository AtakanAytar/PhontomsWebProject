var express = require('express');
var router = express.Router();

let incidentController = require('../controllers/incident');

// Router for lists incidents function
router.get('/list', incidentController.incidentList);

// Router for incident details function
router.get('/details/:id', incidentController.details);

// Routers for edit functions
router.get('/edit/:id', incidentController.displayEditPage);
router.post('/edit/:id', incidentController.processEditPage);

// Router for Delete function
router.get('/delete/:id', incidentController.performDelete);

// Routers for Add functions
router.get('/add', incidentController.displayAddPage);
router.post('/add', incidentController.processAddPage);


module.exports = router;