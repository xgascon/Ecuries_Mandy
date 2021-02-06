$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active-scroll');
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('navbar-dark');
        } else {
            $('.navbar').removeClass('active-scroll');
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light');
        }
        apparitionWhenVisibleAllAnimations();
        // apparitionWhenVisible('.testscroll1', 'apparition-scale');
        // if (($(window).height()+$(window).scrollTop())>$('.testscroll2').offset().top) {
        //     $('.testscroll2').css( "visibility", "visible" );
        //     $('.testscroll2').addClass('apparition-scale')
        // }
    });
});

// $(function () {
    // var charts = $('.chart');

function apparitionWhenVisible (element, animation) {
    var elements = $(element);
    // console.log(elements.length);
    for (var i = 0, count = elements.length; i < count; i++) {
        // console.log(elements[i])
        if (($(window).height()+$(window).scrollTop())>$(elements[i]).offset().top) {
            $(elements[i]).css( "visibility", "visible" );
            $(elements[i]).addClass(animation);
        }
    }    
}

function apparitionWhenVisibleAllAnimations () {
apparitionWhenVisible('.apparition-bright', 'apparition-bright-animation');
apparitionWhenVisible('.apparition-scale', 'apparition-scale-animation');
apparitionWhenVisible('.apparition-scale-1', 'apparition-scale-1-animation');
apparitionWhenVisible('.apparition-scale-2', 'apparition-scale-2-animation');
apparitionWhenVisible('.apparition-scale-3', 'apparition-scale-3-animation');
apparitionWhenVisible('.apparition-bottom', 'apparition-bottom-animation');
apparitionWhenVisible('.apparition-right-1', 'apparition-right-1-animation');
apparitionWhenVisible('.apparition-right-2', 'apparition-right-2-animation');
apparitionWhenVisible('.apparition-bottom-1', 'apparition-bottom-1-animation');
apparitionWhenVisible('.apparition-bottom-2', 'apparition-bottom-2-animation');
apparitionWhenVisible('.apparition-bottom-3', 'apparition-bottom-3-animation');
apparitionWhenVisible('.yellow-underline', 'bg-100');
}

apparitionWhenVisibleAllAnimations ()

    // function animateChartWhenVisible (chart) {
    //     for (var i = 0, count = chart.length; i < count; i++) {
    //         if (isVisible(chart[i])) {
    //             $(chart[i]).addClass();
    //         }
    //     }
    // }

// });

// if (($(window).height()+$(window).scrollTop())>$('.testscroll2').offset().top) {
//     $('.testscroll2').css( "visibility", "visible" );
//     $('.testscroll2').addClass('apparition-scale');
// }