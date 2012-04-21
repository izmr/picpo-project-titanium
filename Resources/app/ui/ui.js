tt.ui = {};

/**
 * ui.js main logic
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	/**
	 * return top window
	 */
	tt.ui.createApplicationWindow = function()
	{	
		// create top window
		var win = Ti.UI.createWindow({
			title: 'Picpo! top page',
			backgroundColor: '#FFFFFF'
		});
		
		// create tab
		var tab = Ti.UI.createTab({
			window: win
		});
		
		// create tab group
		var tabGroup = Ti.UI.createTabGroup();
		tabGroup.addTab(tab);
		
		// create top view
		win.add(tt.ui.createTitleView(function(image){
			var win = tt.ui.confirm.createWindow(image);
			tab.open(win);
			//win.open();
		}));
		
		// set tabGroup as global variables 
		tt.ui.topTabGroup = tabGroup;
		
		return tabGroup;
	}
	
	/**
	 * show title view
	 * only camera icon
	 */
	tt.ui.createTitleView = function (callback)
	{
		var view = Ti.UI.createView({
			backgroundColor: '#EEE',
			//layout: 'vertical' // 上から順番に並べる
		});
		
		var label = Ti.UI.createLabel({
			text: 'Welcome to Picpo!',
			font: {
				fontSize: 16,
				fontWeight: 'bold'
			},
			width: 'auto',
			color: '#F00',
			height: 'auto',
			top: 100 // relative position(vertical)
			//top: 100 // absolute position
		});
		
		var cameraButton = Ti.UI.createButton({
			title: 'Take a photo',
			width: 200,
			height: 100,
			top: 130
		});
		
		cameraButton.addEventListener('click', function() {
			tt.util.camera.open(callback);
		});
		
		view.add(label);
		view.add(cameraButton);
		
		return view;
	}
	
	/**
	 * create modal window
	 */
	tt.ui.createModalWindow = function (config) {
		config = config || {};// config設定を反映、あるいはdefault
		
		var win = Ti.UI.createWindow({
			barColor: '#333',
			backgroundColor: '#FFF'
		});
		
		var button = Ti.UI.createButton({
			title: "close",
			height: 30,
			width: 150
		});
		
		button.addEventListener('click', function(){
			win.close(); // wrong?
		});
		
		win.leftNavButton = button;
		
		return win;
	}
})();

/**
 * include all uis
 */
Ti.include(
	'/app/ui/register.js',
	'/app/ui/confirm.js',
	'/app/ui/itemSearch.js',
	'/app/ui/searchStart.js'
);