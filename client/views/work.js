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
      workFilter.splice(workFilter.indexOf(filter), 1);
    else
      workFilter.push(filter);
    $('.project-row').isotope({ filter: workFilter.join() });
  }
});