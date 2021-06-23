var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET Credit page. */
router.get("/credits", function(req, res, next) {
    res.render("credits", { title: "Credits" });
});

module.exports = router;