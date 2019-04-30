/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/views_ui/js/views-admin.js. */
(function(e,i,t){i.viewsUi={};i.behaviors.viewsUiEditView={attach:function(){e('[data-drupal-selector="edit-query-options-disable-sql-rewrite"]').on('click',function(){e('.sql-rewrite-warning').toggleClass('js-hide')})}};i.behaviors.viewsUiAddView={attach:function(t){var o=e(t),a=new RegExp('[^a-z0-9\\-]+','g'),l='-',d=void 0,n=o.find('[id^="edit-page-title"], [id^="edit-block-title"], [id^="edit-page-link-properties-title"]');if(n.length){if(!this.fieldsFiller){this.fieldsFiller=new i.viewsUi.FormFieldFiller(n)}
else{this.fieldsFiller.rebind(n)}};var s=o.find('[id^="edit-page-path"]');if(s.length){if(!this.pathFiller){this.pathFiller=new i.viewsUi.FormFieldFiller(s,a,l)}
else{this.pathFiller.rebind(s)}};var r=o.find('[id^="edit-page-feed-properties-path"]');if(r.length){if(!this.feedFiller){d='.xml';this.feedFiller=new i.viewsUi.FormFieldFiller(r,a,l,d)}
else{this.feedFiller.rebind(r)}}}};i.viewsUi.FormFieldFiller=function(i,t,s,o){this.source=e('#edit-label');this.target=i;this.exclude=t||!1;this.replace=s||'';this.suffix=o||'';var r=this;this.populate=function(){return r._populate.call(r)};this.unbind=function(){return r._unbind.call(r)};this.bind()};e.extend(i.viewsUi.FormFieldFiller.prototype,{bind:function(){this.unbind();this.source.on('keyup.viewsUi change.viewsUi',this.populate);this.target.on('focus.viewsUi',this.unbind)},getTransliterated:function(){var e=this.source.val();if(this.exclude){e=e.toLowerCase().replace(this.exclude,this.replace)};return e},_populate:function(){var t=this.getTransliterated(),i=this.suffix;this.target.each(function(r){var s=e(this).attr('maxlength')-i.length;e(this).val(t.substr(0,s)+i)})},_unbind:function(){this.source.off('keyup.viewsUi change.viewsUi',this.populate);this.target.off('focus.viewsUi',this.unbind)},rebind:function(e){this.target=e;this.bind()}});i.behaviors.addItemForm={attach:function(t){var r=e(t),s=r;if(!r.is('form[id^="views-ui-add-handler-form"]')){s=r.find('form[id^="views-ui-add-handler-form"]')};if(s.once('views-ui-add-handler-form').length){new i.viewsUi.AddItemForm(s)}}};i.viewsUi.AddItemForm=function(i){this.$form=i;this.$form.find('.views-filterable-options :checkbox').on('click',e.proxy(this.handleCheck,this));this.$selected_div=this.$form.find('.views-selected-options').parent();this.$selected_div.hide();this.checkedItems=[]};i.viewsUi.AddItemForm.prototype.handleCheck=function(i){var r=e(i.target),s=e.trim(r.closest('td').next().html());if(r.is(':checked')){this.$selected_div.show().css('display','block');this.checkedItems.push(s)}
else{var o=e.inArray(s,this.checkedItems);for(var t=0;t<this.checkedItems.length;t++){if(t===o){this.checkedItems.splice(t,1);t--;break}};if(this.checkedItems.length===0){this.$selected_div.hide()}};this.refreshCheckedItems()};i.viewsUi.AddItemForm.prototype.refreshCheckedItems=function(){this.$selected_div.find('.views-selected-options').html(this.checkedItems.join(', ')).trigger('dialogContentResize')};i.behaviors.viewsUiRenderAddViewButton={attach:function(t){var r=e(t).find('#views-display-menu-tabs').once('views-ui-render-add-view-button');if(!r.length){return};var s=e('<li class="add"><a href="#"><span class="icon add"></span>'+i.t('Add')+'</a><ul class="action-list" style="display:none;"></ul></li>'),o=r.nextAll('input.add-display').detach();o.appendTo(s.find('.action-list')).wrap('<li>').parent().eq(0).addClass('first').end().eq(-1).addClass('last');o.each(function(){var i=e(this).val();if(i.substr(0,4)==='Add '){e(this).val(i.substr(4))}});s.appendTo(r);r.find('li.add > a').on('click',function(t){t.preventDefault();var r=e(this);i.behaviors.viewsUiRenderAddViewButton.toggleMenu(r)});e('li.add',r).on('mouseleave',function(t){var r=e(this),s=r.children('a[href="#"]');if(r.children('.action-list').is(':visible')){i.behaviors.viewsUiRenderAddViewButton.toggleMenu(s)}})}};i.behaviors.viewsUiRenderAddViewButton.toggleMenu=function(e){e.parent().toggleClass('open');e.next().slideToggle('fast')};i.behaviors.viewsUiSearchOptions={attach:function(t){var r=e(t),s=r;if(!r.is('form[id^="views-ui-add-handler-form"]')){s=r.find('form[id^="views-ui-add-handler-form"]')};if(s.once('views-ui-filter-options').length){new i.viewsUi.OptionsSearch(s)}}};i.viewsUi.OptionsSearch=function(i){this.$form=i;this.$form.on('click','td.title',function(i){var t=e(i.currentTarget);t.closest('tr').find('input').trigger('click')});var t='[data-drupal-selector="edit-override-controls-options-search"]',r='[data-drupal-selector="edit-override-controls-group"]';this.$form.on('formUpdated',t+','+r,e.proxy(this.handleFilter,this));this.$searchBox=this.$form.find(t);this.$controlGroup=this.$form.find(r);this.options=this.getOptions(this.$form.find('.filterable-option'));this.$searchBox.on('keypress',function(e){if(e.which===13){e.preventDefault()}})};e.extend(i.viewsUi.OptionsSearch.prototype,{getOptions:function(i){var s=void 0,o=void 0,r=void 0,n=[],a=i.length;for(var t=0;t<a;t++){r=e(i[t]);s=r.find('.title');o=r.find('.description');n[t]={searchText:s.text().toLowerCase()+' '+o.text().toLowerCase(),$div:r}};return n},handleFilter:function(i){var t=this.$searchBox.val().toLowerCase(),s=t.split(' '),r=this.$controlGroup.val();this.options.forEach(function(e){function o(i){return e.searchText.indexOf(i)!==-1};var i=!0;if(t){i=s.every(o)};if(i&&r!=='all'){i=e.$div.hasClass(r)};e.$div.toggle(i)});e(i.target).trigger('dialogContentResize')}});i.behaviors.viewsUiPreview={attach:function(i){var t=e(i).find('.views-display-column .views-ui-display-tab-bucket.argument');if(t.length===0){return};var r=t.find('.views-display-setting a');if(r.length){e('#preview-args').parent().show()}
else{e('#preview-args').parent().hide()};if(e('#edit-displays-live-preview').once('edit-displays-live-preview').is(':checked')){e('#preview-submit').once('edit-displays-live-preview').trigger('click')}}};i.behaviors.viewsUiRearrangeFilter={attach:function(t){if(typeof i.tableDrag==='undefined'||typeof i.tableDrag['views-rearrange-filters']==='undefined'){return};var r=e(t),s=r.find('#views-rearrange-filters').once('views-rearrange-filters'),o=r.find('.js-form-item-filter-groups-operator').once('views-rearrange-filters');if(s.length){new i.viewsUi.RearrangeFilterHandler(s,o)}}};i.viewsUi.RearrangeFilterHandler=function(i,t){this.table=i;this.operator=t;this.hasGroupOperator=this.operator.length>0;this.draggableRows=i.find('.draggable');this.addGroupButton=e('input#views-add-group');this.removeGroupButtons=i.find('input.views-remove-group');this.insertAddRemoveFilterGroupLinks();if(this.hasGroupOperator){this.dropdowns=this.duplicateGroupsOperator();this.syncGroupsOperators()};this.modifyTableDrag();this.redrawOperatorLabels();i.find('.views-group-title select').once('views-rearrange-filter-handler').on('change.views-rearrange-filter-handler',e.proxy(this,'redrawOperatorLabels'));i.find('a.views-groups-remove-link').once('views-rearrange-filter-handler').on('click.views-rearrange-filter-handler',e.proxy(this,'updateRowspans')).on('click.views-rearrange-filter-handler',e.proxy(this,'redrawOperatorLabels'))};e.extend(i.viewsUi.RearrangeFilterHandler.prototype,{insertAddRemoveFilterGroupLinks:function(){e('<ul class="action-links"><li><a id="views-add-group-link" href="#">'+this.addGroupButton.val()+'</a></li></ul>').prependTo(this.table.parent()).once('views-rearrange-filter-handler').find('#views-add-group-link').on('click.views-rearrange-filter-handler',e.proxy(this,'clickAddGroupButton'));var o=this.removeGroupButtons.length,t=void 0;for(t=0;t<o;t++){var r=e(this.removeGroupButtons[t]),s=r.attr('id');e('<a href="#" class="views-remove-group-link">'+i.t('Remove group')+'</a>').insertBefore(r).once('views-rearrange-filter-handler').on('click.views-rearrange-filter-handler',{buttonId:s},e.proxy(this,'clickRemoveGroupButton'))}},clickAddGroupButton:function(e){this.addGroupButton.trigger('mousedown');e.preventDefault()},clickRemoveGroupButton:function(e){this.table.find('#'+e.data.buttonId).trigger('mousedown');e.preventDefault()},duplicateGroupsOperator:function(){var i=void 0,t=void 0,o=e('tr.views-group-title').once('duplicateGroupsOperator');if(!o.length){return this.operator};this.operator.find('label').add('div.description').addClass('visually-hidden');this.operator.find('select').addClass('form-select');var n=this.operator;t=e('tr#views-group-title-2');i=e('<tr class="filter-group-operator-row"><td colspan="5"></td></tr>');i.find('td').append(this.operator);i.insertBefore(t);var a=o.length;for(var s=2;s<a;s++){t=e(o[s]);var r=this.operator.clone();r.attr('id','');i=e('<tr class="filter-group-operator-row"><td colspan="5"></td></tr>');i.find('td').append(r);i.insertBefore(t);n.add(r)};return n},syncGroupsOperators:function(){if(this.dropdowns.length<2){return};this.dropdowns.on('change',e.proxy(this,'operatorChangeHandler'))},operatorChangeHandler:function(i){var t=e(i.target),r=this.dropdowns.find('select').not(t);r.val(t.val())},modifyTableDrag:function(){var r=i.tableDrag['views-rearrange-filters'],t=this;r.row.prototype.onSwap=function(){if(t.hasGroupOperator){var s=e(this.group),i=s.prev('tr');if(i.length&&!i.hasClass('group-message')&&!i.hasClass('draggable')){var r=s.next();if(r.is('tr')){this.swap('after',r)}};t.updateRowspans()};t.redrawOperatorLabels()};r.onDrop=function(){var r=e(this.oldRowElement).find('.tabledrag-changed');if(r.length){var s=r.prevAll('.views-operator-label');if(s.length){s.insertAfter(r)}};var n=e(this.rowObject.element).prevAll('tr.group-message').get(0),t=n.className.replace(/([^ ]+[ ]+)*group-([^ ]+)-message([ ]+[^ ]+)*/,'$2'),i=e('select.views-group-select',this.rowObject.element);if(e(this.rowObject.element).prev('tr').is('.group-message')&&!i.is('.views-group-select-'+t)){var o=i.attr('class').replace(/([^ ]+[ ]+)*views-group-select-([^ ]+)([ ]+[^ ]+)*/,'$2');i.removeClass('views-group-select-'+o).addClass('views-group-select-'+t);i.val(t)}}},redrawOperatorLabels:function(){for(var s=0;s<this.draggableRows.length;s++){var t=e(this.draggableRows[s]),r=t.find('td').eq(0);if(r.length){var n=t.prevAll('.views-group-title').find('option:selected').html(),o='<span class="views-operator-label">'+n+'</span>',a=t.nextAll(':visible').eq(0),i=r.find('.views-operator-label');if(a.hasClass('draggable')){if(i.length){i.replaceWith(o)}
else{r.append(o)}}
else{i.remove()}}}},updateRowspans:function(){var i=void 0,r=void 0,s=void 0,o=void 0,n=e(this.table).find('tr'),a=n.length;for(var t=0;t<a;t++){i=e(n[t]);if(i.hasClass('views-group-title')){o=i.find('td.group-operator');s=0;r=i.next('tr');r.removeClass('group-populated').addClass('group-empty');o.attr('rowspan',2)}
else if(i.hasClass('draggable')&&i.is(':visible')){s++;r.removeClass('group-empty').addClass('group-populated');o.attr('rowspan',s+1)}}}});i.behaviors.viewsFilterConfigSelectAll={attach:function(i){var o=e(i),t=o.find('.js-form-item-options-value-all').once('filterConfigSelectAll'),r=t.find('input[type=checkbox]'),s=t.closest('.form-checkboxes').find('.js-form-type-checkbox:not(.js-form-item-options-value-all) input[type="checkbox"]');if(t.length){t.show();r.on('click',function(){s.prop('checked',e(this).is(':checked'))});s.on('click',function(){if(e(this).is('checked')===!1){r.prop('checked',!1)}})}}};i.behaviors.viewsRemoveIconClass={attach:function(i){e(i).find('.dropbutton').once('dropbutton-icon').find('.icon').removeClass('icon')}};i.behaviors.viewsUiCheckboxify={attach:function(t,s){var o=e('[data-drupal-selector="edit-options-expose-button-button"], [data-drupal-selector="edit-options-group-button-button"]').once('views-ui-checkboxify'),n=o.length,r=void 0;for(r=0;r<n;r++){new i.viewsUi.Checkboxifier(o[r])}}};i.behaviors.viewsUiChangeDefaultWidget={attach:function(i){var t=e(i);function r(i){if(e(i.target).prop('checked')){t.find('input.default-radios').parent().hide();t.find('td.any-default-radios-row').parent().hide();t.find('input.default-checkboxes').parent().show()}
else{t.find('input.default-checkboxes').parent().hide();t.find('td.any-default-radios-row').parent().show();t.find('input.default-radios').parent().show()}};t.find('input[name="options[group_info][multiple]"]').on('change',r).trigger('change')}};i.viewsUi.Checkboxifier=function(i){this.$button=e(i);this.$parent=this.$button.parent('div.views-expose, div.views-grouped');this.$input=this.$parent.find('input:checkbox, input:radio');this.$button.hide();this.$parent.find('.exposed-description, .grouped-description').hide();this.$input.on('click',e.proxy(this,'clickHandler'))};i.viewsUi.Checkboxifier.prototype.clickHandler=function(e){this.$button.trigger('click').trigger('submit')};i.behaviors.viewsUiOverrideSelect={attach:function(t){e(t).find('[data-drupal-selector="edit-override-dropdown"]').once('views-ui-override-button-text').each(function(){var s=e(t),r=s.find('[id^=edit-submit]'),o=r.val();r.once('views-ui-override-button-text').on('mouseup',function(){e(this).val(o);return!0});e(this).on('change',function(){var t=e(this);if(t.val()==='default'){r.val(i.t('Apply (all displays)'))}
else if(t.val()==='default_revert'){r.val(i.t('Revert to default'))}
else{r.val(i.t('Apply (this display)'))};var o=s.closest('.ui-dialog-content');o.trigger('dialogButtonsChange')}).trigger('change')})}};i.behaviors.viewsUiHandlerRemoveLink={attach:function(i){var t=e(i);t.find('a.views-remove-link').once('views').on('click',function(i){var r=e(this).attr('id').replace('views-remove-link-','');t.find('#views-row-'+r).hide();t.find('#views-removed-'+r).prop('checked',!0);i.preventDefault()});t.find('a.display-remove-link').once('display').on('click',function(i){var r=e(this).attr('id').replace('display-remove-link-','');t.find('#display-row-'+r).hide();t.find('#display-removed-'+r).prop('checked',!0);i.preventDefault()})}}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/views_ui/js/views-admin.js. */