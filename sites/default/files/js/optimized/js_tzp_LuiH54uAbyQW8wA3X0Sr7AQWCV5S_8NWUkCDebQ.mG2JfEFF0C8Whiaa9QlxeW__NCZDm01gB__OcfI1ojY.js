/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/js/webform.admin.js. */
(function(t,e){'use strict';e.behaviors.webformFilterAutocomplete={attach:function(e){t('.webform-filter-form input.form-autocomplete',e).once('webform-autocomplete').each(function(){if(/\(([^)]+)\)$/.test(this.value)){this.value=this.defaultValue};t(this).bind('autocompleteselect',function(e,r){if(r.item){t(this).val(r.item.value);this.form.submit()}})})}};e.behaviors.webformTableRowHref={attach:function(e){t('.webform-results__table',e).once('webform-results-table').click(function(e){if(e.target.tagName==='A'||e.target.tagName==='BUTTON'){return!0};if(t(e.target).parents('a[href]').length){return!0};var r=t(e.target).parents('tr[data-webform-href]');if(!r.length){return!0};window.location=r.attr('data-webform-href');return!1})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/js/webform.admin.js. */