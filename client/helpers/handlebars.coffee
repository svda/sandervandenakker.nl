Meteor._original_def_template = Meteor._def_template
Meteor._def_template = (name, raw_func) ->
  window.Template = window.Template || {}

  if Template && Template[name]
    original = Template[name]
    delete Template[name]

  result = Meteor._original_def_template.apply this, arguments

  if original
    _.extend(Template[name], original)

  result

Handlebars.registerHelper 'is_user', () ->
  Meteor.userId() isnt null