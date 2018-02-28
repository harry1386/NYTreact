const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

// article routes
router.use("/articles", articleRoutes);

module.exports = router;