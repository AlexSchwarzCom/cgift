/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/js/webform.form.tabs.js. */
(function(o,a){'use strict';a.webform=a.webform||{};a.webform.formTabs=a.webform.formTabs||{};a.webform.formTabs.options=a.webform.formTabs.options||{hide:!0,show:!0};a.behaviors.webformFormTabs={attach:function(t){if(location.hash){var e=o('a[href="'+location.hash+'"]').data('tab-index');if(e!==undefined){a.webform.formTabs.options.active=e;location.hash=''}};o(t).find('div.webform-tabs').once('webform-tabs').each(function(){var e=o(this),r=jQuery.extend({},a.webform.formTabs.options);var t=e.attr('data-tab-active');if(t){r.active=o('a[href="#'+t+'"]').data('tab-index')};e.tabs(r)})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/js/webform.form.tabs.js. */