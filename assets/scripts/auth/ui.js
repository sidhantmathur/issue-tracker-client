'use strict'

const store = require('./../store')
const issueEvents = require('./../issues/events')

const onSignUpSuccess = function (res) {
  $('.alert').show()
  $('#auth-display-text').text('You Signed Up ' + res.user.email)
  $('#sign-up').trigger('reset')
}

// consolidate these show/hide ids with a "hidden on sign in class"

const onSignInSuccess = function (res) {
  store.user = res.user
  $('.alert').show()
  $('#auth-display-text').text('Sign In Successful ' + res.user.email)
  $('#sign-in').trigger('reset')

  $('#auth-display').hide()
  $('#pub-display').show()

  $('#signed-in-nav').show()

  // $('body').css('background-color', '#fff')
  $('body').css('background-image', 'none')

  issueEvents.onShowIssues()
}

const onChangePassSuccess = function () {
  $('#auth-display-text').text('You Changed Passwords')
  $('#change-pass').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#auth-display-text').text('You Signed Out')

  $('#auth-display').show()
  $('#pub-display').hide()
  $('#user-display').hide()
  $('#user-settings').hide()
  $('#signed-in-nav').hide()

  $('#issue-display-text').empty()
  $('#comment-display').empty()
  $('#user-issues').empty()

  $('body').css('background-image', "url('public/Vorderrhein.svg')")
  $('.alert').show()
}

const onSignOutError = function (error) {
  $('#auth-display-text').text('Error Signing Out: ' + error.statusText + ' Status Code: ' + error.status)
}

const onChangePassError = function (error) {
  $('#auth-display-text').text('Error Changing Password: ' + error.statusText + ' Status Code: ' + error.status)
  $('#change-pass').trigger('reset')
}

const onSignUpError = function (error) {
  $('.alert').show()
  $('#auth-display-text').text('Error Signing Up: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-up').trigger('reset')
}

const onSignInError = function (error) {
  $('.alert').show()
  $('#auth-display-text').text('Error Signing In: ' + error.statusText + ' Status Code: ' + error.status)
  $('#sign-in').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePassSuccess,
  onSignOutSuccess,
  onSignOutError,
  onChangePassError,
  onSignUpError,
  onSignInError
}
