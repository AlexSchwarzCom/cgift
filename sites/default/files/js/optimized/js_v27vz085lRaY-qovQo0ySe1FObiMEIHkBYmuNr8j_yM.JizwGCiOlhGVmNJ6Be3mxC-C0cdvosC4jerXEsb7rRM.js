/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/toolbar/js/views/ToolbarVisualView.js. */
(function(t,e,a,o){e.toolbar.ToolbarVisualView=o.View.extend({events:function(){var t=function(t){t.preventDefault();t.target.click()};return{'click .toolbar-bar .toolbar-tab .trigger':'onTabClick','click .toolbar-toggle-orientation button':'onOrientationToggleClick','touchend .toolbar-bar .toolbar-tab .trigger':t,'touchend .toolbar-toggle-orientation button':t}},initialize:function(t){this.strings=t.strings;this.listenTo(this.model,'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',this.render);this.listenTo(this.model,'change:mqMatches',this.onMediaQueryChange);this.listenTo(this.model,'change:offsets',this.adjustPlacement);this.listenTo(this.model,'change:activeTab change:orientation change:isOriented',this.updateToolbarHeight);this.$el.find('.toolbar-tray .toolbar-lining').append(e.theme('toolbarOrientationToggle'));this.model.trigger('change:activeTab')},updateToolbarHeight:function(){var a=t('#toolbar-bar').find('.toolbar-tab').outerHeight()||0,e=t('.is-active.toolbar-tray-horizontal').outerHeight()||0;this.model.set('height',a+e);t('body').css({'padding-top':this.model.get('height')});this.triggerDisplace()},triggerDisplace:function(){_.defer(function(){e.displace(!0)})},render:function(){this.updateTabs();this.updateTrayOrientation();this.updateBarAttributes();t('body').removeClass('toolbar-loading');if(this.model.changed.orientation==='vertical'||this.model.changed.activeTab){this.loadSubtrees()};return this},onTabClick:function(t){if(t.target.hasAttribute('data-toolbar-tray')){var e=this.model.get('activeTab'),a=t.target;this.model.set('activeTab',!e||a!==e?a:null);t.preventDefault();t.stopPropagation()}},onOrientationToggleClick:function(t){var o=this.model.get('orientation'),e=o==='vertical'?'horizontal':'vertical',a=e==='vertical';if(a){localStorage.setItem('Drupal.toolbar.trayVerticalLocked','true')}
else{localStorage.removeItem('Drupal.toolbar.trayVerticalLocked')};this.model.set({locked:a,orientation:e},{validate:!0,override:!0});t.preventDefault();t.stopPropagation()},updateTabs:function(){var e=t(this.model.get('activeTab'));t(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed',!1);t(this.model.previous('activeTray')).removeClass('is-active');if(e.length>0){e.addClass('is-active').prop('aria-pressed',!0);var r=e.attr('data-toolbar-tray'),o=e.get(0).id;if(o){localStorage.setItem('Drupal.toolbar.activeTabID',JSON.stringify(o))};var a=this.$el.find('[data-toolbar-tray="'+r+'"].toolbar-tray');if(a.length){a.addClass('is-active');this.model.set('activeTray',a.get(0))}
else{this.model.set('activeTray',null)}}
else{this.model.set('activeTray',null);localStorage.removeItem('Drupal.toolbar.activeTabID')}},updateBarAttributes:function(){var t=this.model.get('isOriented');if(t){this.$el.find('.toolbar-bar').attr('data-offset-top','')}
else{this.$el.find('.toolbar-bar').removeAttr('data-offset-top')};this.$el.toggleClass('toolbar-oriented',t)},updateTrayOrientation:function(){var e=this.model.get('orientation'),a=e==='vertical'?'horizontal':'vertical';t('body').toggleClass('toolbar-vertical',e==='vertical').toggleClass('toolbar-horizontal',e==='horizontal');var l=a==='horizontal'?'toolbar-tray-horizontal':'toolbar-tray-vertical',o=this.$el.find('.toolbar-tray').removeClass(l).addClass('toolbar-tray-'+e),s='toolbar-icon-toggle-'+e,n='toolbar-icon-toggle-'+a,d=this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));d.find('button').val(a).attr('title',this.strings[a]).text(this.strings[a]).removeClass(s).addClass(n);var r=document.documentElement.dir,i=r==='rtl'?'right':'left';o.removeAttr('data-offset-left data-offset-right data-offset-top');o.filter('.toolbar-tray-vertical.is-active').attr('data-offset-'+i,'');o.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top','')},adjustPlacement:function(){var t=this.$el.find('.toolbar-tray');if(!this.model.get('isOriented')){t.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical')}},loadSubtrees:function(){var d=t(this.model.get('activeTab')),g=this.model.get('orientation');if(!this.model.get('areSubtreesLoaded')&&typeof d.data('drupal-subtrees')!=='undefined'&&g==='vertical'){var r=a.toolbar.subtreesHash,o=a.ajaxPageState.theme,s=e.url('toolbar/subtrees/'+r),n=localStorage.getItem('Drupal.toolbar.subtreesHash.'+o),i=JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.'+o)),l=this.model.get('orientation')==='vertical';if(l&&r===n&&i){e.toolbar.setSubtrees.resolve(i)}
else if(l){localStorage.removeItem('Drupal.toolbar.subtreesHash.'+o);localStorage.removeItem('Drupal.toolbar.subtrees.'+o);e.ajax({url:s}).execute();localStorage.setItem('Drupal.toolbar.subtreesHash.'+o,r)}}}})})(jQuery,Drupal,drupalSettings,Backbone);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/toolbar/js/views/ToolbarVisualView.js. */