Template.layout.helpers({
  /**
   * Blaze automatically maps these to html attributes in the layout template.
   */
  attributes: function () {
    var attributes = {
      class: ''
    };
    var route = Router && Router.current() && Router.current().route;
    if (route)
      attributes.class += 'view-' + route.getName();
    return attributes;
  }
});

//$('a[role=navigation]').on( 'click', function (e) {
  //$('html,body').animate({scrollTop: $('body').offset().top});
//});

Template.layout.scrollToTop = function () {
  var offset = $('#shoji').offset();
  if(offset) {
    $('#shoji').animate({scrollTop: $('body').offset().top});
  }
}

Template.layout.events({
  'click #washi': function (e) {
    $('body').removeClass('menu-open');
    $('.menu.animated').removeClass('animate-in');
  }
});

Template.body.events({
  'click a[role=navigation]': function (e) {
    e.preventDefault();
    Template.layout.scrollToTop();
  }
});
