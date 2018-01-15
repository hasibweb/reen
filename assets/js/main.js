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
        searchFun();
        heroSlider();
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
    // ========================== searchFun ==========================
    function searchFun() {
        var searchControl = $('#search-control');
        var searchInput = $('#search-control .search-input');
        var searchBtn = $('#search-control .search-btn');

        searchBtn.click(function () {
            searchInput.toggleClass('show');
        })

        searchControl.submit(function () {
            return false;
        })

    }
    // Scroll Top Animation
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    // ========================== heroSlider ==========================
    function heroSlider() {
        var slider = $('.hero-slider');


        slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 548,
            nav: true,
            dots: true,
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'bounceInLeft'

        })

        // Slider Layer Animation
        $('[data-animation]').each(function () {
            var className = $(this).attr('data-animation');
            $(this).addClass(className + ' animated')
        })

        slider.on('translate.owl.carousel', function () {
            var layer = $(this).find('[data-animation]');
            layer.each(function () {
                var animateVal = $(this).attr('data-animation');
                $(this).removeClass(animateVal + ' animated').css('opacity', '0');

            })


        })
        slider.on('translated.owl.carousel', function () {
            var layer = $(this).find('.owl-item.active').find('[data-animation]');
            layer.each(function () {
                var animateVal = $(this).attr('data-animation');
                $(this).addClass(animateVal + ' animated').css('opacity', '1');

            })

        })
    }



})(jQuery); // End of use strict