module.exports = {
	parse: function(req, res){
		let fileSize = {
			"size": req.file.size
		}
	
	res.send(fileSize);
	}
}