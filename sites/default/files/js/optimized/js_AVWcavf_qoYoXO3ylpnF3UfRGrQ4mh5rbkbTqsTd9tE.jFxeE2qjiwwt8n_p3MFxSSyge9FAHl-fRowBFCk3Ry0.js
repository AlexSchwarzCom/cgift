/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/views/js/ajax_view.js. */
(function(e,i,t){i.behaviors.ViewsAjaxView={};i.behaviors.ViewsAjaxView.attach=function(e,t){if(t&&t.views&&t.views.ajaxViews){var s=t.views.ajaxViews;Object.keys(s||{}).forEach(function(e){i.views.instances[e]=new i.views.ajaxView(s[e])})}};i.behaviors.ViewsAjaxView.detach=function(t,s,a){if(a==='unload'){if(s&&s.views&&s.views.ajaxViews){var r=s.views.ajaxViews;Object.keys(r||{}).forEach(function(a){var o='.js-view-dom-id-'+r[a].view_dom_id;if(e(o,t).length){delete i.views.instances[a];delete s.views.ajaxViews[a]}})}}};i.views={};i.views.instances={};i.views.ajaxView=function(s){var o='.js-view-dom-id-'+s.view_dom_id;this.$view=e(o);var r=t.views.ajax_path;if(r.constructor.toString().indexOf('Array')!==-1){r=r[0]};var a=window.location.search||'';if(a!==''){a=a.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/,'');if(a!==''){a=(/\?/.test(r)?'&':'?')+a}};this.element_settings={url:r+a,submit:s,setClick:!0,event:'click',selector:o,progress:{type:'fullscreen'}};this.settings=s;this.$exposed_form=e('form#views-exposed-form-'+s.view_name.replace(/_/g,'-')+'-'+s.view_display_id.replace(/_/g,'-'));this.$exposed_form.once('exposed-form').each(e.proxy(this.attachExposedFormAjax,this));this.$view.filter(e.proxy(this.filterNestedViews,this)).once('ajax-pager').each(e.proxy(this.attachPagerAjax,this));var n=e.extend({},this.element_settings,{event:'RefreshView',base:this.selector,element:this.$view.get(0)});this.refreshViewAjax=i.ajax(n)};i.views.ajaxView.prototype.attachExposedFormAjax=function(){var t=this;this.exposedFormAjax=[];e('input[type=submit], input[type=image]',this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function(s){var a=e.extend({},t.element_settings,{base:e(this).attr('id'),element:this});t.exposedFormAjax[s]=i.ajax(a)})};i.views.ajaxView.prototype.filterNestedViews=function(){return!this.$view.parents('.view').length};i.views.ajaxView.prototype.attachPagerAjax=function(){this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each(e.proxy(this.attachPagerLinkAjax,this))};i.views.ajaxView.prototype.attachPagerLinkAjax=function(t,s){var n=e(s),r={};var a=n.attr('href');e.extend(r,this.settings,i.Views.parseQueryString(a),i.Views.parseViewArgs(a,this.settings.view_base_path));var o=e.extend({},this.element_settings,{submit:r,base:!1,element:s});this.pagerAjax=i.ajax(o)};i.AjaxCommands.prototype.viewsScrollTop=function(i,t){var a=e(t.selector).offset(),s=t.selector;while(e(s).scrollTop()===0&&e(s).parent()){s=e(s).parent()};if(a.top-10<e(s).scrollTop()){e(s).animate({scrollTop:a.top-10},500)}}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/views/js/ajax_view.js. */