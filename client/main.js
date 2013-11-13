c2o.Tracker.register(GoogleAnalyticsTracker, {account: 'UA-5140591-3'})
//c2o.Tracker.register(MixpanelTracker, {account: 'b20401a9f40c03a56f2a135dfb553a99'})

Template.main.helpers({
  currentView: function () {
    return Router.getData();
  }
});

Template.main.events({
  'click #content-nav a': function (e) {
    e.preventDefault();
    slug = $(e.currentTarget).attr('href');
    Router.go(slug);
    c2o.Tracker.track('Navigate to ' + slug, { context: 'menu' });
  },
  'click #sidebar-btn': function (e) {
    c2o.Sidebar.toggle();
  },
  'click #page': function (e) {
    if( typeof e.target.id == 'undefined' ||
        ( e.target.id != 'sidebar-btn' &&
          e.target.parentNode.id != 'sidebar-btn' ) ) {
      //c2o.Sidebar.close();
    }
  }
});

Meteor.startup( function () {

  c2o.Module.hook(
    'transitioner_end', function (args) {
      $('html, body').animate({scrollTop: $('main').offset().top}, 250);
      init_masonry();
    }
  );

  c2o.Module.hook(
    'blog_view_post', function (args) {
      dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://sandervandenakker.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      TL.info("Disqus loaded through view hook","Blog");
    }
  );

  Template.work.rendered = function () {
    initMasonry();

    // Hammer test
    $('.teaser').on('hold tap swipe doubletap transformstart transform transformend dragstart drag dragend swipe release', function (event) {
      event.preventDefault();
      console.log("Type: " + event.type + ", Fingers: " + event.touches.length + ", Direction: " + event.direction + "<br/>");
    });
  }

});

// Interface helpers
initMasonry = function () {
  var $container = $('.masonry');
  var gutter = 20
  var min_width = 270
  $container.imagesLoaded( function() {
    $container.masonry({
      itemSelector : '.brick',
      gutterWidth: gutter,
      isAnimated: true,
      columnWidth: function (containerWidth) {
        var num_of_boxes = (containerWidth/min_width | 0);
        var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0);
        if(containerWidth < min_width)
          box_width = containerWidth;

        $('.brick').width(box_width);
        return box_width;
      }
    });
  });
}

$('a[role=navigation]').live('click', function (e) {
  $('html,body').animate({scrollTop: $('body').offset().top});
});