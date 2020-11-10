'use strict'
const api = require('./api')
const ui = require('./ui')
const issueEvents = require('../issues/events')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .then(issueEvents.onShowIssues())
    .then(issueEvents.addQueueListeners)
    .catch(ui.onSignInError)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}

const onShowSettings = function () {
  $('#user-settings').show()
  $('#user-display').hide()
  $('#pub-display').hide()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onShowSettings
}
