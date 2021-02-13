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
    });
});

function apparitionWhenVisible (element, animation) {
    var elements = $(element);
    for (var i = 0, count = elements.length; i < count; i++) {
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
apparitionWhenVisible('.apparition-left-1', 'apparition-left-1-animation');
apparitionWhenVisible('.apparition-left-2', 'apparition-left-2-animation');
apparitionWhenVisible('.apparition-right-1', 'apparition-right-1-animation');
apparitionWhenVisible('.apparition-right-2', 'apparition-right-2-animation');
apparitionWhenVisible('.apparition-right-3', 'apparition-right-3-animation');
apparitionWhenVisible('.apparition-bottom-1', 'apparition-bottom-1-animation');
apparitionWhenVisible('.apparition-bottom-2', 'apparition-bottom-2-animation');
apparitionWhenVisible('.apparition-bottom-3', 'apparition-bottom-3-animation');
apparitionWhenVisible('.yellow-underline', 'yellow-underline--bg-size');
}

apparitionWhenVisibleAllAnimations ()

function stages__description__buttons (buttonToClick, content) {
    document.getElementById(buttonToClick).addEventListener("click", function () {
        let stages__description__div = document.getElementById('stages__description__div');
        let description__text = document.getElementById('stages__description__div__text');
        
        stages__description__div.removeChild(description__text);
        let newDescription__text = document.createElement('p');
        newDescription__text.innerHTML = content;
        newDescription__text.className = "scroll-apparition apparition-bright";
        newDescription__text.id = "stages__description__div__text";
    
        stages__description__div.appendChild(newDescription__text);
    
        apparitionWhenVisibleAllAnimations ();
    });
}

function animateStagesButtonsDescription (stages__button) {
    var stages__buttons = $(stages__button);
    for (var i = 1, count = stages__buttons.length ; i <= count; i++) {
        stages__description__buttons('stages__button--'+i, document.getElementById('stages__description__text--'+i).innerHTML);
    }
}

animateStagesButtonsDescription('.stages__elements__ribbon');

$(function () {
    jQuery('.preloader').fadeOut(1000)
})
