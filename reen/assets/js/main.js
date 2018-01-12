(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	
    ===========================================================*/
    /* ================================================
       Script Initialization
  ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
    });

    // Document Ready Function
    $(document).ready(function () {
        portfolioSlider();
    });

    // Window Resize Function
    $(window).on('resize', function () {

    });

    // Window Scroll Function
    $(window).on('scroll', function () {

    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    } // preloaderSetup

    // ========================== portfolioSlider ==========================
    function portfolioSlider() {
        $('.wi-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            smartSpeed: 1148,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    }

})(jQuery); // End of use strict