const express = require('express');
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');
// const Article = require('./')
const app = express();

mongoose.connect('mongodb://localhost/BlogWebsite');

app.set('view engine', 'ejs');

app.get('/' , (req,res) => {
    const articles = [
        {
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test Article Description'
        },
        {
            title: 'Test Article 2',
            createdAt: new Date(),
            description: 'Test Article 2 Description'
        },
    ]
    res.render('articles/index',{articles:articles});
})

app.use('/articles' , articleRouter);

app.listen(3000);