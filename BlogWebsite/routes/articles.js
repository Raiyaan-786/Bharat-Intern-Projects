const express = require('express');
const router = express.Router();
const Article = require('./../models/article');
router.get('/new',(req,res) => {
    res.render('articles/new');
})
 router.post('/',(req,res) => {

 })


module.exports = router