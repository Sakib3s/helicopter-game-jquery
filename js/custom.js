$(document).ready(function(){

    // CSS Background
    $('.main-area').css('background-image', 'url(img/bg.png)');

    // Game Start

    $(document).click(function(){
        $('.game-start').slideUp();
    });

    // Move Helicopter Left Right
    $( ".button-area #right" ).on( "click", function() {
        $( "#helicopter" ).animate({ "left": "+=50px" }, "slow" );

        $("#helicopter").addClass('right-img');
        $("#helicopter").removeClass('left-img');
    });
    
    $( ".button-area #left" ).on( "click", function(){
        $( "#helicopter" ).animate({ "left": "-=50px" }, "slow" );
        $("#helicopter").addClass('left-img');
        $("#helicopter").removeClass('right-img');
    });

    // Move Helicopter Top Bottom
    $( ".button-area #top" ).on( "click", function() {
        $( "#helicopter" ).animate({ "top": "-=50px" }, "slow" );
    });
    
    $( ".button-area #bottom" ).on( "click", function(){
        $( "#helicopter" ).animate({ "top": "+=50px" }, "slow" );
    });

    //
    $(document).keydown(function(e){
        switch (e.which){
        case 37:    //left arrow key
            $("#helicopter").finish().animate({
                left: "-=50"
            });
            $("#helicopter").addClass('left-img');
            $("#helicopter").removeClass('right-img');
            break;
        case 38:    //up arrow key
            $("#helicopter").finish().animate({
                top: "-=50"
            });
            break;
        case 39:    //right arrow key
            $("#helicopter").finish().animate({
                left: "+=50"
            });
            $("#helicopter").addClass('right-img');
            $("#helicopter").removeClass('left-img');
            break;
        case 40:    //bottom arrow key
            $("#helicopter").finish().animate({
                top: "+=50"
            });
            break;
        }
    });

});