###
  Router and controllers.
###

do () ->

  view = (slug) ->
    if slug is 'login'
      App.config.showLoginLink = true

    c2o.Tracker.track slug
    if Template[slug]
      return slug
    '404'

  Meteor.Router.add(
    '/': -> view 'home',
    '/:slug': (slug) -> view slug
  )
