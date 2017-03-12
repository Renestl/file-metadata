const express		= require('express');
const router		= express.Router();
const pug			= require('pug');
const multer		= require('multer');
const storage		= multer.memoryStorage();
const upload		= multer({ storage: storage });



router.get('/', function (req, res) {
	res.render('../views/index');
});


module.exports = router;