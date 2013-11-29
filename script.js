$(document).ready(function() {

	// var $w = $(window).width(); // width
	// var $h = $(window).height(); // height

	// var $s = $('#point-one'); // start point element
	// var $e = $('#point-two'); // end point element
	// var $dot = $('.dot'); // dot -- temporary var $for testing purposes
	// var $dId = $dot.attr('id'); // dot id

	// var $xs = Math.round($s.offset().left); // x start location
	// var $xe = Math.round($e.offset().left); // x end location
	// var $ys = Math.round($s.offset().top); // y start location
	// var $ye = Math.round($e.offset().top); // y end location

	// var $dx = Math.abs($xs - $xe); // x distance
	// var $dy = Math.abs($ys - $ye); // y distance
	// var $d = Math.round(Math.sqrt(Math.pow($dx, 2) + Math.pow($dy, 2))); // distance

	// var $t = 700; // total time var
	// var $tb = $t * 0.8; // time before
	// var $ta = $t - $tb; // time after

	// console.log('Starting point is (' + $xs + ',' + $ys + ')');
	// console.log('Ending point is (' + $xe + ',' + $ye + ')');
	// console.log($dx);
	// console.log($dy);
	// console.log($d);

	$("a[href^=#]").click(function(e) {
		e.preventDefault()
		$("html,body").animate({
			scrollTop: Math.round($($(this).attr("href")).offset().top)
		}, 500)
	})

});





