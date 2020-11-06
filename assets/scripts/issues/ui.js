'use strict'
const issueEvents = require('./events')
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
  console.log(res.issues)
  const display = $('#issue-display-text')
  const display2 = $('#comment-display')

  for (let i = 0; i < res.issues.length; i++) {
    const issArr = res.issues[i]
    console.log(issArr)

    const list = document.createElement('a')
    $(list).addClass('list-group-item list-group-item-action')
    $(list).attr('data-toggle', 'list')
    $(list).attr('href', '#list-' + issArr._id)
    $(list).html('<h4>' + issArr.title + '</h4><p>' + issArr.text + '</p>')

    const list2 = document.createElement('div')
    $(list2).addClass('tab-pane fade')
    $(list2).attr('id', 'list-' + issArr._id)

    $(list2).html('<form class="create-comments"><h2>Create Comment</h2><textarea type="text" name="text" class="form-control" placeholder="Text"></textarea><input type="hidden" value="' + issArr._id + '" name="issueId" class="form-control" placeholder="Issue ID" required><input type="submit" class="btn btn-primary" value="Create Comment"></form>')
    $('.create-comment').on('submit', issueEvents.onCreateComment)
    $(display2).append(list2)
    $(display).append(list)

    for (let i = 0; i < issArr.comments.length; i++) {
      const commArr = issArr.comments[i]
      console.log(commArr)

      const list3 = document.createElement('li')
      $(list3).addClass('list-group-item')
      $(list3).text(commArr.text)

      $(list2).prepend(list3)
    }
  }
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
  $('.create-comment').trigger('reset')
  console.log(res)
  const display = $('#list-' + res.issue._id)
  const list = document.createElement('li')
  $(list).addClass('list-group-item')

  const lastComment = res.issue.comments[res.issue.comments.length - 1]
  $(list).text(lastComment.text)
  $(display).prepend(list)
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
