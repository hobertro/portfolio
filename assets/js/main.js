// Section One Scroll Button Begins here

$(".section1-btn").click(function(){
	$window = $(window);
	$height = $window.height();
	$('html, body').animate({
        scrollTop: $height
    }, 1850);
});

$(".section1-btn").hover(function(){
	console.log($(window).height());
});
