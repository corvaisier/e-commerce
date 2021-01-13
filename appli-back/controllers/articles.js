const { Article } = require('../dao');

const getArticles = async (req, res) => { 
    console.log(req.headers);
    const result = await Article.find({}, {_id:0})
    res.send(result)
}

const postArticle = (req, res) => {
    console.log(req.body);
    if (
        !req.body.title
        || typeof req.body.title !== 'string'
        || req.body.title.trim() === ''
        ||!req.body.img
        || typeof req.body.img !== 'string'
        || req.body.img.trim() === ''
        ||!req.body.description
        || typeof req.body.description !== 'string'
        || req.body.description.trim() === ''
        ||!req.body.price
        || typeof req.body.price !== 'string'
        || req.body.price.trim() === ''
        ) {
            return res.status(401).send('pas ok');
        }
    const { title, img, description, price } = req.body;
    Article.create({ title, img, description, price }, function (err) {
        if (err) return handleError(err);
        res.send('inserted !')
      })
};

module.exports = {
    getArticles,
    postArticle
}