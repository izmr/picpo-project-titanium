tt.model = {};

/**
 * model.js main logic
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function(){
	tt.model.getClient = function(config) {
		config = config || {};
		config.onload = config.onload || function(event){};
		config.onerror = config.onerror || function(event){};
		
		var client = Ti.Network.createHTTPClient({
			onload: config.onload,
			onerror: config.onerror,
			timeout : 5000
		});
		
		return client;
	}
})();

/**
 * include all models
 */
Ti.include(
	'/app/model/config.js',
	'/app/model/itemSearch.js',
	'/app/model/register.js'
);
