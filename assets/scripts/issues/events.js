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
  api.deleteIssue(formData)
    .then(ui.onDeleteIssueSuccess)
    .catch(ui.onDeleteIssueError)
}

const onUpdateIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateIssue(formData)
    .then(ui.onUpdateIssueSuccess)
    .catch(ui.onUpdateIssueError)
}

const addCreateListener = function () {
  $('.create-comments').on('submit', onCreateComment)
}

// no form except token. Removing forms allows .then after sign in
const onShowIssues = function () {
  // event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  api.showIssues()
    .then(ui.onShowIssuesSuccess)
    .catch(ui.onShowIssuesError)
}

const onShowIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.showIssue(formData)
    .then(ui.onShowIssueSuccess)
    .catch(ui.onShowIssueError)
}

const onCreateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createComment(formData)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentError)
}

const onDeleteComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteComment(formData)
    .then(ui.onDeleteCommentSuccess)
    .catch(ui.onDeleteCommentError)
}

const onUpdateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateComment(formData)
    .then(ui.onUpdateCommentSuccess)
    .catch(ui.onUpdateCommentError)
}

module.exports = {
  onCreateIssue,
  onDeleteIssue,
  onUpdateIssue,
  onShowIssues,
  onShowIssue,
  onCreateComment,
  onDeleteComment,
  onUpdateComment,
  addCreateListener
}
