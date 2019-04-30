/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/quickedit/js/quickedit.js. */
(function(e,i,u,t,q,p,d){var I=e.extend(q.quickedit,{strings:{quickEdit:t.t('Quick edit')}});var n=[],c=[],a=[],r={};function h(e){t.quickedit.collections.entities=new t.quickedit.EntityCollection();t.quickedit.collections.fields=new t.quickedit.FieldCollection();t.quickedit.app=new t.quickedit.AppView({el:e,model:new t.quickedit.AppModel(),entitiesCollection:t.quickedit.collections.entities,fieldsCollection:t.quickedit.collections.fields})};function k(e){var t=e.getAttribute('data-quickedit-entity-id');if(!r.hasOwnProperty(t)){r[t]=0}
else{r[t]++};var i=r[t];e.setAttribute('data-quickedit-entity-instance-id',i)};function f(n,d,a,c){var r=t.quickedit.collections.entities.findWhere({entityID:a,entityInstanceID:c});e(n).addClass('quickedit-field');var u=new t.quickedit.FieldModel({el:n,fieldID:d,id:d+'['+r.get('entityInstanceID')+']',entity:r,metadata:t.quickedit.metadata.get(d),acceptStateChange:i.bind(t.quickedit.app.acceptEditorStateChange,t.quickedit.app)});t.quickedit.collections.fields.add(u)};function v(e){var c=i.keys(t.quickedit.editors),n=[];t.quickedit.collections.fields.each(function(e){var d=t.quickedit.metadata.get(e.get('fieldID'));if(d.access&&i.indexOf(c,d.editor)===-1){n.push(d.editor);t.quickedit.editors[d.editor]=!1}});n=i.uniq(n);if(n.length===0){e();return};var d=t.ajax({url:t.url('quickedit/attachments'),submit:{'editors[]':n}});var a=t.AjaxCommands.prototype.insert;d.commands.insert=function(t,n,d){i.defer(e);a(t,n,d)};d.execute()};function o(n){var u=t.quickedit.metadata;function s(e){for(var t=0;t<e.length;t++){var i=e[t];if(u.get(i,'access')===!0){return!0}};return!1};function k(e){return e.length===u.intersection(e).length};var r=i.where(c,{entityID:n.entityID,entityInstanceID:n.entityInstanceID});var a=i.pluck(r,'fieldID');if(a.length===0){return!1};if(s(a)){var d=new t.quickedit.EntityModel({el:n.region,entityID:n.entityID,entityInstanceID:n.entityInstanceID,id:n.entityID+'['+n.entityInstanceID+']',label:t.quickedit.metadata.get(n.entityID,'label')});t.quickedit.collections.entities.add(d);var l=new t.quickedit.EntityDecorationView({el:n.region,model:d});d.set('entityDecorationView',l);i.each(r,function(e){f(e.el,e.fieldID,n.entityID,n.entityInstanceID)});c=i.difference(c,r);var o=i.once(function(){var i=e(n.el).find('.contextual-links'),a=new t.quickedit.ContextualLinkView(e.extend({el:e('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo(i),model:d,appModel:t.quickedit.app.model},I));d.set('contextualLinkView',a)});v(o);return!0};if(k(a)){return!0};return!1};function m(e){return e.split('/').slice(0,2).join('/')};function s(i){var l=t.quickedit.metadata,d=i.getAttribute('data-quickedit-field-id'),a=m(d),k='[data-quickedit-entity-id="'+a+'"]',u=e(k);if(!u.length){throw new Error('Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id="'+d+'"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id="'+a+'"]. This is typically caused by the theme\'s template for this entity type forgetting to print the attributes.')};var o=e(i).closest(u);if(o.length===0){var s=u.parents().has(i).first();o=s.find(u)};var r=o.get(0).getAttribute('data-quickedit-entity-instance-id');if(!l.has(d)){n.push({el:i,fieldID:d,entityID:a,entityInstanceID:r});return};if(l.get(d,'access')!==!0){return};if(t.quickedit.collections.entities.findWhere({entityID:a,entityInstanceID:r})){f(i,d,a,r)}
else{c.push({el:i,fieldID:d,entityID:a,entityInstanceID:r})}};function g(e){e.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function(e,n){var d=t.quickedit.collections.entities.findWhere({el:n});if(d){var c=d.get('contextualLinkView');c.undelegateEvents();c.remove();d.get('entityDecorationView').remove();d.destroy()};function r(e){return e.region!==n};a=i.filter(a,r)});e.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function(e,d){t.quickedit.collections.fields.chain().filter(function(e){return e.get('el')===d}).invoke('destroy');function a(e){return e.el!==d};n=i.filter(n,a);c=i.filter(c,a)})};function D(d){if(n.length){var c=i.pluck(n,'fieldID'),r=i.pluck(n,'el'),a=i.uniq(i.pluck(n,'entityID'),!0);a=i.difference(a,t.quickedit.metadata.intersection(a));n=[];e.ajax({url:t.url('quickedit/metadata'),type:'POST',data:{'fields[]':c,'entities[]':a},dataType:'json',success:function(e){i.each(e,function(e,i){t.quickedit.metadata.add(i,e)});d(r)}})}};t.behaviors.quickedit={attach:function(t){e('body').once('quickedit-init').each(h);var n=e(t).find('[data-quickedit-field-id]').once('quickedit');if(n.length===0){return};e(t).find('[data-quickedit-entity-id]').once('quickedit').each(function(e,t){k(t)});n.each(function(e,t){s(t)});a=i.filter(a,function(e){return!o(e)});D(function(e){i.each(e,s);a=i.filter(a,function(e){return!o(e)})})},detach:function(t,i,n){if(n==='unload'){g(e(t))}}};t.quickedit={app:null,collections:{entities:null,fields:null},editors:{},metadata:{has:function(e){return d.getItem(this._prefixFieldID(e))!==null},add:function(e,t){d.setItem(this._prefixFieldID(e),p.stringify(t))},get:function(e,t){var i=p.parse(d.getItem(this._prefixFieldID(e)));return typeof t==='undefined'?i:i[t]},_prefixFieldID:function(e){return'Drupal.quickedit.metadata.'+e},_unprefixFieldID:function(e){return e.substring(26)},intersection:function x(e){var t=i.map(e,this._prefixFieldID),x=i.intersection(t,i.keys(sessionStorage));return i.map(x,this._unprefixFieldID)}}};var y=t.quickedit.metadata._prefixFieldID('permissionsHash'),w=d.getItem(y),l=q.user.permissionsHash;if(w!==l){if(typeof l==='string'){i.chain(d).keys().each(function(e){if(e.substring(0,26)==='Drupal.quickedit.metadata.'){d.removeItem(e)}})};d.setItem(y,l)};e(document).on('drupalContextualLinkAdded',function(e,t){if(t.$region.is('[data-quickedit-entity-id]')){if(!t.$region.is('[data-quickedit-entity-instance-id]')){t.$region.once('quickedit');k(t.$region.get(0))};var i={entityID:t.$region.attr('data-quickedit-entity-id'),entityInstanceID:t.$region.attr('data-quickedit-entity-instance-id'),el:t.$el[0],region:t.$region[0]};if(!o(i)){a.push(i)}}})})(jQuery,_,Backbone,Drupal,drupalSettings,window.JSON,window.sessionStorage);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/quickedit/js/quickedit.js. */