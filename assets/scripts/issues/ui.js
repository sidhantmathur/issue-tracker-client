'use strict'

// const store = require('./../store')

const onCreateIssueSuccess = function (res) {
  $('#create-issue').trigger('reset')
  console.log(res)
}

const onDeleteIssueSuccess = function (res) {
  $('#delete-issue').trigger('reset')
  console.log(res)
}

const onUpdateIssueSuccess = function (res) {
  $('#update-issue').trigger('reset')
  console.log(res)
}

const onShowIssuesSuccess = function (res) {
  $('#show-issues').trigger('reset')
  console.log(res)
  const display = $('#issue-display-text')
  res.issues.forEach(issues => {
    const list = document.createElement('div')
    $(list).addClass('card')
    $(list).html('<div class="card-body"><h4>' + issues.title + '</h4><p>' + issues.text + '</p></div>')
    // + '<button class="btn btn-primary">Comments</button>' + issues.comments)
    $(display).append(list)
    // res.isses.comments.forEach(comments => {
    //   const list2 = document.createElement('li')
    //   $(list2).addClass('list-group-item')
    //   $(list2).text(issues.comments.text)
    //   $(list).append(list2)
    // })
  })
}

const onShowIssueSuccess = function (res) {
  $('#show-issue').trigger('reset')
  console.log(res)
  // $('#issue-display-text').html(res.issue.text)

  const display = $('#issue-display-text')

  const card = document.createElement('div')
  $(card).addClass('card')
  $(card).html('<div class="card-body"><h4 class="card-title">' + res.issue.title +
  '</h4><p class="card-text">' + res.issue.text + '</p><form class="delete-issue"><input type="hidden" name="issueId" value="' +
  res.issue._id + '"><button type="submit" class="btn btn-danger">Delete Issue</button></form></div>')
  $(display).append(card)

  res.issue.comments.forEach(comments => {
    const list = document.createElement('li')
    $(list).addClass('list-group-item')
    $(list).text(comments.text)
    $(card).append(list)
  })
}

const onCreateCommentSuccess = function (res) {
  $('#create-comment').trigger('reset')
  console.log(res)
}

const onDeleteCommentSuccess = function (res) {
  $('#delete-comment').trigger('reset')
  console.log(res)
}

const onUpdateCommentSuccess = function (res) {
  $('#update-comment').trigger('reset')
  console.log(res)
}

const onCreateIssueError = function (error) {
  $('#create-issue').trigger('reset')
  console.log(error)
}

const onDeleteIssueError = function (error) {
  $('#delete-issue').trigger('reset')
  console.log(error)
}

const onUpdateIssueError = function (error) {
  $('#update-issue').trigger('reset')
  console.log(error)
}

const onShowIssuesError = function (error) {
  $('#show-issues').trigger('reset')
  console.log(error)
}

const onShowIssueError = function (error) {
  $('#show-issue').trigger('reset')
  console.log(error)
}

const onCreateCommentError = function (error) {
  $('#create-comment').trigger('reset')
  console.log(error)
}

const onDeleteCommentError = function (error) {
  $('#delete-comment').trigger('reset')
  console.log(error)
}

const onUpdateCommentError = function (error) {
  $('#update-comment').trigger('reset')
  console.log(error)
}

module.exports = {
  onCreateIssueSuccess,
  onDeleteIssueSuccess,
  onUpdateIssueSuccess,
  onShowIssuesSuccess,
  onShowIssueSuccess,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
  onUpdateCommentSuccess,
  onCreateIssueError,
  onDeleteIssueError,
  onUpdateIssueError,
  onShowIssuesError,
  onShowIssueError,
  onCreateCommentError,
  onDeleteCommentError,
  onUpdateCommentError
}
