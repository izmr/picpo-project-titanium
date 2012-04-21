tt.model.register = {};

/**
 * register model.
 * It will connect to register API but it's not available.'
 * It may not be required.
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	/**
	 * Send register api
	 */
	tt.model.register.add = function (config) {
		config = config || {};
		
		tt.model.request(
			'http://localhost/proxy/index.php/userapi/user/add'
		);
	}
})();
