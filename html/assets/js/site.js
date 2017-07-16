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
     
      $.components.init();

    }


  });

})(window, document, jQuery);
