//if user exists, pass 
const passUserToView = (req, res, next) => {
    //sets variables in objects that can be used in the ejs
    //setting it to locals because we will be using it in multiple views, and it needs to be dynamic
    res.locals.user = req.session.user ? req.session.user : null;
    next();
};

module.exports = passUserToView;