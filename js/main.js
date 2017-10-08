// JavaScript Document

jQuery(document).ready(function ($) {
    "use strict";


    // Add Smooth scroll Plugin to the page. Best effect is reached on Tablets & Smartphones.
    //$("html").niceScroll({cursorborder: "", cursorcolor: "#b46e3c", scrollspeed: 100});
    /* ==============================================
     Full screen div for home video
     =============================================== */
    // global vars
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    // set initial div height / width
    $(".full-screen-block").css({
        'width': winWidth,
        'height': winHeight
    });

    // make sure div stays full width/height on resize
    $(window).on("resize", function () {
        winWidth = $(window).width();
        winHeight = $(window).height();
        $(".full-screen-block").css({
            'width': winWidth,
            'height': winHeight
        });

    });

    /* ==============================================
     Hide navbar on click (Mobile)
     =============================================== */
    var mobileNav = $("#bs-example-navbar-collapse-1");
    $("#bs-example-navbar-collapse-1 ul li a").on("click", function () {
        mobileNav.removeClass("in");
    });

    /* ==============================================
     Hide navbar on click (Mobile)
     =============================================== */
    $(function () {
        $('.navbar-single .dropdown').on("mouseenter", function () {
            $(this).addClass('open');
        });
        $('.navbar-single .dropdown').on("mouseleave", function () {
            $(this).removeClass('open');
        });
    });
    /* ==============================================
     Top Header
     =============================================== */
    //Keep track of last scroll
    var lastScroll = 0;
    var header = $("#header");
    var headerfixed = $("#header-body-fixed");
    $(window).on("scroll", function () {
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll) {

            //Replace this with your function call for downward-scrolling
            if (st > 0) {
                header.addClass("header-top-fixed");
                headerfixed.addClass("header-body-fixed");
                $("#totop").css("display", "block");
            }
        }
        else {
            //Replace this with your function call for upward-scrolling
            if (st < 50) {
                header.removeClass("header-top-fixed");
                headerfixed.removeClass("header-body-fixed");
                $("#totop").css("display", "none");
            }
        }
        //Updates scroll position
        lastScroll = st;

    });

    /* ==============================================
     menu hover open
     =============================================== */

    $(function () {
        $('.dropdown').on("mouseenter", function () {
            $(this).addClass('open');
        });
        $('.dropdown').on("mouseleave", function () {
            $(this).removeClass('open');
        });
    });
    /* ==============================================
     Page Scrolling
     =============================================== */

    $('.navbar-default #navbar-full').singlePageNav({
        currentClass: 'current',
        // Class to add to the list item when the navigation item is selected
        updateHash: true, // If you want the hash to change when the user clicks on the navigation, change this to true
        speed: 750, // Speed to scroll the page when the navigation is clicked
        offset: 60,
        threshold: 120,
        filter: ':not(.external)',
        easing: 'swing'
    });



    $(window).on("load", function () {

        var winWidth = $(window).width();
        var winHeight = $(window).height();
        // set initial div height / width
        $(".full-screen-block").css({
            'width': winWidth,
            'height': winHeight
        });
        /* ==============================================
         Preloader
         =============================================== */
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.


        /* ==============================================
         Company-about Carousel
         =============================================== */
        $("#owl-projects-column-3").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navigation: false
        });
        $(".owl-single-column").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navigation: false
        });
        /* ==============================================
         partners Carousel
         =============================================== */
        $("#owl-partners").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                580: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navigation: false
        });
        /* ==============================================
         partners Carousel
         =============================================== */
        $(".owl-gallery").owlCarousel({
            // Most important owl features
            loop: true,
            margin:0,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navigation: false
        });
        /* ==============================================
         partners Carousel
         =============================================== */
        $(".owl-projects-column-2").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navigation: true
        });


        /* ==============================================
         Revolution slider
         =============================================== */
        var tpj = jQuery;
        var revapi104;
        if (tpj("#rev_slider_104_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_104_1");
        } else {
            revapi104 = tpj("#rev_slider_104_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "js/vendor/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 960,
                        style: "zeus",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 80,
                        v_offset: 50,
                        space: 5,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                    disable_onmobile: "on"
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAlignForce: "on",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false
                }
            });
            var newCall = new Object(),
                    cslide;

            newCall.callback = function () {
                var proc = revapi104.revgetparallaxproc(),
                        fade = 1 + proc,
                        scale = 1 + (Math.abs(proc) / 10);

                punchgs.TweenLite.set(revapi104.find('.slotholder, .rs-background-video-layer'), {opacity: fade, scale: scale});
            };
            newCall.inmodule = "parallax";
            newCall.atposition = "start";

            revapi104.bind("revolution.slide.onloaded", function (e) {
                revapi104.revaddcallback(newCall);
            });
        }


        var revapi112;
        if (tpj(".rev_slider_112_1").revolution == undefined) {
            revslider_showDoubleJqueryError(".rev_slider_112_1");
        } else {
            revapi112 = tpj(".rev_slider_112_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "js/vendor/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 6000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        style: "hermes",
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        direction: "vertical",
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                        space: 5,
                        tmp: ''
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [700, 600, 500, 400],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false
                }
            });


            newCall.callback = function () {
                var proc = revapi112.revgetparallaxproc(),
                        fade = 1 + proc,
                        scale = 1 + (Math.abs(proc) / 10);

                punchgs.TweenLite.set(revapi112.find('.slotholder, .rs-background-video-layer'), {opacity: fade, scale: scale});
            };
            newCall.inmodule = "parallax";
            newCall.atposition = "start";

            revapi112.bind("revolution.slide.onloaded", function (e) {
                revapi112.revaddcallback(newCall);
            });
        }

        var revapi20;
        if (tpj(".rev_slider_second_page_title").revolution == undefined) {
            revslider_showDoubleJqueryError(".rev_slider_second_page_title");
        } else {
            revapi20 = tpj(".rev_slider_second_page_title").show().revolution({
                sliderType: "hero",
                jsFileLocation: "js/vendor/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 4000,
                navigation: {
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [500, 500, 500, 500],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false
                }
            });

        }

        var revapi2;
        if (tpj(".rev_slider_photographi").revolution == undefined) {
            revslider_showDoubleJqueryError(".rev_slider_photographi");
        } else {
            revapi2 = tpj(".rev_slider_photographi").show().revolution({
                sliderType: "carousel",
                jsFileLocation: "js/vendor/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    arrows: {
                        style: "erinyen",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    }
                    ,
                    thumbnails: {
                        style: "gyges",
                        enable: true,
                        width: 60,
                        height: 60,
                        min_width: 60,
                        wrapper_padding: 0,
                        wrapper_color: "transparent",
                        wrapper_opacity: "1",
                        tmp: '<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                        visibleAmount: 5,
                        hide_onmobile: true,
                        hide_under: 800,
                        hide_onleave: false,
                        direction: "horizontal",
                        span: false,
                        position: "inner",
                        space: 5,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20
                    }
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    fadeout: "off",
                    maxVisibleItems: 3,
                    infinity: "on",
                    space: 0,
                    stretch: "off"
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [600, 600, 500, 400],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                },
                shadow: 5,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "on",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }

    });
    /* ==============================================
     Youtube player
     =============================================== */
    $(".bg-youtube").mb_YTPlayer();


    /* ==============================================
     background ticker
     =============================================== */
    $('.fade-ticker:has(>div:eq(1))').list_ticker({
        speed: 5000,
        effect: 'fade'
    });


    /* ==============================================
     Count down time
     =============================================== */
// Daily Deal CountDown Clock Settings
    var date = new Date().getTime();			// This example is just to show how this function works.
    var new_date = new Date(date + 996400000);	// You can set your own time whenever you want.
//    var n = new_date.toUTCString();				// 'date' value is given in milliseconds.
//alert(new_date)
    $(".coming-time").countdown({
        date: new_date,
        yearsAndMonths: true,
        leadingZero: true
    });


    /* ==============================================
     Magnific Popup Initialization
     =============================================== */
    $('.bubble-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom'
    });
    $('.ajax-content').magnificPopup({
        type: 'ajax'

    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    /* ==============================================
     FILTER Portfolio
     =============================================== */
// Clone portfolio items to get a second collection for Quicksand plugin
    var $portfolioClone = $(".portfolio-list").clone();

// Attempt to call Quicksand on every click event handler
    $(".portfolio-filter-title .filter a").on("click", function () {
        $(".portfolio-filter-title .filter li").removeClass("current");

        // Get the class attribute value of the clicked link
        var $filterClass = $(this).parent().attr("class");

        var $filteredPortfolio;

        if ($filterClass === "all") {
            $filteredPortfolio = $portfolioClone.find("li");
        } else {
            $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
        }

        // Call quicksand
        $(".portfolio-list").quicksand($filteredPortfolio, {
            duration: 400,
            easing: 'swing'
        }, function () {

            $('.bubble-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom'
            });
            $('.ajax-content').magnificPopup({
                type: 'ajax'
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false
            });
        });


        $(this).parent().addClass("current");

        // Prevent the browser jump to the link anchor
        return false;
    });

    /* ==============================================
     TO TOP
     =============================================== */
    $('#totop').on("click", function () {
        $('html, body').animate({scrollTop: 0}, '1200');
        return false;
    });

    /* ==============================================
     ANIMATED SKILL BARS
     =============================================== */

    $('.progress-bar').appear(function () {
        var datavl = $(this).attr('data-value');
        $(this).animate({"width": datavl + "%"}, '300');
    });

});


/* ==============================================
 COUNT FACTORS
 =============================================== */
(function ($) {
    $.fn.countTo = function (options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;

        return $(this).each(function () {
            var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof (options.onUpdate) === 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof (options.onComplete) === 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null // callback method for when the element finishes updating
    };
})(jQuery);
$(".fact").appear(function () {
    $('.fact').each(function () {
        dataperc = $(this).attr('data-perc');
        $(this).find('.factor').delay(6000).countTo({
            from: 0,
            to: dataperc,
            speed: 3000,
            refreshInterval: 50
        });
    });
});






/* ==============================================
 WOW Appear
 =============================================== */
new WOW().init();
