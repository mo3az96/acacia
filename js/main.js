

$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
    });
});
$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            500: {
                items: 3,
                dots: true,
                nav: false,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    /////////Brands Slider/////////
    $('.brand-slider').owlCarousel({
        items: 7,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
            },
            500: {
                items: 4,
                dots: true,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            }
        }
    });

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot, .foot-desc").addClass("mo-panel");



        $('.mo-menu-icon').click(function () {
            $(".navbar-cont").fadeIn(400);
            $(".lang").addClass("lang-xs");
            $(".nav-xs").addClass("nav-xs-act");
            $("body").addClass("overflow");
        });

        $('.navbar-cont').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".lang").removeClass("lang-xs");
            $(".nav-xs").removeClass("nav-xs-act");
            $("body").removeClass("overflow");
        });
        $('.nav-xs').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".lang").removeClass("lang-xs");
            $(".nav-xs").removeClass("nav-xs-act");
            $("body").removeClass("overflow");
        });
    }

    $('.mo-search-icon').click(function () {
        $(".search-cont").fadeToggle(400);
        $(".mo-search-icon").toggleClass("search-open");
        $('.search-input').focus();
        if ($(window).width() <= 767) {
            $('.overlay').fadeIn("300");
        }
    });
    $('.megamenu-link').click(function () {
        $(this).toggleClass("link-active");
        $('.mega-menu').toggleClass("open");
        $('.overlay').fadeToggle("300");
        $("body").toggleClass("overflow");
        if ($(window).width() <= 991) {
            $(this).removeClass("link-active");
            $('.mega-menu').removeClass("open");
            $('.overlay').fadeOut("300");
            $("body").addClass("overflow");
            $('.mega-menu').slideToggle("300");
        }
    });
    $('.overlay').click(function () {
        $('.megamenu-link').removeClass("link-active");
        $('.mega-menu').removeClass("open");
        $('.overlay').fadeOut("300");
        $("body").removeClass("overflow");
        if ($(window).width() <= 991) {
            $(".search-cont").fadeOut(400);
            $(".mo-search-icon").removeClass("search-open");
        }
    });

    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    });
});