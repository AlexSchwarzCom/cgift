/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/misc/dialog/dialog.jquery-ui.js. */
(function(t){t.widget('ui.dialog',t.ui.dialog,{options:{buttonClass:'button',buttonPrimaryClass:'button--primary'},_createButtons:function(){var i=this.options,o=void 0,t=void 0,n=i.buttons.length;for(t=0;t<n;t++){if(i.buttons[t].primary&&i.buttons[t].primary===!0){o=t;delete i.buttons[t].primary;break}};this._super();var s=this.uiButtonSet.children().addClass(i.buttonClass);if(typeof o!=='undefined'){s.eq(t).addClass(i.buttonPrimaryClass)}}})})(jQuery);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/misc/dialog/dialog.jquery-ui.js. */