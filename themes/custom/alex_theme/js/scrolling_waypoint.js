(function ($) {

/****************** DOCUMENT READY **************************/

  $(document).ready(function() {
  	
          var nav_container = $(".outer-header");
          var nav_logo = $("#logo");
          var nav = $(".main-menus-links");
          var header = $("#header");

          var top_spacing = 0;
          var waypoint_offset = 60;

          var waypoints = nav_container.waypoint({
                handler: function(direction) {

                if (direction == 'down') {

                     header.addClass("sticky-header");

                     // Logo Breite kleiner -> per css
                } else {

                     header.removeClass("sticky-header");

                }
                },
                offset: function() { return -nav.outerHeight()-waypoint_offset; }

           });



       }); // document.ready


})(jQuery);
