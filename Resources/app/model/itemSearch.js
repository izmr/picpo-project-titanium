tt.model.itemSearch = {};

/**
 * item_search 
 *
 * @author Yuya, Kakui <y.kakui@gmail.com>
 */
(function(){
    /**
     * send 
     */
    tt.model.itemSearch.createModel = function (keyword) {
    	var model = function(keyword) {
	        this.url = tt.model.config.itemSearch.baseUrl
	               + '?developerId=' + tt.model.config.itemSearch.developerId
	               + '&operation=' + tt.model.config.itemSearch.operation
	               + '&version=' + tt.model.config.itemSearch.version
	               + '&keyword=' + keyword;
	               
	       	this.load = function(callback) {
	       		var client = Ti.Network.createHTTPClient({
	       			onload: function(event){
	       				var json = JSON.parse(this.responseText);
	       				callback(json);
	       			},
	       			onerror: function(event) {
	       				callback({});	
	       			},
	       			timeout : 5000
	       		});
	       		
	       		client.open("GET", this.url);
	       		client.send();
	       	}
       };
       
       return new model(keyword);
    }
})();
