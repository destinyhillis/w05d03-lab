const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// index page route
router.get('/', (req, res) => {
    Student.find({}, (err, allStudents)=> {
        if (err){
            res.send(err);
            console.log(err);
        } else {
            res.render('index.ejs', {students: allStudents})
        }
    })
})





module.exports = router;
