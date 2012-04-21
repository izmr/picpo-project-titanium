tt.ui.confirm = {};

/**
 * confirm images
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function(){
	/**
	 * create confirm window
	 * that has one image, OK button, NG button
	 * 
	 * @param {Object} image
	 */
	tt.ui.confirm.createWindow = function(image) {
		var win = Ti.UI.createWindow({
			title: 'Camera image confirmation'
		});
		
		// add view
		win.add(tt.ui.confirm.createView(image));
		
		return win;
	}
	
	/**
	 * create confirm view
	 */
	tt.ui.confirm.createView = function(image) {
		var view = Ti.UI.createView({
			backgroundColor: '#EEE'
		});
		
		// confirmation sentence
		var label = Ti.UI.createLabel({
			text: 'この写真でいい？',
			font: {
				fontSize: 16,
				fontWeight: 'bold'
			},
			//width: 500,
			height: 'auto',
			top: 20
		});
		
		// the camera image
		var imageView = tt.ui.confirm.createImageView(image);
		
		// the ng button
		var ngButton = Ti.UI.createButton({
			title: "NG",
			top: 270,
			left: 100
		});
		
		// return to camera window
		ngButton.addEventListener('click', function(){
			Ti.UI.currentTab.close();
		});
		
		// the ok button
		var okButton = Ti.UI.createButton({
			title: "OK",
			top: 270,
			right: 100
		});
		
		// go to search page
		okButton.addEventListener('click', function(){
			var nextWin = tt.ui.itemSearch.createWindow(image);
			tt.ui.topTabGroup.getActiveTab().open(nextWin);
		});
		
		view.add(label);
		view.add(imageView);
		view.add(ngButton);
		view.add(okButton);
		
		return view;
	} 
	
	/**
	 * create camera image view
	 * @param {Object} image
	 */
	tt.ui.confirm.createImageView = function(image) {
		var view = Ti.UI.createImageView({
			width: 200,
			height: 200,
			top: 50,
			image: image
		});
		
		return view;
	}
})();
