tt.ui.register = {};

/**
 * register username and password
 * It may not be required.
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function(){
	tt.ui.register.createWindow = function() {
		var win = tt.ui.createModalWindow({
			title: 'Register'
		});
		
		win.add(tt.ui.register.createView());
		
		return win;
	}
	
	tt.ui.register.createView = function () {
		var view = Ti.UI.createView({
			layout: 'vertical'
		});
		view.add(Ti.UI.createLabel({
			top: 5,
			title: 'aaa'
		}));
		
		var textField1 = Ti.UI.createTextField({
			hintText: 'ID'
		});
		
		var textField2 = Ti.UI.createTextField({
			hintText: 'password'
		});
		
		
		
		view.add(textField1);
		view.add(textField2);
		
		return view;
	}
})();
