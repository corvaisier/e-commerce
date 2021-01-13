const mongoose = require('mongoose');

const article = mongoose.Schema({
    title: String,
    img: String,
    description: String,
    price: String
})

const Article = mongoose.model('articles', article)
module.exports = Article;