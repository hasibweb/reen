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
        stickyHeader();
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
        var slider = $('#heroSlider');
        // Slider Activation
        slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 548,
            nav: true,
            dots: true,
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeInRight',
            onTranslate: translateAnim,
            onTranslated: translatedAnim

        })


        // Add Animation Globaly
        slider.find('[data-animation]').each(function () {
            var animation = $(this).data('animation');
            $(this).addClass(animation + ' animated')
        })

        // Animation Duration
        slider.find('[data-duration]').each(function () {
            var duration = $(this).data('duration');
            $(this).css('animation-duration', duration);
        })

        // Animation Dealy
        slider.find('[data-delay]').each(function () {
            var delay = $(this).data('delay');
            $(this).css('animation-delay', delay);
        })

        // Translate Animation
        function translateAnim(event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).removeClass(animation + ' animated').css('opacity', '0');
            })

        }
        // TranslateD Animation
        function translatedAnim(event) {

            var layer = $(event.target).find('.owl-item.active').find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated').css('opacity', '1');
            })
        }



    } //Hero Slider


    // Sticky Header
    function stickyHeader() {
        var sticky = $('.primary-nav');

        if (typeof sticky !== "undefined") {
            var stickyOffset = sticky.offset().top,
                win = $(window),
                stickyHeight = sticky.outerHeight();

            // Controll The Jumping Behavour
            sticky.wrap('<div class="sticky-wrap"></div>');
            $('.sticky-wrap').height(stickyHeight);

            // Fixed the position
            win.on('scroll', function () {
                var scrollPos = win.scrollTop();

                if (scrollPos >= stickyOffset) {
                    sticky.addClass('sticky-nav');
                } else {
                    sticky.removeClass('sticky-nav');
                }
            })

        }
    }



})(jQuery); // End of use strict