Template.header.helpers(
  showNavbar: ->
    Meteor.Router.page() isnt 'login'
  active: (page) ->
    id = page.replace(/\//g,'')
    console.log Meteor.Router.page()
    return id == Meteor.Router.page()
  show_login: ->
    return App.config.showLoginLink
  user: ->
    return Meteor.user()
)

