import $ from './jquery'
$(function() {
    var $fixedNavBar = $('#fixed-nav-bar');
    var $titleArrow = $('#title-arrow');

    $('html, body').scrollTop($(document).height() - $(window).height());
    $('#title-name').css('visibility', 'hidden');
    $('#title-desc').css('visibility', 'hidden');
    $titleArrow.css('opacity', '0');
    $fixedNavBar.css('visibility', 'hidden');
    $fixedNavBar.find('ul').css('visibility', 'hidden');
    $fixedNavBar.find('li').css('visibility', 'hidden');
    $fixedNavBar.find('a').css('visibility', 'hidden');

    setTimeout(function () {
        $('#title-name').css('visibility', 'visible').hide().fadeIn();
    }, 500);

    setTimeout(function () {
        $('#title-desc').css('visibility', 'visible').hide().fadeIn();
    }, 1000);

    setTimeout(function () {
        $fixedNavBar.css('visibility', 'visible').hide().fadeIn();
        $fixedNavBar.find('ul').css('visibility', 'visible').hide().fadeIn();
        $fixedNavBar.find('li').css('visibility', 'visible').hide().fadeIn();
        $fixedNavBar.find('a').css('visibility', 'visible').hide().fadeIn();
    }, 1500);

    setTimeout(function () {
        $titleArrow.animate({
            opacity: 1,
            'marginTop': "-=30px"
        }, 800);
    }, 2000);

    $(document).on('click', '.link', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });

    $fixedNavBar.find('.link').click(function () {
        $fixedNavBar.find('.link').removeClass();
        $(this).addClass('active link');
    });

    $titleArrow.click(function () {
        $fixedNavBar.find('.link').removeClass();
        $('#nav-about').addClass('active link');

        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 2000);
    });

    $("#minimalist").click(function () {
        window.open("https://github.com/ellenluo/minimaList");
    });

    $("#screen-off").click(function () {
        window.open("https://github.com/Tyler-Zhang/ScreenOff");
    });

    $("#personal-website").click(function () {
        window.open("https://github.com/ellenluo/personal-website");
    });
});