var data = require('../blockedNotification.json');

exports.view = function(req, res){
	res.render('blocknotifications', {'blockednotification' : data});
};

