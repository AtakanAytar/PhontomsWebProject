const passport = require('passport');

module.exports = function() {
  const User = require('../models/user');
  
  // When a user is authenticated, Passport will 
  // save its _id property to the session.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Later on, when the user object is needed, 
  // Passport will use the _id property to grab 
  // the user object from the database.
  passport.deserializeUser((id, done) => {
    User.findOne(
      { _id: id },
      '-password -salt', 
      (err, user) => {
        done(err, user);
      }
    );
  });

  require('./local')();
};