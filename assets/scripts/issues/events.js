'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateIssue = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createIssue(formData)
    .then(ui.onCreateIssueSuccess)
    .then(addQueueListeners)
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

const addQueueListeners = function () {
  $('.create-comments').on('submit', onCreateComment)
  $('.delete-comments').on('submit', onDeleteComment)
}

const addProfileListeners = function () {
  $('.delete-issues').on('submit', onDeleteIssue)
  $('.update-issues').on('submit', onUpdateIssue)
}

// const addChecker = function () {
//   console.log(store.user)
//   // // https://stackoverflow.com/a/39018563/9190545
//   // const $inputValues = $('.comm-own').map(function () {
//   //   return $(this).val()
//   // })

//   // console.log($inputValues)

//   // for (let i = 0; i < $inputValues.length; i++) {
//   //   if (store.user._id === $inputValues[i]) {
//   //     console.log('this comment is yours')
//   //   }
//   // }
// }

// no form except token. Removing forms allows .then after sign in
const onShowIssues = function () {
  api.showIssues()
    .then(ui.onShowIssuesSuccess)
    // .then(addChecker)
    // .then(addCreateListener)
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

const onShowProfile = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.showProfile(formData)
    .then(ui.onShowProfileSuccess)
    .then(addProfileListeners)
    .catch(ui.onShowProfileError)
}

let begIndex = 1
let endIndex = 5

const onNext = function () {
  if ($('.list-group').children(':visible').length < 5) {
    console.log('no more')
    $('.next').prop('disabled', true)
  } else if (($('.list-group').children().length) <= (endIndex + 5)) {
    console.log('weird conditions met')
    $('.next').prop('disabled', true)
    $('.list-group a').css('display', 'none')
    $('.prev').prop('disabled', false)
    begIndex += 5
    endIndex += 5
    $('.list-group a:nth-child(n+' + begIndex + '):nth-child(-n+' + endIndex + ')').css('display', 'block')
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
  } else if (begIndex <= 6) {
    $('.list-group a').css('display', 'none')
    $('.prev').prop('disabled', true)
    begIndex -= 5
    endIndex -= 5
    $('.list-group a:nth-child(n+' + begIndex + '):nth-child(-n+' + endIndex + ')').css('display', 'block')
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
  addQueueListeners,
  addProfileListeners,
  onNext,
  onPrev,
  onShowProfile
}
