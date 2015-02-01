Projects = new Meteor.Collection('projects');

if(Meteor.isServer) {

  Projects.allow({
    insert: function (userId, contentObject) {
      return false
    },
    update: function (userId, contentObjects, fields, modifier) {
      _.all(contentObjects, function (contentObject) {
        return false
      })
    },
    remove: function (userId, contentObjects) {
      _.all(contentObjects, function (contentObject) {
        return false
      })
    }
  });

  Meteor.publish('projects', function () {
    return projects.find();
  });

}