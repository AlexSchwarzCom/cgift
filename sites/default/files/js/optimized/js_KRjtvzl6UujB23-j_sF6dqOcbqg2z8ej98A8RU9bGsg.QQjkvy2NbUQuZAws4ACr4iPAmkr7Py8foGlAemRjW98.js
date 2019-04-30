/* Source and licensing information for the line(s) below can be found at http://localhost:8888/48specials/core/misc/drupal.init.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost:8888/48specials/core/misc/drupal.init.js. */