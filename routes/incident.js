var express = require('express');
var router = express.Router();
let incidentController = require('../controllers/incident');

let passport = require('passport');

// Router for lists incidents function
router.get('/list', incidentController.incidentList);

// // Router for incident details function
// router.get('/details/:id', incidentController.details);

// // Routers for edit functions
// router.get('/edit/:id', incidentController.displayEditPage);
router.put('/edit/:id', passport.authenticate('jwt', { session: false }), incidentController.processEditPage);

// Router for Delete function
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), incidentController.performDelete);

// // Routers for Add functions
// router.get('/add', incidentController.displayAddPage);
router.post('/add', passport.authenticate('jwt', { session: false }), incidentController.processAdd);

module.exports = router;