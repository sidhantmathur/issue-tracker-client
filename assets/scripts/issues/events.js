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
    .then(addCreateListener)
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

let begIndex = 0
let endIndex = 5

const onNext = function () {
  if ($('.list-group').children(':visible').length < 5) {
    console.log('no more')
    $('.next').prop('disabled', true)
  } else {
    $('.list-group a').css('display', 'none')
    $('.prev').prop('disabled', false)
    begIndex += 5
    endIndex += 5
    $('.list-group a:nth-child(n+' + begIndex + '):nth-child(-n+' + endIndex + ')').css('display', 'block')
  }
}

const onPrev = function () {
  if (begIndex <= 0) {
    console.log('no more')
    $('.prev').prop('disabled', true)
  } else {
    $('.list-group a').css('display', 'none')
    $('.next').prop('disabled', false)
    begIndex -= 5
    endIndex -= 5
    $('.list-group a:nth-child(n+' + begIndex + '):nth-child(-n+' + endIndex + ')').css('display', 'block')
  }
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
  addCreateListener,
  onNext,
  onPrev
}
