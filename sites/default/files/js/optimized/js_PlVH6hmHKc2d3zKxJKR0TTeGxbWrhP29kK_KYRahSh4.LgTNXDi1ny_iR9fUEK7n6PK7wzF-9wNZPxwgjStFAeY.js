/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/misc/active-link.js. */
(function(t,a){t.behaviors.activeLinks={attach:function(t){var r=a.path,c=JSON.stringify(r.currentQuery),s=r.currentQuery?'[data-drupal-link-query=\''+c+'\']':':not([data-drupal-link-query])',i=['[data-drupal-link-system-path="'+r.currentPath+'"]'],n=void 0;if(r.isFront){i.push('[data-drupal-link-system-path="<front>"]')};n=[].concat(i.map(function(t){return t+':not([hreflang])'}),i.map(function(t){return t+'[hreflang="'+r.currentLanguage+'"]'}));n=n.map(function(t){return t+s});var u=t.querySelectorAll(n.join(',')),l=u.length;for(var e=0;e<l;e++){u[e].classList.add('is-active')}},detach:function(t,n,e){if(e==='unload'){var r=t.querySelectorAll('[data-drupal-link-system-path].is-active'),i=r.length;for(var a=0;a<i;a++){r[a].classList.remove('is-active')}}}}})(Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/misc/active-link.js. */