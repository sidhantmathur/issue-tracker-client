'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

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
  $('#welcome').text('Welcome ' + store.user.email)

  // $('#nav-queue').removeClass('active')
  // $('#nav-profile').removeClass('active')
  // $('#nav-settings').addClass('active')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onShowSettings
}
