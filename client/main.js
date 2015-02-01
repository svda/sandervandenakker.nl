//c2o.Tracker.register(GoogleAnalyticsTracker, {account: 'UA-5140591-3'})
//c2o.Tracker.register(MixpanelTracker, {account: 'b20401a9f40c03a56f2a135dfb553a99'})

SEO.configure({
  baseTitle: ' - Sander van den Akker'
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

Template.tumblrFeedTeaser.rendered = function () {
  Meteor.defer(function() {
    $('.list.animated').addClass('animate-in');
  });
}

isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('a[role=navigation]').on( 'click', function (e) {
  //$('html,body').animate({scrollTop: $('body').offset().top});
});