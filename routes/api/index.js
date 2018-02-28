const router = require("express").Router();
const articleRoutes = require("./articlesRoutes");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;