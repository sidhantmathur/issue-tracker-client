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
  // issueEvents.onShowIssues()
  $('#guest').on('submit', authEvents.onSignIn)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create-issue').on('submit', issueEvents.onCreateIssue)

  $('.delete-issues').on('submit', issueEvents.onDeleteIssue)
  $('#delete-issue').on('submit', issueEvents.onDeleteIssue)

  $('#update-issue').on('submit', issueEvents.onUpdateIssue)

  $('.show-issues').on('click', issueEvents.onShowIssues)
  $('#show-issue').on('submit', issueEvents.onShowIssue)

  $('.create-comments').on('submit', issueEvents.onCreateComment)

  $('#delete-comment').on('submit', issueEvents.onDeleteComment)
  $('.delete-comments').on('submit', issueEvents.onDeleteComment)

  $('#update-comment').on('submit', issueEvents.onUpdateComment)

  $('.next').on('click', issueEvents.onNext)
  $('.prev').on('click', issueEvents.onPrev)

  $('#show-profile').on('click', issueEvents.onShowProfile)
})
