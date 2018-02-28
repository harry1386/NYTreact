const articlesModel = require('../models/article.js');

/**
 * articlesController.js
 *
 * @description :: Server-side logic for managing articles.
 */
module.exports = {

    /**
     * articlesController.list()
     */
    list: function (req, res) {
        articlesModel.find(function (err, articless) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting articles.',
                    error: err
                });
            }
            return res.json(articless);
        });
    },

    /**
     * articlesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        articlesModel.findOne({_id: id}, function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting articles.',
                    error: err
                });
            }
            if (!articles) {
                return res.status(404).json({
                    message: 'No such articles'
                });
            }
            return res.json(articles);
        });
    },

    /**
     * articlesController.create()
     */
    create: function (req, res) {
        var articles = new articlesModel({
			title : req.body.title,
			date : req.body.date,
			url : req.body.url

        });

        articles.save(function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating articles',
                    error: err
                });
            }
            return res.status(201).json(articles);
        });
    },

    /**
     * articlesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        articlesModel.findOne({_id: id}, function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting articles',
                    error: err
                });
            }
            if (!articles) {
                return res.status(404).json({
                    message: 'No such articles'
                });
            }

            articles.title = req.body.title ? req.body.title : articles.title;
			articles.date = req.body.date ? req.body.date : articles.date;
			articles.url = req.body.url ? req.body.url : articles.url;
			
            articles.save(function (err, articles) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating articles.',
                        error: err
                    });
                }

                return res.json(articles);
            });
        });
    },

    /**
     * articlesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        articlesModel.findByIdAndRemove(id, function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the articles.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};