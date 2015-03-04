UsageTracker.register(GoogleAnalytics);

if(Template['tumblrFeedPost']) {
  Template.tumblrFeedPost.rendered = function () {
    var comments = new Disqus({
      mode: 'lazy',
      scrollContainer: '#shoji'
    });
  }
}

