const router = require('express').Router()

// const auth = async (req, res, next) {
//     req.headers.userid
//     const user = await users.findOne({_id: req.headers.userId})
//     req.user = user;
//     next();
// }

const { mongo } = require('mongoose');
const { postArticle, getArticles } = require('./articles')

router.post('/articles/article', postArticle)

router.get('/articles', getArticles)

module.exports = router;
