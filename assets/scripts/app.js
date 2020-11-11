'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const issueEvents = require('./issues/events')

$(() => {
  $('#signed-in-nav').hide()
  $('#sign-up').hide()
  $('#user-message').hide()
  $('#pub-display').hide()
  $('#user-display').hide()
  $('#user-settings').hide()
  $('#trello-disp').hide()
  $('#edit').hide()
  $('#trello-disp2').hide()
  $('.update-issues').hide()

  $('#guest').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create-issue').on('submit', issueEvents.onCreateIssue)
  $('.delete-issues').on('submit', issueEvents.onDeleteIssue)
  $('.create-comments').on('submit', issueEvents.onCreateComment)
  // $('.delete-comments').on('submit', issueEvents.onDeleteComment)
  $('#update-comment').on('submit', issueEvents.onUpdateComment)

  $('.next').on('click', issueEvents.onNext)
  $('.prev').on('click', issueEvents.onPrev)

  $('#profile').on('click', issueEvents.onShowProfile)
  $('#queue').on('click', issueEvents.onShowIssues)
  $('#settings').on('click', authEvents.onShowSettings)

  $('#trello').on('click', issueEvents.onShowTrello)

  $('#edit').on('click', issueEvents.onEditTrello)

  $('#trello2').on('click', issueEvents.onShowTrello2)

  $('#auth-toggle').on('click', authEvents.onAuthToggle)
})
