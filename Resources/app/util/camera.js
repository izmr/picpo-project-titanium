tt.util.camera = {};

/**
 * tt.util.camera
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	/**
	 * Take a phto you want to add affiliate link
	 * @param {Object} callback
	 */
	tt.util.camera.open = function(callback) {
		Ti.Media.showCamera({
			/**
			 * When your camera show up
			 * @param {Object} event
			 */
			success: function(event) {
				//var image = event.media;
				var image = "/iphone/Default.png";
				callback(image);
			},
			
			/**
			 * When you cannot use your camera
			 * @param {Object} error
			 */
			error: function (error) {				
                //var image = Ti.Filesystem.getFile("/Users/marimofire/workspace/titanium/Sample20120419/Resources/iphone/Default.png");
                //callback(image.read());
                var image = "/iphone/Default.png";
				callback(image);
			},
			cancel: function(event) {},
			saveToPhotoGallery: false,
			allowEditing: true,
			mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	}
})();
