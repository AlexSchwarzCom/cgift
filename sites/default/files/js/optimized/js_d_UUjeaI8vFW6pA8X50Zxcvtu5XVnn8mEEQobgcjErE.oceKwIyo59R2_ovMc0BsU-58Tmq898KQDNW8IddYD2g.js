/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/admin_toolbar/js/admin_toolbar.js. */
(function(e,n){n.behaviors.adminToolbar={attach:function(n,t){e('a.toolbar-icon',n).removeAttr('title');e('.toolbar-tray li.menu-item--expanded, .toolbar-tray ul li.menu-item--expanded .menu-item',n).hoverIntent({over:function(){e(this).parent().find('li').removeClass('hover-intent');e(this).addClass('hover-intent')},out:function(){e(this).removeClass('hover-intent')},timeout:250});e('ul.toolbar-menu li.menu-item--expanded a',n).on('focusin',function(){e('li.menu-item--expanded',n).removeClass('hover-intent');e(this).parents('li.menu-item--expanded').addClass('hover-intent')});e('ul.toolbar-menu li.menu-item a',n).keydown(function(n){if((n.shiftKey&&(n.keyCode||n.which)==9)){if(e(this).parent('.menu-item').prev().hasClass('menu-item--expanded')){e(this).parent('.menu-item').prev().addClass('hover-intent')}}});e('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a',n).on('focusin',function(){e('.menu-item--expanded').removeClass('hover-intent')});e('.toolbar-menu:first-child > .menu-item',n).on('hover',function(){e(this,'a').css('background: #fff;')});e('ul:not(.toolbar-menu)',n).on({mousemove:function(){e('li.menu-item--expanded').removeClass('hover-intent')},hover:function(){e('li.menu-item--expanded').removeClass('hover-intent')}})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/admin_toolbar/js/admin_toolbar.js. */