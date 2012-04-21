tt.ui.comment = {};

(function(){
	tt.ui.comment.isNotTouchedYet = true;
	
	tt.ui.comment.createWindow = function(itemImageContainer) {
		tt.ui.comment.win = Ti.UI.createWindow({
			//layout: 'vertical'
		});
		tt.ui.comment.blankCoverView = tt.ui.comment.createBlankCoverView();
		
		var loginView = tt.ui.comment.createFacebookLoginView();
		
		tt.ui.comment.win.add(loginView);
		
		tt.ui.comment.win.add(tt.ui.comment.createCommentView(itemImageContainer));
		
		if ( Ti.Facebook.loggedIn ) {
			tt.ui.comment.uncoverComment();
		} else {
			tt.ui.comment.coverComment();
		}
		// test
		loginView.addEventListener('click', function(){
			win.remove(tt.ui.comment.blankCoverView);
		})
		
		return tt.ui.comment.win;
	}
	
	tt.ui.comment.coverComment = function(){
		tt.ui.comment.win.add(tt.ui.comment.blankCoverView);
	}
	
	tt.ui.comment.uncoverComment = function(){
		tt.ui.comment.win.remove(tt.ui.comment.blankCoverView);
	}
	
	tt.ui.comment.createFacebookLoginView = function() {
		var view = Ti.UI.createView({
			width: 'auto',
			height: 50,
			top: 0,
			backgroundColor: '#EEE'
		});
		
		tt.ui.comment.userNameLabel = Ti.UI.createLabel({
			text: '',
			left: 10
		});
		
		var facebookLoginButton = Ti.Facebook.createLoginButton({
			right: 10,
			top: 20
		});
		view.add(facebookLoginButton);
		view.add(tt.ui.comment.userNameLabel);
		
		// switch the view with logged in condition
		tt.ui.comment.changeUserNameLabel();
		Ti.Facebook.addEventListener('login', function(e){
			tt.ui.comment.uncoverComment();
			tt.ui.comment.changeUserNameLabel();
		});
		Ti.Facebook.addEventListener('logout', function(e){
			tt.ui.comment.coverComment();
			tt.ui.comment.userNameLabel.setText('');
		});
		
		// view.add(Ti.UI.createLabel({text: 'Facebook Login'}));
		
		return view;
	}
	
	tt.ui.comment.changeUserNameLabel = function() {
		if ( Ti.Facebook.loggedIn ) {
			tt.model.facebook.getUserInfo(function(userInfo){
				tt.ui.comment.userNameLabel.setText("Name: " + userInfo.name);
			});
		}
	}
	
	/**
	 * itemImageContainer{
	 * 		image: {Titunium.blob},
	 * 		item: {Object},
	 * 		comment: ''
	 * }
	 * @param {Object} itemImageContainer
	 */
	tt.ui.comment.createCommentView = function(itemImageContainer){
		var view = Ti.UI.createView({
			width: 'auto',
			height: 'auto',
			top: 50,
			backgroundColor: '#EEE'
		});
		
		var imageView = Ti.UI.createImageView({
			image: itemImageContainer.image,
			width: 50,
			height: 50,
			top: 20,
			left: 20
		})
		
		var itemNameLabel = Ti.UI.createLabel({
			text: itemImageContainer.item.itemName,
			width: 'auto',
			top: 30,
			left: 100,
			font: {
				size: 12
			}
		});
		
		var commentTextArea = Ti.UI.createTextArea({
			value: "[ここにコメントを記入]",
			width: 300,
			height: 100,
			top: 100
		});
		
		commentTextArea.addEventListener('focus', function(){
			if ( tt.ui.comment.isNotTouchedYet ) {
				tt.ui.comment.isNotTouchedYet = false;
				commentTextArea.setValue('');
			}
		})
		
		var submitButton = Ti.UI.createButton({
			title: "投稿",
			width: 50,
			height: 30,
			top: 210,
			right: 10
		});
		
		view.add(imageView);
		view.add(itemNameLabel);
		view.add(commentTextArea);
		view.add(submitButton);
				
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
