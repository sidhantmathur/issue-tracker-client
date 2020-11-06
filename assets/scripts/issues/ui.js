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
    $(list).html('<h4>' + issues.title + '</h4><br>' + issues.id + '<br></br>' + issues.text)
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
  $('#issue-display-text').html(res.issue.text)
  console.log(res)
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
