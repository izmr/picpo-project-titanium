tt.ui.comment = {};

(function(){
	tt.ui.comment.createWindow = function() {
		var win = Ti.UI.createWindow({
			//layout: 'vertical'
		});
		
		win.add(tt.ui.comment.createFacebookLoginView());
		
		win.add(tt.ui.comment.createCommentView());
		win.add(tt.ui.comment.createBlankCoverView());
		
		return win;
	}
	
	tt.ui.comment.createFacebookLoginView = function() {
		var view = Ti.UI.createView({
			width: 'auto',
			height: 50,
			top: 0,
			backgroundColor: '#EEE'
		});
		
		view.add(Ti.UI.createLabel({text: 'aaaaa'}));
		
		return view;
	}
	
	tt.ui.comment.createCommentView = function(){
		var view = Ti.UI.createView({
			width: 'auto',
			height: 'auto',
			top: 50,
			backgroundColor: '#EEE'
		});
		
		view.add(Ti.UI.createLabel({text: 'bbbbb'}));
		
		return view;
	}
	
	tt.ui.comment.createBlankCoverView = function() {
		var view = Ti.UI.createView({
			width: 'auto',
			height: 'auto',
			top: 50,
			opacity: 0.5,
			backgroundColor: "#666"
		});
		
		return view;
	}
})();
