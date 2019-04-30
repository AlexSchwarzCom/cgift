/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/toolbar/js/toolbar.js. */
(function(e,o,t){var a=e.extend({breakpoints:{'toolbar.narrow':'','toolbar.standard':'','toolbar.wide':''}},t.toolbar,{strings:{horizontal:o.t('Horizontal orientation'),vertical:o.t('Vertical orientation')}});o.behaviors.toolbar={attach:function(r){if(!window.matchMedia('only screen').matches){return};e(r).find('#toolbar-administration').once('toolbar').each(function(){var r=new o.toolbar.ToolbarModel({locked:JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),activeTab:document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),height:e('#toolbar-administration').outerHeight()});o.toolbar.models.toolbarModel=r;Object.keys(a.breakpoints).forEach(function(e){var i=a.breakpoints[e],t=window.matchMedia(i);o.toolbar.mql[e]=t;t.addListener(o.toolbar.mediaQueryChangeHandler.bind(null,r,e));o.toolbar.mediaQueryChangeHandler.call(null,r,e,t)});o.toolbar.views.toolbarVisualView=new o.toolbar.ToolbarVisualView({el:this,model:r,strings:a.strings});o.toolbar.views.toolbarAuralView=new o.toolbar.ToolbarAuralView({el:this,model:r,strings:a.strings});o.toolbar.views.bodyVisualView=new o.toolbar.BodyVisualView({el:this,model:r});r.trigger('change:isFixed',r,r.get('isFixed'));r.trigger('change:activeTray',r,r.get('activeTray'));var i=new o.toolbar.MenuModel();o.toolbar.models.menuModel=i;o.toolbar.views.menuVisualView=new o.toolbar.MenuVisualView({el:e(this).find('.toolbar-menu-administration').get(0),model:i,strings:a.strings});o.toolbar.setSubtrees.done(function(o){i.set('subtrees',o);var e=t.ajaxPageState.theme;localStorage.setItem('Drupal.toolbar.subtrees.'+e,JSON.stringify(o));r.set('areSubtreesLoaded',!0)});o.toolbar.views.toolbarVisualView.loadSubtrees();e(document).on('drupalViewportOffsetChange.toolbar',function(o,e){r.set('offsets',e)});r.on('change:orientation',function(o,t){e(document).trigger('drupalToolbarOrientationChange',t)}).on('change:activeTab',function(o,t){e(document).trigger('drupalToolbarTabChange',t)}).on('change:activeTray',function(o,t){e(document).trigger('drupalToolbarTrayChange',t)});if(o.toolbar.models.toolbarModel.get('orientation')==='horizontal'&&o.toolbar.models.toolbarModel.get('activeTab')===null){o.toolbar.models.toolbarModel.set({activeTab:e('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)})};e(window).on({'dialog:aftercreate':function(t,a,r,n){var i=e('#toolbar-bar');i.css('margin-top','0');if(n.drupalOffCanvasPosition==='top'){var l=o.offCanvas.getContainer(r).outerHeight();i.css('margin-top',l+'px');r.on('dialogContentResize.off-canvas',function(){var e=o.offCanvas.getContainer(r).outerHeight();i.css('margin-top',e+'px')})}},'dialog:beforeclose':function(){e('#toolbar-bar').css('margin-top','0')}})})}};o.toolbar={views:{},models:{},mql:{},setSubtrees:new e.Deferred(),mediaQueryChangeHandler:function(o,e,t){switch(e){case'toolbar.narrow':o.set({isOriented:t.matches,isTrayToggleVisible:!1});if(!t.matches||!o.get('orientation')){o.set({orientation:'vertical'},{validate:!0})};break;case'toolbar.standard':o.set({isFixed:t.matches});break;case'toolbar.wide':o.set({orientation:t.matches&&!o.get('locked')?'horizontal':'vertical'},{validate:!0});o.set({isTrayToggleVisible:t.matches});break;default:break}}};o.theme.toolbarOrientationToggle=function(){return'<div class="toolbar-toggle-orientation"><div class="toolbar-lining"><button class="toolbar-icon" type="button"></button></div></div>'};o.AjaxCommands.prototype.setToolbarSubtrees=function(e,t,a){o.toolbar.setSubtrees.resolve(t.subtrees)}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/toolbar/js/toolbar.js. */