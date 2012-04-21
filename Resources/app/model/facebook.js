tt.model.facebook = {};

(function(){
	Ti.Facebook.appid = config.facebook.appid;
	Ti.Facebook.permissions = config.facebook.permissions;
	
	tt.model.facebook.getUserInfo = function (callback) {
		Ti.Facebook.requestWithGraphPath(
			'me',
			{},
			"GET",
			function(e) {
				if (e.success) {
					callback(JSON.parse(e.result));
				} else {
					callback({});
				}
			}
	    );
	}
})();
