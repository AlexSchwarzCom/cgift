/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/modules/webform_ui/js/webform_ui.js. */
/**
 * @file
 * JavaScript behaviors for Webform UI.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Lock the default actions element by moving it to the table footer (<tfoot>).
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for locking the default actions element by moving
   *   it to the table footer (<tfoot>).
   */
  Drupal.behaviors.webformUiElementsActionsDefault = {
    attach: function (context, settings) {
      $(context).find('[data-drupal-selector="edit-webform-ui-elements-webform-actions-default"]').once('webform-ui-elements-webform-actions-default').each(function () {
        var $tr = $(this);
        var $table = $tr.parents('table');
        $table.append($('<tfoot></tfoot>').append($tr));
      });
    }
  };

})(jQuery, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/modules/webform_ui/js/webform_ui.js. */