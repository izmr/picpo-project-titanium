tt.ui.itemSearch = {};

/**
 * 
 *
 * @author YUya, Kakui <y.kakui@gmail.com>
 */
(function(){
    tt.ui.itemSearch.createWindow = function(image) {
        var win = tt.ui.createModalWindow({
            title: 'Item Search',
            layout: 'vertical'
        });

		win.add(tt.ui.itemSearch.createTopView(image));
        win.add(tt.ui.itemSearch.createSearchView());

        return win;
    }
    
    /**
     * show affiliate information
     * if some items is choiced, this information will be changed.
     */
    tt.ui.itemSearch.createTopView = function (image) {
    	var view = Ti.UI.createView({
    		height: 'auto',
    		width: 'auto',
    		top: 0
    	});
    	
    	var label = Ti.UI.createLabel({
			text: "[商品名がここに入る]",
			width: 'auto',
			height: 20,
			left: 100,
			top: 50,
			font: {
				fontColor: '#111'
			}
		});
		
		// set iten name label as a global variables
		tt.ui.itemSearch.itemNameLabel = label;
		
		view.add(label);
    	
    	view.add(tt.ui.itemSearch.createImageView(image));
    	
    	return view;
    }
    
	/**
	 * create camera image view
	 * @param {Object} image
	 */
	tt.ui.itemSearch.createImageView = function(image) {
		var view = Ti.UI.createImageView({
			width: 60,
			height: 60,
			top: 20,
			left: 30,
			image: image
		});
		
		return view;
	}

	/**
	 * search view
	 */
    tt.ui.itemSearch.createSearchView = function () {
        var view = Ti.UI.createScrollView({
            layout: 'vertical',
            top:100,
 //           height: 'auto',
   //         width: 'auto',
            showVerticalScrollIndicator:true,
        	contentWidth:'auto',
    		contentHeight:'auto'
        });
        
        view.add(tt.ui.itemSearch.createSearchBar());
        view.add(tt.ui.itemSearch.createSearchResultView());

        return view;
    }
    
    tt.ui.itemSearch.createSearchResultView = function() {
    	var scrollView = Ti.UI.createScrollView({
    		layout: 'vertical',
            showVerticalScrollIndicator:true,
        	contentWidth:'auto',
    		contentHeight:'auto'
    	});
    	
    	['商品名１'].forEach(function(itemName){
        	scrollView.add(tt.ui.itemSearch.createItemView(itemName));
        });
        
        tt.ui.itemSearch.searchView = scrollView;
        
        return scrollView;
    }
    
    tt.ui.itemSearch.createItemView = function(itemName) {
    	var itemView = Ti.UI.createView({
        	height: 50,
        	width: 'auto',
        	top: 5
        });
        
        var itemNameLabel = Ti.UI.createLabel({
        	text: itemName,
        	width: 'auto',
        	left: 10
        });
        
        itemView.add(itemNameLabel);
        
        itemView.addEventListener('click', function(){
        	tt.ui.itemSearch.itemNameLabel.setText(itemName);
        });
        
        return itemView;
    }
    
    tt.ui.itemSearch.createSearchBar = function () {
    	var searchBar = Titanium.UI.createSearchBar({
	        barColor:'#000', 
	        showCancel:true,
	        height:40,
		});
		
		searchBar.addEventListener('return', function(event){
			var model = tt.model.itemSearch.createModel(event.value);
			model.load(function(json){
				var items = json.Body.ItemSearch.Items.Item;
				items.forEach(function(item){
					tt.ui.itemSearch.searchView.add(tt.ui.itemSearch.createItemView(item.itemName));
				});
			});
			searchBar.blur();
		});
		// cancelボタンクリック時イベント
		searchBar.addEventListener('cancel', function(e){
		        searchBar.blur();
		});
		
		return searchBar;
    }
})();
