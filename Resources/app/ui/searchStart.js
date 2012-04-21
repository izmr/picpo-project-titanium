tt.ui.searchStart = {};

(function(){
	tt.ui.searchStart.createWindow = function(image){
		var win = Ti.UI.createWindow({
			title: "search start"
		});
		
		win.add(tt.ui.searchStart.createView(image));
		
		return win;
	}
	
	tt.ui.searchStart.createView = function(image) {
		var view = Ti.UI.createView({
			backgroundColor: '#EEE'
		});
		
		var label = Ti.UI.createLabel({
			text: "この写真のアフィリリンクを作る",
			top: 140
		});
		
		var inputForm = Ti.UI.createTextField({
			width: 300,
			top: 160,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		
		var submitButton = Ti.UI.createButton({
			title: "検索",
			top: 200
		});
		
		view.add(tt.ui.searchStart.createImageView(image));
		view.add(label);
		view.add(inputForm);
		view.add(submitButton);
		
		return view;
	}
	
	/**
	 * create camera image view
	 * @param {Object} image
	 */
	tt.ui.searchStart.createImageView = function(image) {
		var view = Ti.UI.createImageView({
			width: 100,
			height: 100,
			top: 30,
			image: image
		});
		
		return view;
	}
})();
