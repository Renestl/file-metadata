const express		= require('express');
const router		= express.Router();
const pug			= require('pug');
const multer		= require('multer');
const storage		= multer.memoryStorage();
const upload		= multer({ storage: storage });

const fileSizer		= require('../file/data');

router.route('/filesize').post(upload.single('file'), fileSizer.parse);

router.get('/', function (req, res) {
	res.render('../views/index');
});


// function parse(req, res) {
// 	let fileSize = {
// 		"size": req.file.size
// 	}
// 	res.send(fileSize);
// }

module.exports = router;