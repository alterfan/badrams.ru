var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.get('/minimap.badrams.ru', function(req, res) {
    // console.log(req, res)
})
module.exports = router;