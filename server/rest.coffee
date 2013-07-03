Meteor.startup ->
  Meteor.Router.add '/api/v1/test/get', 'GET', ->
    "REST GET test called with " + this.request.query.testme + "\n"
  Meteor.Router.add '/api/v1/test/post', 'POST', ->
    "REST POST test called with " + this.request.body.testme + "\n"
  Meteor.Router.add '/api/v1/test/put', 'PUT', ->
    "REST PUT test called with " + this.request.body.testme + "\n"
  Meteor.Router.add '/api/v1/test/delete', 'DELETE', ->
    "REST DELETE test called with " + this.request.body.testme + "\n"