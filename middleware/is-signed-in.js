const isSignedIn = (req, res, next) => {
    //if there is a user, go to next function
    if (req.session.user) return next();
    res.redirect('/auth/sign-in');
}

module.exports = isSignedIn;