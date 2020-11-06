'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const issueEvents = require('./issues/events')

$(() => {
  $('#issue-forms').hide()
  $('#user-forms').hide()
  issueEvents.onShowIssues()
  $('#guest').on('submit', authEvents.onSignIn)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create-issue').on('submit', issueEvents.onCreateIssue)
  $('.delete-issue').on('click', issueEvents.onDeleteIssue)
  $('#update-issue').on('submit', issueEvents.onUpdateIssue)
  $('#show-issues').on('submit', issueEvents.onShowIssues)
  $('#show-issue').on('submit', issueEvents.onShowIssue)

  $('#create-comment').on('submit', issueEvents.onCreateComment)
  $('.create-comments').on('click', issueEvents.onCreateComment)
  $('#delete-comment').on('submit', issueEvents.onDeleteComment)
  $('#update-comment').on('submit', issueEvents.onUpdateComment)
})

// $(window).on('load', function () {
//   $('.create-comments').on('submit', issueEvents.onCreateComment)
// })

// $(window).on('pageshow', function () {
//   $('.create-comments').on('submit', issueEvents.onCreateComment)
// })

// setTimeout(function () {
//   $('.create-comments').on('submit', issueEvents.onCreateComment)
// }, 3000)
