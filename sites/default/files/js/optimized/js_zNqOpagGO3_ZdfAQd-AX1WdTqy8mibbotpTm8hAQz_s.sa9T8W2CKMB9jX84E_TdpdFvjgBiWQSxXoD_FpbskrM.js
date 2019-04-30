/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/js/webform.dialog.js. */
/**
 * @file
 * JavaScript behaviors to fix dialogs.
 */

(function ($, Drupal) {

  'use strict';

  // @see http://stackoverflow.com/questions/20533487/how-to-ensure-that-ckeditor-has-focus-when-displayed-inside-of-jquery-ui-dialog
  var _allowInteraction = $.ui.dialog.prototype._allowInteraction;
  $.ui.dialog.prototype._allowInteraction = function (event) {
    if ($(event.target).closest('.cke_dialog').length) {
      return true;
    }
    return _allowInteraction.apply(this, arguments);
  };

})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/js/webform.dialog.js. */