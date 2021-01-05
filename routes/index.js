var express = require('express');
var router = express.Router();
const urlExist = require("url-exist")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/check', function (req, res) {

	(async () => {
	    const exists = await urlExist(req.body.url);
	    // Handle result
	    console.log(exists)


	  res.render('check', {url :  req.body.url , 'exists': exists } );
	})();
		
})


module.exports = router;
