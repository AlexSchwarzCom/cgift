/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/libraries/superfish/superfish.js. */
(function(s){s.fn.superfish=function(i){var a=s.fn.superfish,n=a.c,t=s(['<span class="',n.arrowClass,'"> &#187;</span>'].join('')),e=function(){var a=s(this),n=l(a);clearTimeout(n.sfTimer);a.showSuperfishUl().siblings().hideSuperfishUl()},o=function(){var i=s(this),o=l(i),n=a.op;clearTimeout(o.sfTimer);o.sfTimer=setTimeout(function(){if(i.children('.sf-clicked').length==0){n.retainPath=(s.inArray(i[0],n.$path)>-1);i.hideSuperfishUl();if(n.$path.length&&i.parents(['li.',n.hoverClass].join('')).length<1){e.call(n.$path)}}},n.delay)},l=function(s){var i=s.parents(['ul.',n.menuClass,':first'].join(''))[0];a.op=a.o[i.serial];return i},h=function(s){s.addClass(n.anchorClass).append(t.clone())};return this.each(function(){var f=this.serial=a.o.length,l=s.extend({},a.defaults,i);l.$path=s('li.'+l.pathClass,this).slice(0,l.pathLevels),p=l.$path;for(var r=0;r<p.length;r++){p.eq(r).addClass([l.hoverClass,n.bcClass].join(' ')).filter('li:has(ul)').removeClass(l.pathClass)};a.o[f]=a.op=l;s('li:has(ul)',this)[(s.fn.hoverIntent&&!l.disableHI)?'hoverIntent':'hover'](e,o).each(function(){if(l.autoArrows)h(s(this).children('a:first-child, span.nolink:first-child'))}).not('.'+n.bcClass).hideSuperfishUl();var t=s('a, span.nolink',this);t.each(function(s){var a=t.eq(s).parents('li');t.eq(s).focus(function(){e.call(a)}).blur(function(){o.call(a)})});l.onInit.call(this)}).each(function(){var i=[n.menuClass];if(a.op.dropShadows){i.push(n.shadowClass)};s(this).addClass(i.join(' '))})};var a=s.fn.superfish;a.o=[];a.op={};a.c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',arrowClass:'sf-sub-indicator',shadowClass:'sf-shadow'};a.defaults={hoverClass:'sfHover',pathClass:'overideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},speed:'fast',autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};s.fn.extend({hideSuperfishUl:function(){var n=a.op,e=(n.retainPath===!0)?n.$path:'';n.retainPath=!1;var i=s(['li.',n.hoverClass].join(''),this).add(this).not(e).removeClass(n.hoverClass).children('ul').addClass('sf-hidden');n.onHide.call(i);return this},showSuperfishUl:function(){var s=a.op,i=a.c.shadowClass+'-off',n=this.addClass(s.hoverClass).children('ul.sf-hidden').hide().removeClass('sf-hidden');s.onBeforeShow.call(n);n.animate(s.animation,s.speed,function(){s.onShow.call(n)});return this}})})(jQuery);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/libraries/superfish/superfish.js. */