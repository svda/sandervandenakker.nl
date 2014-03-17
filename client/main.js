c2o.Tracker.register(GoogleAnalyticsTracker, {account: 'UA-5140591-3'})
//c2o.Tracker.register(MixpanelTracker, {account: 'b20401a9f40c03a56f2a135dfb553a99'})

Template.main.helpers({
  currentView: function () {
    return Router.getData();
  }
});

Template.main.events({
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});

Template.work.rendered = function () {
  var $container = $('.project-row');
  $container.isotope({
    itemSelector: '.project'
  });
};

var workFilter = [];
Template.work.events({
  'click .filter-group a': function (e) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('selected');
    var filter = $(e.currentTarget).data('filter');
    if(workFilter.indexOf(filter) != -1)
      workFilter.pop(filter);
    else
      workFilter.push(filter);
    $('.project-row').isotope({ filter: workFilter.join() });
  }
});

var commentsLoaded = false;
Template.tumblrFeedPost.rendered = function () {
  commentsLoaded = false;
  $(document).on('scroll', function (e) {
    if(isScrolledIntoView('.comments') && !commentsLoaded) {
      commentsLoaded = true;
      var thread = $('<div id="disqus_thread">').appendTo('article.post');
      var disqus_shortname = Meteor.settings.public.disqus.shortname; // required: replace example with your forum shortname
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  });
}

// Interface helpers

isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('a[role=navigation]').live( 'click', function (e) {
  $('html,body').animate({scrollTop: $('body').offset().top});
});