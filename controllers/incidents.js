let Incident = require('../models/incidents');




//Returns Database list as incidentlist to the web page # (# is a place holder for the webpage)
module.exports.incidentList = function(req, res, next) {  
    Incident.find((err, incidentList) => {
        // console.log(incidentList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('#', {
                title: '#', 
                incidents: incidentList
            })            
        }
    });
}


//Deletes the entry from the database needs to be called # is a place holder for redirection page
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;
    
    Incident.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('#');
        }
    });

}


// Processes the data submitted from the Add form to create a new movie
module.exports.processAddPage = (req, res, next) => {

    let newItem = Incident({
        _id: req.body.id,
        IncidentExplanation: req.body.IncidentExplanation,
        User: req.body.User,
        Department: req.body.Department,
        Solved: req.body.Solved,
        
    });
    Incident.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('#');
        }
    });


}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Incident({
        _id: req.body.id,
        IncidentExplanation: req.body.IncidentExplanation,
        User: req.body.User,
        Department: req.body.Department,
        Solved: req.body.Solved,
    });

    // console.log(updatedItem);

    Incident.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('#');
        }
    });
  
    
}