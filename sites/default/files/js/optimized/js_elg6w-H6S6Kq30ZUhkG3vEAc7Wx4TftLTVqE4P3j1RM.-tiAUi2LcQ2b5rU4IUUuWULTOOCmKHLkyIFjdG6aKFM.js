/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/pathauto/pathauto.js. */
(function(a){'use strict';Drupal.behaviors.pathFieldsetSummaries={attach:function(t){a(t).find('.path-form').drupalSetSummary(function(t){var r=a('.js-form-item-path-0-alias input',t).val(),i=a('.js-form-item-path-0-pathauto input',t).prop('checked');if(i){return Drupal.t('Automatic alias')}
else if(r){return Drupal.t('Alias: @alias',{'@alias':r})}
else{return Drupal.t('No alias')}})}}})(jQuery);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/pathauto/pathauto.js. */