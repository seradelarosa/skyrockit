const express = require('express');
const router = express.Router();

const User = require('../models/user');

// get /users/:userId/applications
// controllers/applications.js

router.get('/', async (req, res) => {
    try {
      res.render('applications/index.ejs');
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
  






module.exports = router;