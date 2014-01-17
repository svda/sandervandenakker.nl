Template.menu.events({
  'click #menu-btn': function (e) {
      $('body').toggleClass('menu-open sidebar-open');
  },
  'click #menu .inner a': function (e) {
    $('body').removeClass('menu-open sidebar-open');
  }
});
