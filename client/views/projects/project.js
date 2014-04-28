Template.project.helpers({
  project: function () {
    console.log(Session.get('project'));
    return Session.get('project');
  }
});