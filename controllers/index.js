/* Atakan Aytar 301240597 2/4/2022 */ 
exports.home = function(req, res, next) {
    res.render('home', { title: 'Home' });

}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Projects' });
}

exports.about = function(req, res, next) {
    res.render('about', { title: 'About' });
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'services' });
}