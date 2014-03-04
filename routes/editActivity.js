var data = require('../editActivity.json');

exports.view = function(req, res){
	res.render('editActivity');
};

exports.view2 = function (req, res){
	res.render('editActivity2',data);
};
