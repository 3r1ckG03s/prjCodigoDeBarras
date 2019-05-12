// This is a JavaScript file

var sound = new Audio("audio/barcode.wav");

$(document).ready(function() {

	barcode.config.start = 0.1;
	barcode.config.end = 0.9;
	barcode.config.video = '#barcodevideo';
	barcode.config.canvas = '#barcodecanvas';
	barcode.config.canvasg = '#barcodecanvasg';
	barcode.setHandler(function(barcode) {
		$('#result').html(barcode);
	});
	barcode.init();

	$('#result').bind('DOMSubtreeModified', function(e) {
		sound.play();	
	});

});