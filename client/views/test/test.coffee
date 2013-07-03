do() ->

  Template.test.events =
    'click button': (e) ->
      #e.preventDefault()
      #Meteor.http.post '/api/v1/test', {}, ->
      #  console.log 'ok'
