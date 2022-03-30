// create a reference to the model
let Incident = require('../models/incident');

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    }
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

exports.list = function(req, res, next) {

    Inventory.find((err, incidentList) => {
        if (err) {
            return console.error(err);
        } else {

            res.status(200).json(incidentList);
        }
    });
}

// // Gets all incidents from the Database and renders the page to list all incidents.
// module.exports.incidentList = function(req, res, next) {
//     Incident.find((err, incidentList) => {
//         // console.log(incidentList);
//         if (err) {
//             return console.error(err);
//         } else {
//             res.render('incident/list', {
//                 title: 'Incident List',
//                 incidents: incidentList
//             })
//         }
//     });
// }

// // Gets a incident by id and renders the details page.
// module.exports.details = (req, res, next) => {

//     let id = req.params.id;

//     Incident.findById(id, (err, incidentToShow) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             //show the edit view
//             res.render('incident/details', {
//                 title: 'Incident Details',
//                 incident: incidentToShow
//             })
//         }
//     });
// }

// // Renders the Add form using the add_edit.ejs template
// module.exports.displayAddPage = (req, res, next) => {

//     let newItem = Incident();
//     res.render('incident/add_edit', {
//         title: 'Incident Add/Edit',
//         incident: newItem
//     })

// }

// Processes the data submitted from the Add form to create a new incident
module.exports.processAdd = (req, res, next) => {

    try {
        let newItem = Incident({
            _id: req.body.id,
            IncidentExplanation: req.body.IncidentExplanation,
            User: req.body.User,
            Department: req.body.Department,
            Solved: req.body.Solved,

        });

        Incident.create(newItem, (err, item) => {
            if (err) {
                console.log(err);

                return res.status(400).send({
                    success: false,
                    message: getErrorMessage(err)
                });
            } else {
                console.log(item);
                return res.status(200).json(item);
            }
        });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: getErrorMessage(error)
        });
    }
}

// // Gets a incident by id and renders the Edit form using the add_edit.ejs template
// module.exports.displayEditPage = (req, res, next) => {

//     let id = req.params.id;

//     Incident.findById(id, (err, itemToEdit) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             //show the edit view
//             res.render('incident/add_edit', {
//                 title: 'Edit Item',
//                 incident: itemToEdit
//             })
//         }
//     });

// }

// Processes the data submitted from the Edit form to update a incident
module.exports.processEditPage = (req, res, next) => {

    try {
        let id = req.params.id

        let updatedItem = Incident({
            _id: req.body.id,
            IncidentExplanation: req.body.IncidentExplanation,
            User: req.body.User,
            Department: req.body.Department,
            Solved: req.body.Solved
        });

        console.log(updatedItem);

        Incident.updateOne({ _id: id }, updatedItem, (err) => {
            if (err) {
                console.log(err);

                return res.status(400).json({
                    success: false,
                    message: getErrorMessage(err)
                });
            } else {

                return res.status(200).json({
                    success: true,
                    message: 'Item updated successfully.'
                });
            }
        });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: getErrorMessage(error)
        });
    }

}


// Deletes a incident based on its id.
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Incident.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send({
                success: false,
                message: getErrorMessage(err)
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Item removed successfully."
            });
        }
    });
}