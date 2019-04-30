/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/js/webform.element.codemirror.js. */
(function(e,r){'use strict';r.webform=r.webform||{};r.webform.codeMirror=r.webform.codeMirror||{};r.webform.codeMirror.options=r.webform.codeMirror.options||{};r.behaviors.webformCodeMirror={attach:function(o){if(!window.CodeMirror){return};e(o).find('textarea.js-webform-codemirror').once('webform-codemirror').each(function(){var t=e(this),n=e(this).parents('details:not([open])');n.attr('open','open');e(this).removeAttr('required');var i=e.extend({mode:e(this).attr('data-webform-codemirror-mode'),lineNumbers:!0,viewportMargin:Infinity,readOnly:(e(this).prop('readonly')||e(this).prop('disabled'))?!0:!1,extraKeys:{Tab:function(e){var r=Array(e.getOption('indentUnit')+1).join(' ');e.replaceSelection(r,'end','+element')}}},r.webform.codeMirror.options);var o=CodeMirror.fromTextArea(this,i);n.removeAttr('open');o.on('blur',function(e){o.save()});t.on('change',function(){o.getDoc().setValue(t.val())});t.on('webform:disabled',function(){o.setOption('readOnly',t.is(':disabled'))})});e(o).find('.js-webform-codemirror-runmode').once('webform-codemirror-runmode').each(function(){CodeMirror.runMode(e(this).addClass('cm-s-default').text(),e(this).attr('data-webform-codemirror-mode'),this)})}};function o(r){var t=e(r).parents('.ui-tabs-panel:hidden');t.show();var o=e(r).parents('details:not([open])');o.attr('open','open');r.CodeMirror.refresh();t.hide();o.removeAttr('open')};e(window).on('dialog:aftercreate',function(r,t,n){setTimeout(function(){e('.CodeMirror').each(function(e,r){o(r)})},10)});e(document).on('state:visible state:visible-slide',function(r){var t=e(r.target).parent().find('.js-webform-codemirror');t.parent().find('.CodeMirror').each(function(e,r){setTimeout(function(){o(r)},1)})})})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/js/webform.element.codemirror.js. */