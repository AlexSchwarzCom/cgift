/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/modules/history/js/history.js. */
(function(e,r,s,a){var n=parseInt(s.user.uid,10),i=2592000,u=Math.round(new Date().getTime()/1000)-i,t=!1;if(s.history&&s.history.lastReadTimestamps){t=s.history.lastReadTimestamps};r.history={fetchTimestamps:function(s,i){if(t){i();return};e.ajax({url:r.url('history/get_node_read_timestamps'),type:'POST',data:{'node_ids[]':s},dataType:'json',success:function(t){Object.keys(t||{}).forEach(function(e){a.setItem('Drupal.history.'+n+'.'+e,t[e])});i()}})},getLastRead:function(e){if(t&&t[e]){return parseInt(t[e],10)};return parseInt(a.getItem('Drupal.history.'+n+'.'+e)||0,10)},markAsRead:function(s){e.ajax({url:r.url('history/'+s+'/read'),type:'POST',dataType:'json',success:function(e){if(t&&t[s]){return};a.setItem('Drupal.history.'+n+'.'+s,e)}})},needsServerCheck:function(e,r){if(r<u){return!1};if(t&&t[e]){return r>parseInt(t[e],10)};var s=parseInt(a.getItem('Drupal.history.'+n+'.'+e)||0,10);return r>s}}})(jQuery,Drupal,drupalSettings,window.localStorage);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/modules/history/js/history.js. */