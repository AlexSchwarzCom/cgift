/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/toolbar/js/views/BodyVisualView.js. */
(function(e,i,o){i.toolbar.BodyVisualView=o.View.extend({initialize:function(){this.listenTo(this.model,'change:activeTray ',this.render);this.listenTo(this.model,'change:isFixed change:isViewportOverflowConstrained',this.isToolbarFixed)},isToolbarFixed:function(){var i=this.model.get('isViewportOverflowConstrained');e('body').toggleClass('toolbar-fixed',i||this.model.get('isFixed'))},render:function(){e('body').toggleClass('toolbar-tray-open',!!this.model.get('activeTray'))}})})(jQuery,Drupal,Backbone);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/toolbar/js/views/BodyVisualView.js. */