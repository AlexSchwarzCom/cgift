/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/quickedit/js/views/EntityToolbarView.js. */
(function(e,i,n,t,l){t.quickedit.EntityToolbarView=n.View.extend({_fieldToolbarRoot:null,events:function(){var e={'click button.action-save':'onClickSave','click button.action-cancel':'onClickCancel',mouseenter:'onMouseenter'};return e},initialize:function(t){var o=this;this.appModel=t.appModel;this.$entity=e(this.model.get('el'));this.listenTo(this.model,'change:isActive change:isDirty change:state',this.render);this.listenTo(this.appModel,'change:highlightedField change:activeField',this.render);this.listenTo(this.model.get('fields'),'change:state',this.fieldStateChange);e(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit',l(e.proxy(this.windowChangeHandler,this),150));e(document).on('drupalViewportOffsetChange.quickedit',function(e,t){if(o.$fence){o.$fence.css(t)}});var i=this.buildToolbarEl();this.setElement(i);this._fieldToolbarRoot=i.find('.quickedit-toolbar-field').get(0);this.render()},render:function(){if(this.model.get('isActive')){var i=e('body');if(i.children('#quickedit-entity-toolbar').length===0){i.append(this.$el)};if(i.children('#quickedit-toolbar-fence').length===0){this.$fence=e(t.theme('quickeditEntityToolbarFence')).css(t.displace()).appendTo(i)};this.label();this.show('ops');this.position()};var o=this.$el.find('.quickedit-button.action-save'),n=this.model.get('isDirty');switch(this.model.get('state')){case'opened':o.removeClass('action-saving icon-throbber icon-end').text(t.t('Save')).removeAttr('disabled').attr('aria-hidden',!n);break;case'committing':o.addClass('action-saving icon-throbber icon-end').text(t.t('Saving')).attr('disabled','disabled');break;default:o.attr('aria-hidden',!0);break};return this},remove:function(){this.$fence.remove();e(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');e(document).off('drupalViewportOffsetChange.quickedit');n.View.prototype.remove.call(this)},windowChangeHandler:function(e){this.position()},fieldStateChange:function(e,t){switch(t){case'active':this.render();break;case'invalid':this.render();break}},position:function(e){clearTimeout(this.timer);var s=this,r=document.documentElement.dir==='rtl'?'right':'left',c=0,m=0,p=0,n=void 0,o=void 0,l=void 0;do{switch(m){case 0:n=e;break;case 1:o=t.quickedit.app.model.get('activeField');n=o&&o.editorView&&o.editorView.$formContainer&&o.editorView.$formContainer.find('.quickedit-form');break;case 2:n=o&&o.editorView&&o.editorView.getEditedElement();if(o&&o.editorView&&o.editorView.getQuickEditUISettings().padding){p=5};break;case 3:l=t.quickedit.app.model.get('highlightedField');n=l&&l.editorView&&l.editorView.getEditedElement();c=250;break;default:{var d=this.model.get('fields').models,u=1000000,f=null;for(var a=0;a<d.length;a++){var h=d[a].get('el').getBoundingClientRect().top;if(h<u){u=h;f=d[a]}};n=f.get('el');c=50;break}};m++}
while(!n);function g(e,t,i){var l=t.top>i.target.top;i.element.element.toggleClass('quickedit-toolbar-pointer-top',l);if(e.$entity[0]===i.target.element[0]){var n=e.$entity.find('.quickedit-editable').eq(l?-1:0);if(n.length>0){t.top=l?n.offset().top+n.outerHeight(!0):n.offset().top-i.element.element.outerHeight(!0)}};var o=e.$fence.offset().top,a=e.$fence.height(),d=i.element.element.outerHeight(!0);if(t.top<o){t.top=o}
else if(t.top+d>o+a){t.top=o+a-d};i.element.element.css({left:Math.floor(t.left),top:Math.floor(t.top)})};function b(){s.$el.position({my:r+' bottom',at:r+'+'+(1+p)+' top',of:n,collision:'flipfit',using:g.bind(null,s),within:s.$fence}).css({'max-width':document.documentElement.clientWidth<450?document.documentElement.clientWidth:450,'min-width':document.documentElement.clientWidth<240?document.documentElement.clientWidth:240,width:'100%'})};this.timer=setTimeout(function(){i.defer(b)},c)},onClickSave:function(e){e.stopPropagation();e.preventDefault();this.model.set('state','committing')},onClickCancel:function(e){e.preventDefault();this.model.set('state','deactivating')},onMouseenter:function(e){clearTimeout(this.timer)},buildToolbarEl:function(){var i=e(t.theme('quickeditEntityToolbar',{id:'quickedit-entity-toolbar'}));i.find('.quickedit-toolbar-entity').prepend(t.theme('quickeditToolgroup',{classes:['ops'],buttons:[{label:t.t('Save'),type:'submit',classes:'action-save quickedit-button icon',attributes:{'aria-hidden':!0}},{label:t.t('Close'),classes:'action-cancel quickedit-button icon icon-close icon-only'}]}));i.css({left:this.$entity.offset().left,top:this.$entity.offset().top});return i},getToolbarRoot:function(){return this._fieldToolbarRoot},label:function o(){var o='',e=this.model.get('label'),i=t.quickedit.app.model.get('activeField'),n=i&&i.get('metadata').label,l=t.quickedit.app.model.get('highlightedField'),a=l&&l.get('metadata').label;if(n){o=t.theme('quickeditEntityToolbarLabel',{entityLabel:e,fieldLabel:n})}
else if(a){o=t.theme('quickeditEntityToolbarLabel',{entityLabel:e,fieldLabel:a})}
else{o=t.checkPlain(e)};this.$el.find('.quickedit-toolbar-label').html(o)},addClass:function(e,t){this._find(e).addClass(t)},removeClass:function(e,t){this._find(e).removeClass(t)},_find:function(e){return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.'+e)},show:function(e){this.$el.removeClass('quickedit-animate-invisible')}})})(jQuery,_,Backbone,Drupal,Drupal.debounce);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/quickedit/js/views/EntityToolbarView.js. */