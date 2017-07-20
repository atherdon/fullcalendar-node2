

$.components.register("datepicker", {
  mode: "default",
  defaults: {
    autoclose: true
  }
});


$.components.register("sweetalert", {
  mode: "api",
  api: function() {
    if (typeof swal === "undefined") return;

    var defaults = $.components.getDefaults("sweetalert");

    $(document).on('click.site.sweetalert', '[data-plugin="sweetalert"]', function() {
      var options = $.extend(true, {}, defaults, $(this).data());

      swal(options);
    });
  }
});


$.components.register("buttons", {
  mode: "api",
  defaults: {},
  api: function() {
    $(document).on('click.site.loading', '[data-loading-text]', function() {
      var $btn = $(this),
        text = $btn.text(),
        i = 20,
        loadingText = $btn.data('loadingText');

      $btn.text(loadingText + '(' + i + ')').css('opacity', '.6');

      var timeout = setInterval(function() {
        $btn.text(loadingText + '(' + (--i) + ')');
        if (i === 0) {
          clearInterval(timeout);
          $btn.text(text).css('opacity', '1');
        }
      }, 1000);
    });

    $(document).on('click.site.morebutton', '[data-more]', function() {
      var $target = $($(this).data('more'));
      $target.toggleClass('show');
    });
  }
});


$.components.register("filterable", {
  mode: "init",
  defaults: {
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  },
  init: function(context) {
    if (typeof $.fn.isotope === "undefined") return;

    var defaults = $.components.getDefaults('filterable');

    var callback = function() {
      $('[data-filterable]', context).each(function() {
        var $this = $(this);

        var options = $.extend(true, {}, defaults, $this.data(), {
          filter: '*'
        });

        $this.isotope(options);
      });

      $('[data-filter]', context).click(function() {
        var $this = $(this);
        var target = $this.data('target');
        var $li = $this.parent('li');

        if (!target) {
          target = $this.attr('href');
          target = target && target.replace(/.*(?=#[^\s]*$)/, '');
        }

        $li.siblings('.active').each(function() {
          $(this).find('a').attr('aria-expanded', false);
          $(this).removeClass('active');
        });

        $li.addClass('active');
        $this.attr('aria-expanded', true);

        var $list = $(target, context);
        var filter = $this.attr('data-filter');
        if (filter !== '*') {
          filter = '[data-type="' + filter + '"]';
        }
        $list.isotope({
          filter: filter
        });

        return false;
      });
    }

    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});

$.components.register("formatter", {
  mode: "init",
  defaults: {
    persistent: true
  },

  init: function(context) {
    if (!$.fn.formatter) return;

    var defaults = $.components.getDefaults("formatter"),
      browserName = navigator.userAgent.toLowerCase(),
      ieOptions;

    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
      ieOptions = {
        persistent: false
      };
    } else {
      ieOptions = {};
    }

    $('[data-plugin="formatter"]', context).each(function() {

      var options = $.extend({}, defaults, ieOptions, $(this).data());
      if (options.pattern) {
        options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
      }
      $(this).formatter(options);
    });
  }
});



$.components.register("placeholder", {
  mode: "init",
  init: function(context) {
    if (!$.fn.placeholder) return;

    $('input, textarea', context).placeholder();
  }
});



$.components.register("timepicker", {
  mode: "default",
  defaults: {}
});


$.components.register("matchHeight", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof $.fn.matchHeight === "undefined") return;
    var defaults = $.components.getDefaults('matchHeight');

    $('[data-plugin="matchHeight"]', context).each(function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data()),
        matchSelector = $this.data('matchSelector');

      if (matchSelector) {
        $this.find(matchSelector).matchHeight(options);
      } else {
        $this.children().matchHeight(options);
      }

    });
  }
});

