// animated heading

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },600);
}

$(document).ready(function(){ 
  autoType(".type-js",160);
});


// Trigger CSS animations on scroll
jQuery(function($) {
	var doAnimations = function() {
		
		var offset = $(window).scrollTop() + $(window).height(),
		$animatables = $('.animatable');

		if ($animatables.length == 0) {
		  $(window).off('scroll', doAnimations);
		}

			$animatables.each(function(i) {
		   var $animatable = $(this);
				if (($animatable.offset().top + $animatable.height() - 20) < offset) {
			$animatable.removeClass('animatable').addClass('animated');
				}
		});

	};
	
	$(window).on('scroll', doAnimations);
	$(window).trigger('scroll');

});  
