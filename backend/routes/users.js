const router = require('express').Router();
let User = require('../models/user.model');


/**
 * A GET REQUEST TO THE USERS ROUTE
 * USER MODEL IS ACCESSED USING FIND WHICH IS A PROMISE
 * .then RESOLVES THAT PROMISE BY PASSING THE USERS FROM THE DATABASE
 * AS A RESPONSE IN JSON
 */
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * A POST REQUEST TO THE /add ROUTE
 * INCOMING REQUEST PARSE THE USERNAME
 * A NEW USER IS CREATED USING THE USER SCHEMA
 * USER IS STORED INSIDE THE DATABSE USING .save 
 */
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;