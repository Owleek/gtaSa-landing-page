$(document).ready(function(){
    const $scrollButton = $(".scroll-button");
    const overlay = $(".overlay");

    overlay.on("click", function(){
        $(this).hide();
    })

	$scrollButton.on("click", function() {
        const $body = $('html, body');

        $body.animate({
            scrollTop: $body.scrollTop() + $(window).height(),
        }, 500);
    });
});


function showOverlay() {
    $(".overlay").show();
}