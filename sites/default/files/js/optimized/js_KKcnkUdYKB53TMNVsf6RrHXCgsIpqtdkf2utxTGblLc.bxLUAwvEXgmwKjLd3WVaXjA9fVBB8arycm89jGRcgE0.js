/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/misc/displace.js. */
(function(t,e,i){var o={top:0,right:0,bottom:0,left:0};function n(o,a){var i=t(o),c=document.documentElement,e=0,n=a==='left'||a==='right',r=i.offset()[n?'left':'top'];r-=window['scroll'+(n?'X':'Y')]||document.documentElement['scroll'+(n?'Left':'Top')]||0;switch(a){case'top':e=r+i.outerHeight();break;case'left':e=r+i.outerWidth();break;case'bottom':e=c.clientHeight-r;break;case'right':e=c.clientWidth-r;break;default:e=0};return e};function r(t){var a=0,i=document.querySelectorAll('[data-offset-'+t+']'),c=i.length;for(var r=0;r<c;r++){var o=i[r];if(o.style.display==='none'){continue};var e=parseInt(o.getAttribute('data-offset-'+t),10);if(isNaN(e)){e=n(o,t)};a=Math.max(a,e)};return a};function c(){return{top:r('top'),right:r('right'),bottom:r('bottom'),left:r('left')}};function a(r){o=c();e.displace.offsets=o;if(typeof r==='undefined'||r){t(document).trigger('drupalViewportOffsetChange',o)};return o};e.behaviors.drupalDisplace={attach:function(){if(this.displaceProcessed){return};this.displaceProcessed=!0;t(window).on('resize.drupalDisplace',i(a,200))}};e.displace=a;t.extend(e.displace,{offsets:o,calculateOffset:r})})(jQuery,Drupal,Drupal.debounce);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/misc/displace.js. */