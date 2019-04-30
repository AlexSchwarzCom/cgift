/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/quickedit/js/views/AppView.js. */
(function(e,t,d,i){var a=!1;i.quickedit.AppView=d.View.extend({initialize:function(e){this.activeFieldStates=['activating','active'];this.singleFieldStates=['highlighted','activating','active'];this.changedFieldStates=['changed','saving','saved','invalid'];this.readyFieldStates=['candidate','highlighted'];this.listenTo(e.entitiesCollection,'change:state',this.appStateChange);this.listenTo(e.entitiesCollection,'change:isActive',this.enforceSingleActiveEntity);this.listenTo(e.fieldsCollection,'change:state',this.editorStateChange);this.listenTo(e.fieldsCollection,'change:html',this.renderUpdatedField);this.listenTo(e.fieldsCollection,'change:html',this.propagateUpdatedField);this.listenTo(e.fieldsCollection,'add',this.rerenderedFieldToCandidate);this.listenTo(e.fieldsCollection,'destroy',this.teardownEditor)},appStateChange:function(e,d){var o=this,n=void 0;switch(d){case'launching':a=!1;n=new i.quickedit.EntityToolbarView({model:e,appModel:this.model});e.toolbarView=n;e.get('fields').each(function(e){o.setupEditor(e)});t.defer(function(){e.set('state','opening')});break;case'closed':n=e.toolbarView;e.get('fields').each(function(e){o.teardownEditor(e)});if(n){n.remove();delete e.toolbarView};if(a){a=!1;window.location.reload()};break}},acceptEditorStateChange:function(e,d,n,s){var a=!0;if(n&&(n.reason==='stop'||n.reason==='rerender')){if(e==='candidate'&&d==='inactive'){a=!0}}
else{if(!i.quickedit.FieldModel.followsStateSequence(e,d)){a=!1;if(t.indexOf(this.activeFieldStates,e)!==-1&&d==='candidate'){a=!0}
else if((e==='changed'||e==='invalid')&&d==='candidate'){a=!0}
else if(e==='highlighted'&&d==='candidate'){a=!0}
else if(e==='saved'&&d==='candidate'){a=!0}
else if(e==='invalid'&&d==='saving'){a=!0}
else if(e==='invalid'&&d==='activating'){a=!0}};if(a){var o=void 0,l=void 0;if((this.readyFieldStates.indexOf(e)!==-1||e==='invalid')&&this.activeFieldStates.indexOf(d)!==-1){o=this.model.get('activeField');if(o&&o!==s){l=o.get('state');if(this.activeFieldStates.indexOf(l)!==-1){o.set('state','candidate')}
else if(l==='changed'||l==='invalid'){o.set('state','saving')};if(e==='invalid'){this.model.set('activeField',s);a=!1}}}
else if(t.indexOf(this.activeFieldStates,e)!==-1&&d==='candidate'){if(n&&n.reason==='mouseleave'){a=!1}}
else if((e==='changed'||e==='invalid')&&d==='candidate'){if(n&&n.reason==='mouseleave'){a=!1}
else if(n&&n.confirmed){a=!0}}}};return a},setupEditor:function(t){var a=t.get('entity'),l=a.toolbarView,s=l.getToolbarRoot(),c=t.get('metadata').editor,r=new i.quickedit.EditorModel(),d=new i.quickedit.editors[c]({el:e(t.get('el')),model:r,fieldModel:t});var o=new i.quickedit.FieldToolbarView({el:s,model:t,$editedElement:e(d.getEditedElement()),editorView:d,entityModel:a});var n=new i.quickedit.FieldDecorationView({el:e(d.getEditedElement()),model:t,editorView:d});t.editorView=d;t.toolbarView=o;t.decorationView=n},teardownEditor:function(e){if(typeof e.editorView==='undefined'){return};e.toolbarView.remove();delete e.toolbarView;e.decorationView.remove();delete e.decorationView;e.editorView.remove();delete e.editorView},confirmEntityDeactivation:function(t){var l=this,d=void 0;function n(e){d.close(e);l.model.set('activeModal',null);if(e==='save'){t.set('state','committing',{confirmed:!0})}
else{t.set('state','deactivating',{confirmed:!0});if(t.get('reload')){a=!0;t.set('reload',!1)}}};if(!this.model.get('activeModal')){var o=e('<div>'+i.t('You have unsaved changes')+'</div>');d=i.dialog(o.get(0),{title:i.t('Discard changes?'),dialogClass:'quickedit-discard-modal',resizable:!1,buttons:[{text:i.t('Save'),click:function(){n('save')},primary:!0},{text:i.t('Discard changes'),click:function(){n('discard')}}],closeOnEscape:!1,create:function(){e(this).parent().find('.ui-dialog-titlebar-close').remove()},beforeClose:!1,close:function(i){e(i.target).remove()}});this.model.set('activeModal',d);d.showModal()}},editorStateChange:function(e,i){var a=e.previous('state'),d=i;if(t.indexOf(this.singleFieldStates,d)!==-1&&this.model.get('highlightedField')!==e){this.model.set('highlightedField',e)}
else if(this.model.get('highlightedField')===e&&d==='candidate'){this.model.set('highlightedField',null)};if(t.indexOf(this.activeFieldStates,d)!==-1&&this.model.get('activeField')!==e){this.model.set('activeField',e)}
else if(this.model.get('activeField')===e&&d==='candidate'){if(a==='changed'||a==='invalid'){e.editorView.revert()};this.model.set('activeField',null)}},renderUpdatedField:function(d,a,n){var o=e(d.get('el')),s=o.parent(),l=function(){d.destroy();o.replaceWith(a);i.attachBehaviors(s.get(0))};if(!n.propagation){t.defer(function(){d.set('state','candidate');t.defer(function(){d.set('state','inactive',{reason:'rerender'});l()})})}
else{l()}},propagateUpdatedField:function(e,t,d){if(d.propagation){return};var a=e.get('htmlForOtherViewModes');i.quickedit.collections.fields.where({logicalFieldID:e.get('logicalFieldID')}).forEach(function(i){if(i===e){}
else if(i.getViewMode()===e.getViewMode()){i.set('html',e.get('html'))}
else if(i.getViewMode()in a){i.set('html',a[i.getViewMode()],{propagation:!0})}})},rerenderedFieldToCandidate:function(e){var t=i.quickedit.collections.entities.findWhere({isActive:!0});if(!t){return};if(e.get('entity')===t){this.setupEditor(e);e.set('state','candidate')}},enforceSingleActiveEntity:function(e){if(e.get('isActive')===!1){return};e.collection.chain().filter(function(i){return i.get('isActive')===!0&&i!==e}).each(function(e){e.set('state','deactivating')})}})})(jQuery,_,Backbone,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/quickedit/js/views/AppView.js. */