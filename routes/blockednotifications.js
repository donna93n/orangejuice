var data = require('../blockedNotification.json');

exports.view = function(req, res){
	console.log(data);
	res.render('blockednotifications',data);
};

