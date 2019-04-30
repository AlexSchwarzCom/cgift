/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/modules/webform/js/webform.states.js. */
(function(e,r){'use strict';r.webform=r.webform||{};r.webform.states=r.webform.states||{};r.webform.states.slideDown=r.webform.states.slideDown||{};r.webform.states.slideDown.duration='slow';r.webform.states.slideUp=r.webform.states.slideUp||{};r.webform.states.slideUp.duration='fast';e.fn.hasData=function(e){return(typeof this.data(e)!=='undefined')};e.fn.isWebform=function(){return e(this).closest('form[id^="webform"]').length?!0:!1};r.states.Trigger.states.empty.change=function(){return this.val()===''};r.states.Dependent.comparisons.Object=function(e,r){if('pattern' in e){return(new RegExp(e.pattern)).test(r)}
else if('!pattern' in e){return!((new RegExp(e['!pattern'])).test(r))}
else if('less' in e){return(r!==''&&e.less>r)}
else if('greater' in e){return(r!==''&&e.greater<r)}
else{return e.indexOf(r)!==!1}};var t=e(document);t.on('state:required',function(r){if(r.trigger&&e(r.target).isWebform()){var t=e(r.target);if(r.value){t.find('input[type="file"]').attr({'required':'required','aria-required':'true'})}
else{t.find('input[type="file"]').removeAttr('required aria-required')};if(t.is('.js-webform-type-radios, .js-webform-type-checkboxes')){if(r.value){t.find('legend span').addClass('js-form-required form-required')}
else{t.find('legend span').removeClass('js-form-required form-required')}};if(t.is('.js-webform-type-radios, .js-form-type-webform-radios-other')){if(r.value){t.find('input[type="radio"]').attr({'required':'required','aria-required':'true'})}
else{t.find('input[type="radio"]').removeAttr('required aria-required')}};if(t.is('.js-webform-type-checkboxes, .js-form-type-webform-checkboxes-other')){var a=t.find('input[type="checkbox"]');if(r.value){a.bind('click',i);if(!a.is(':checked')){a.attr({'required':'required','aria-required':'true'})}}
else{a.removeAttr('required aria-required').unbind('click',i)}}}});t.on('state:readonly',function(r){if(r.trigger&&e(r.target).isWebform()){e(r.target).prop('readonly',r.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly',r.value).find('input, textarea').prop('readonly',r.value)}});t.on('state:visible state:visible-slide',function(r){if(r.trigger&&e(r.target).isWebform()){if(r.value){e(':input',r.target).addBack().each(function(){o(this);a(this)})}
else{e(':input',r.target).addBack().each(function(){s(this);f(this);a(this)})}}});t.bind('state:visible-slide',function(t){if(t.trigger&&e(t.target).isWebform()){var i=t.value?'slideDown':'slideUp',a=r.webform.states[i].duration;e(t.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[i](a)}});r.states.State.aliases['invisible-slide']='!visible-slide';t.on('state:disabled',function(r){if(r.trigger&&e(r.target).isWebform()){e(r.target).prop('disabled',r.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled',r.value).find('select, input, textarea').prop('disabled',r.value);e(r.target).trigger('webform:disabled').find('select, input, textarea').trigger('webform:disabled')}});function i(){var r=e(this).closest('.js-webform-type-checkboxes, .js-form-type-webform-checkboxes-other').find('input[type="checkbox"]');if(r.is(':checked')){r.removeAttr('required aria-required')}
else{r.attr({'required':'required','aria-required':'true'})}};function a(r){var a=e(r),i=r.type,s=r.tagName.toLowerCase(),t=['webform.states'];if(i==='checkbox'||i==='radio'){a.trigger('change',t).trigger('blur',t)}
else if(s==='select'){a.trigger('change',t).trigger('blur',t)}
else if(i!=='submit'&&i!=='button'){a.trigger('input',t).trigger('change',t).trigger('keydown',t).trigger('keyup',t).trigger('blur',t)}};function s(r){var t=e(r),i=r.type,s=r.tagName.toLowerCase();if(t.prop('required')&&!t.hasData('webform-required')){t.data('webform-required',!0)};if(!t.hasData('webform-value')){if(i==='checkbox'||i==='radio'){t.data('webform-value',t.prop('checked'))}
else if(s==='select'){var a=[];t.find('option:selected').each(function(e,r){a[e]=r.value});t.data('webform-value',a)}
else if(i!=='submit'&&i!=='button'){t.data('webform-value',r.value)}}};function o(r){var t=e(r),a=t.data('webform-value');if(typeof a!=='undefined'){var i=r.type,o=r.tagName.toLowerCase();if(i==='checkbox'||i==='radio'){t.prop('checked',a)}
else if(o==='select'){e.each(a,function(e,r){t.find('option[value=\''+r+'\']').prop('selected',!0)})}
else if(i!=='submit'&&i!=='button'){r.value=a};t.removeData('webform-value')};var s=t.data('webform-required');if(typeof s!=='undefined'){if(s){t.prop('required',!0)};t.removeData('webform-required')}};function f(r){var i=e(r);if(i.closest('[data-webform-states-no-clear]').length){return};var t=r.type,a=r.tagName.toLowerCase();if(t==='checkbox'||t==='radio'){i.prop('checked',!1)}
else if(a==='select'){if(i.find('option[value=""]').length){i.val('')}
else{r.selectedIndex=-1}}
else if(t!=='submit'&&t!=='button'){r.value=(t==='color')?'#000000':''};i.prop('required',!1)}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/modules/webform/js/webform.states.js. */