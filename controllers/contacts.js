let contacts = require('../models/contacts');

exports.list = function(req, res, next) {

    contacts.find((err, contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render(
                'contacts/list', 
                { 
                    title: 'contacts List',
                    contactsList: contactsList,
                    userName: req.user ? req.user.username : '' 
                }
            );
        }
    }).sort({ name: 1 }).collation({ locale: "en", caseLevel:true });
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = contacts();

    res.render('contacts/add_edit', {
        title: 'Add a new Item',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    
    let newItem = contacts({
        _id: req.body.id,
        name: req.body.item,
        phone: req.body.qty,
        email: req.body.status,
        
        
    });

    contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/contacts/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = contacts({
        _id: req.body.id,
        name: req.body.item,
        phone: req.body.qty,
        email: req.body.status,
    });

    // console.log(updatedItem);

    contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    
    contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}
