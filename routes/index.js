var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getname/:name?/:family?', function(req, res, next) {
  const name = req.params.name || 'Express';
  const family = req.params.family || 'nzh';

  res.render('index', { titlllle: name+family});
});

module.exports = router;


// :name =>343434 ////ali
///89789