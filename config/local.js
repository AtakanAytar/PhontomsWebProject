const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('./config');

module.exports = function() {
    // console.log('====> LocalStrategy function');

    passport.use(
        new JWTstrategy({
                secretOrKey: config.SECRETKEY,
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
            },
            async(token, done) => {
                try {
                    console.log(token);
                    return done(null, token.payload);
                } catch (error) {
                    console.log(error);
                    done(error);
                }
            }
        )
    );

    passport.use(
        'login',
        new LocalStrategy({
                usernameField: 'username',
                passwordField: 'password'
            },
            authLocal));
};

function authLocal(username, password, done) {
    console.log('====> authLocal function');

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false, { message: 'Unknown user' });
        }

        if (!user.authenticate(password)) {
            return done(null, false, { message: 'Invalid password' });
        }

        return done(null, user);
    });
}