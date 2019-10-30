$(document).ready(function(){

	$('.scroll-button').on("click", function() {
        const $body = $('html, body');

        $body.animate({
            scrollTop: $body.scrollTop() + $(window).height(),
        }, 500);
    });
});