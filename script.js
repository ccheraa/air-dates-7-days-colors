'use strict';

(function() {
  jQuery(function() {
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('.soft_f{background-color:#2e9fff}', sheet.cssRules.length);
    sheet.insertRule('.soft_g{background-color:#8a2be2}', sheet.cssRules.length);
    sheet.insertRule('.colors{display:flex;justify-content:flex-start;flex-wrap:wrap}', sheet.cssRules.length);
    $('body').on('click', 'div.entry:not([data-sevened]) div.title', function () {
      var $entry = $(this).parent();
      addColors($entry);
    });

    function addColors($entry) {
      $entry.attr('data-sevened', 'yes');
      var $colors = jQuery('.details .colors .color', $entry[0]);

      if ($colors.length === 6) {
        jQuery('<span class="color soft_f"></span><span class="color soft_g"></span>').insertAfter($colors[$colors.length - 1]);
      }
    }
  });

})();