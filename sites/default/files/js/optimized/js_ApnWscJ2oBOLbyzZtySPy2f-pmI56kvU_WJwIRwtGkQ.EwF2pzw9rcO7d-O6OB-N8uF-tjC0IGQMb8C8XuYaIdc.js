/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/admin_toolbar/js/jquery.hoverIntent.js. */
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
;(function(e){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],e)}
else if(jQuery&&!jQuery.fn.hoverIntent){e(jQuery)}})(function(e){'use strict';var f={interval:100,sensitivity:6,timeout:0};var r=0,t,n,i=function(e){t=e.pageX;n=e.pageY},o=function(r,u,e,f){if(Math.sqrt((e.pX-t)*(e.pX-t)+(e.pY-n)*(e.pY-n))<f.sensitivity){u.off(e.event,i);delete e.timeoutId;e.isActive=!0;r.pageX=t;r.pageY=n;delete e.pX;delete e.pY;return f.over.apply(u[0],[r])}
else{e.pX=t;e.pY=n;e.timeoutId=setTimeout(function(){o(r,u,e,f)},f.interval)}},u=function(e,t,n,i){delete t.data('hoverIntent')[n.id];return i.apply(t[0],[e])};e.fn.hoverIntent=function(n,v,a){var s=r++,t=e.extend({},f);if(e.isPlainObject(n)){t=e.extend(t,n);if(!e.isFunction(t.out)){t.out=t.over}}
else if(e.isFunction(v)){t=e.extend(t,{over:n,out:v,selector:a})}
else{t=e.extend(t,{over:n,out:n,selector:v})};var d=function(r){var a=e.extend({},r);var f=e(this),v=f.data('hoverIntent');if(!v){f.data('hoverIntent',(v={}))};var n=v[s];if(!n){v[s]=n={id:s}};if(n.timeoutId){n.timeoutId=clearTimeout(n.timeoutId)};var d=n.event='mousemove.hoverIntent.hoverIntent'+s;if(r.type==='mouseenter'){if(n.isActive){return};n.pX=a.pageX;n.pY=a.pageY;f.off(d,i).on(d,i);n.timeoutId=setTimeout(function(){o(a,f,n,t)},t.interval)}
else{if(!n.isActive){return};f.off(d,i);n.timeoutId=setTimeout(function(){u(a,f,n,t.out)},t.timeout)}};return this.on({'mouseenter.hoverIntent':d,'mouseleave.hoverIntent':d},t.selector)}});
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/admin_toolbar/js/jquery.hoverIntent.js. */