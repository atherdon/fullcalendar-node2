/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  var $body = $(document.body);

  // configs setup
  // =============
  $.configs.set('site', {
    fontFamily: "Noto Sans, sans-serif",
    primaryColor: "blue"
  });

  window.Site = $.site.extend({
    run: function(next) {
    

      
        next();
      // }

      // Mega navbar setup
      // =================
      // $(document).on('click', '.navbar-mega .dropdown-menu', function(e) {
      //   e.stopPropagation();
      // });

      // $(document).on('show.bs.dropdown', function(e) {
      //   var $target = $(e.target);
      //   var $trigger = e.relatedTarget ? $(e.relatedTarget) : $target.children('[data-toggle="dropdown"]');

      //   var animation = $trigger.data('animation');
      //   if (animation) {
      //     var $menu = $target.children('.dropdown-menu');
      //     $menu.addClass('animation-' + animation);

      //     $menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      //       $menu.removeClass('animation-' + animation);
      //     });
      //   }
      // });

      // $(document).on('shown.bs.dropdown', function(e) {
      //   var $target = $(e.target);
      //   var $menu = $target.find('.dropdown-menu-media > .list-group');

      //   if ($menu.length > 0) {
      //     var api = $menu.data('asScrollable');
      //     if (api) {
      //       api.update();
      //     } else {
      //       var defaults = $.components.getDefaults("scrollable");
      //       $menu.asScrollable(defaults);
      //     }
      //   }
      // });

      // Two column Sidebar setup
      // ========================
      // $(document).on('click', '.page-aside-switch', function() {
      //   var isOpen = $('.page-aside').hasClass('open');

      //   if (isOpen) {
      //     $('.page-aside').removeClass('open');
      //   } else {
      //     $('.page-aside').addClass('open');
      //   }
      // });

      // Init Loaded Components
      // ======================
      $.components.init();

      // this.startTour();
    },

    // polyfillIEWidth: function() {
    //   if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    //     var msViewportStyle = document.createElement('style');
    //     msViewportStyle.appendChild(
    //       document.createTextNode(
    //         '@-ms-viewport{width:auto!important}'
    //       )
    //     );
    //     document.querySelector('head').appendChild(msViewportStyle);
    //   }
    // },

    // loadAnimate: function(callback) {
    //   return $.components.call("animsition", document, callback);
    // },

    // startTour: function(flag) {
    //   if (typeof this.tour === 'undefined') {
    //     if (typeof introJs === 'undefined') {
    //       return;
    //     }

    //     var tourOptions = $.configs.get('tour'),
    //       self = this;
    //     flag = $('body').css('overflow');
    //     this.tour = introJs();

    //     this.tour.onbeforechange(function() {
    //       $('body').css('overflow', 'hidden');
    //     });

    //     this.tour.oncomplete(function() {
    //       $('body').css('overflow', flag);
    //     });

    //     this.tour.onexit(function() {
    //       $('body').css('overflow', flag);
    //     });

    //     this.tour.setOptions(tourOptions);
    //     $('[data-slug="advanced-tour"]').on('click', function() {
    //       self.tour.start();
    //     });
    //   }
    //   // if (window.localStorage && window.localStorage.getItem('startTour') && (flag !== true)) {
    //   //   return;
    //   // } else {
    //   //   this.tour.start();
    //   //   window.localStorage.setItem('startTour', true);
    //   // }
    // }

  });

})(window, document, jQuery);
