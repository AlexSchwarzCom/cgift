/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/colorbox/js/colorbox.js. */
(function(o,i){'use strict';i.behaviors.initColorbox={attach:function(r,i){if(!o.isFunction(o.colorbox)||typeof i.colorbox==='undefined'){return};if(i.colorbox.mobiledetect&&window.matchMedia){var c=window.matchMedia('(max-device-width: '+i.colorbox.mobiledevicewidth+')');if(c.matches){return}};i.colorbox.rel=function(){return o(this).data('colorbox-gallery')};o('.colorbox',r).once('init-colorbox').colorbox(i.colorbox)}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/colorbox/js/colorbox.js. */