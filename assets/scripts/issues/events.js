'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createIssue(formData)
    .then(ui.onCreateIssueSuccess)
    .catch(ui.onCreateIssueError)
}

const onDeleteIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onUpdateIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassError)
}

const onShowIssues = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}

const onShowIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}

const onCreateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createIssue(formData)
    .then(ui.onCreateIssueSuccess)
    .catch(ui.onCreateIssueError)
}

const onDeleteComment = function (event) {
  event.preventDefault()

  // turn = true
  // console.log('login inside ' + turn)

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onUpdateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassError)
}

module.exports = {
  onCreateIssue,
  onDeleteIssue,
  onUpdateIssue,
  onShowIssues,
  onShowIssue,
  onCreateComment,
  onDeleteComment,
  onUpdateComment
}
