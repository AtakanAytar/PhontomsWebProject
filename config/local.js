const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function() {
    console.log('====> LocalStrategy function')
    
    passport.use(new LocalStrategy(authLocal));
};

function authLocal(username, password, done){
    console.log('====> authLocal function');
    
    User.findOne({username: username}, (err, user)=>{
        if (err) {
            return done(err);
        }
        
        if (!user) {
            return done(null, false, { message: 'Unknown user' });
        }

        if (!user.authenticate(password)) {
            return done(null, false, { message: 'Invalid password'});
        }
        
        return done(null, user);
    });
}