/*=============================================================
    AuthoR: TC
    Aim: Enables Scrolling ability when a menu button 
         is click both upward or downward
========================================================  */
(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
              CUSTOM LINKS SCROLLING FUNCTION 
             ======================================*/
             
             //The .navbar is class that you must attach to your html nav tag.
            $('.navbar a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///
    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



