const express = require('express');
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');
const Article = require('./models/article')
const app = express();

mongoose.connect('mongodb://localhost/BlogWebsite');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/' , async (req,res) => {
    const articles = await Article.find().sort({createdAt:'desc'});
    res.render('articles/index',{articles:articles});
})

app.use('/articles' , articleRouter);

app.listen(3000);