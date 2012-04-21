tt = {}; // Top level namespace
config = {}; // Global config namespace

/**
 * main logic
 * @author Izumori Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	tt.login = {data:null};
	tt.login.setData = function(data) {
		
	};
	tt.login.getData = function() {
		
	};
})();

/**
 * include all libraries
 */
Ti.include(
	'/lib/core.js',
	'/app/config.js',
	'/app/model/model.js',
	'/app/util/util.js',
	'/app/ui/ui.js',
	'/lib/ui/ui.js'
);
