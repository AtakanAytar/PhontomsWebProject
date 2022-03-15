let express = require('express');
let router = express.Router();
let contactsController = require('../controllers/contacts');


function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}


router.get('/list', requireAuth,contactsController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth,contactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth,contactsController.processAddPage);

// Routers for edit
router.get('/edit/:id', requireAuth,contactsController.displayEditPage);
router.post('/edit/:id', requireAuth,contactsController.processEditPage);

// Delete
router.get('/delete/:id', contactsController.performDelete);

module.exports = router;