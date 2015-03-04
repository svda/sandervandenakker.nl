var workFilter = new UI.Filter({
  triggerSelector: '.filter-group a',
  targetSelector: '.project'
});

Template.work.events({
  'click .filter-group a': function (e) {
    e.preventDefault();
    var value = $(e.currentTarget).data('filter');
    workFilter.update(value);
    UI.hooks.publish('click_filter');
  }
});