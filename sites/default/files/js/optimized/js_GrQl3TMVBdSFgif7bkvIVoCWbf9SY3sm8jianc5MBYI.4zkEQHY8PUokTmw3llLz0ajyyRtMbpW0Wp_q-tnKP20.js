/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/misc/dialog/dialog.js. */
(function(o,e,t){t.dialog={autoOpen:!0,dialogClass:'',buttonClass:'button',buttonPrimaryClass:'button--primary',close:function(o){e.dialog(o.target).close();e.detachBehaviors(o.target,null,'unload')}};e.dialog=function(n,i){var l=void 0,a=o(n),e={open:!1,returnValue:l};function r(n){n=o.extend({},t.dialog,i,n);o(window).trigger('dialog:beforecreate',[e,a,n]);a.dialog(n);e.open=!0;o(window).trigger('dialog:aftercreate',[e,a,n])};function d(t){o(window).trigger('dialog:beforeclose',[e,a]);a.dialog('close');e.returnValue=t;e.open=!1;o(window).trigger('dialog:afterclose',[e,a])};e.show=function(){r({modal:!1})};e.showModal=function(){r({modal:!0})};e.close=d;return e}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/misc/dialog/dialog.js. */