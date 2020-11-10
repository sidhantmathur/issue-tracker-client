
'use strict'
const issueEvents = require('./events')
// const store = require('./../store')

const onCreateIssueSuccess = function (res) {
  $('#create-issue').trigger('reset')
  console.log(res)
  const display = $('#issue-display-text')
  const display2 = $('#comment-display')
  const list = document.createElement('a')
  const list2 = document.createElement('div')
  $(list).addClass('list-group-item list-group-item-action')
  $(list).attr('data-toggle', 'list')
  $(list).attr('href', '#list-' + res.issue._id)

  $(list2).addClass('tab-pane fade')
  $(list2).attr('id', 'list-' + res.issue._id)

  $(list).html('<h4>' + res.issue.title + '</h4><p>' + res.issue.text + '</p><h6>' + res.issue.tag + '</h6>')

  $(list2).html('<form class="create-comments"><h2>Create Comment</h2><textarea type="text" name="text" class="form-control" placeholder="Text"></textarea><input type="hidden" value="' +
  res.issue._id + '" name="issueId" class="form-control" placeholder="Issue ID" required><input type="submit" class="btn btn-primary" value="Create Comment"></form>')
  $(display).prepend(list)
  $(display2.prepend(list2))

  issueEvents.begIndex = 1
  issueEvents.endIndex = 5
  $('.list-group a:nth-child(n+1):nth-child(-n+5)').css('display', 'block')
  $('.prev').prop('disabled', true)
  $('.next').prop('disabled', false)
}

const onDeleteIssueSuccess = function (res) {
  $('#auth-display-text').text('Issue Deleted!')
  $('#delete-issue').trigger('reset')
  console.log(res)
}

const onUpdateIssueSuccess = function (res) {
  $('#auth-display-text').text('Issue Updated!')
  $('#update-issue').trigger('reset')
  console.log(res)
}

const onShowIssuesSuccess = function (res) {
  // if (!store.user) {
  //   console.log('no store yet in UI')
  //   console.log(store.user)
  // } else {
  //   console.log('store is here')
  //   console.log(store.user)
  // }
  // $('#show-issues').trigger('reset')
  console.log(res)
  // console.log(res.issues)
  const display = $('#issue-display-text')
  const display2 = $('#comment-display')

  $('#user-settings').hide()
  $('#user-display').hide()
  $('#pub-display').show()

  $('#nav-queue').addClass('active')
  $('#nav-profile').removeClass('active')
  $('#nav-settings').removeClass('active')

  $(display).empty()
  $(display2).empty()

  // const thing = res.issues.slice(0, 5)

  // console.log(thing)

  for (let i = 0; i < res.issues.length; i++) {
    const issArr = res.issues[i]

    const list = document.createElement('a')
    $(list).addClass('list-group-item list-group-item-action')
    $(list).attr('data-toggle', 'list')
    $(list).attr('href', '#list-' + issArr._id)
    $(list).html('<h4>' + issArr.title + '</h4><p>' + issArr.text + '</p><h6>' + issArr.tag + '</h6>')

    const list2 = document.createElement('div')
    $(list2).addClass('tab-pane fade')
    $(list2).attr('id', 'list-' + issArr._id)

    $(list2).html('<form class="create-comments"><h2>Create Comment</h2><textarea type="text" name="text" class="form-control" placeholder="Text"></textarea><input type="hidden" value="' + issArr._id + '" name="issueId" class="form-control" placeholder="Issue ID" required><input type="submit" class="btn btn-primary" value="Create Comment"></form>')
    $('.create-comment').on('submit', issueEvents.onCreateComment)
    $(display2).append(list2)
    $(display).append(list)

    // console.log(store.user._id)

    for (let i = 0; i < issArr.comments.length; i++) {
      const commArr = issArr.comments[i]
      // console.log(commArr.owner)
      // console.log('store id = ' + store.user._id)
      const list3 = document.createElement('li')
      $(list3).addClass('list-group-item')

      $(list3).html('<p>' + commArr.text + '</p>')

      // if (store.user._id == commArr.owner) {
      //   $(list3).html('<p>' + commArr.text + '</p><form class="delete-comments"><input type="hidden" class="comm-own" value="' + commArr.owner + '"><input type="hidden" name="issueId" value="' + issArr._id + '"><input type="hidden" name="commentId" value="' + commArr._id + '"><input type="submit" value="Delete Comment" class="btn btn-danger"></form>')
      // } else {
      //   $(list3).html('<p>' + commArr.text + '</p>')
      // }

      $(list2).prepend(list3)
    }
  }

  issueEvents.begIndex = 1
  issueEvents.endIndex = 5
  $('.list-group a:nth-child(n+1):nth-child(-n+5)').css('display', 'block')
  $('.prev').prop('disabled', true)
  $('.next').prop('disabled', false)
}

const onCreateCommentSuccess = function (res) {
  $('.create-comments').trigger('reset')
  console.log(res)
  const display = $('#list-' + res.issue._id)
  const list = document.createElement('li')
  $(list).addClass('list-group-item')

  const lastComment = res.issue.comments[res.issue.comments.length - 1]
  $(list).html('<p>' + lastComment.text + '</p>')
  $(display).prepend(list)
}

const onDeleteCommentSuccess = function (res) {
  // $('.delete-comments').trigger('reset')
  $('#auth-display-text').text('Comment Updated!')
  console.log(res)
}

const onUpdateCommentSuccess = function (res) {
  // $('.update-comments').trigger('reset')
  $('#auth-display-text').text('Comment Updated!')
  console.log(res)
}

const onCreateIssueError = function (error) {
  $('#create-issue').trigger('reset')
  $('#auth-display-text').text('Error Creating Issue: ' + error.statusText + ' Status Code: ' + error.status)
  console.log(error)
}

const onDeleteIssueError = function (error) {
  $('#auth-display-text').text('Error Deleting Issue: ' + error.statusText + ' Status Code: ' + error.status)
  console.log(error)
}

const onUpdateIssueError = function (error) {
  $('.update-issues').trigger('reset')
  $('#auth-display-text').text('Error Updating Issue: ' + error.statusText + ' Status Code: ' + error.status)
  console.log(error)
}

const onShowIssuesError = function (error) {
  $('#auth-display-text').text('Error Getting Issues: ' + error.statusText + ' Status Code: ' + error.status)
  console.log(error)
}

const onCreateCommentError = function (error) {
  $('.create-comment').trigger('reset')
  console.log(error)
}

const onDeleteCommentError = function (error) {
  // $('.delete-comment').trigger('reset')
  console.log(error)
}

const onUpdateCommentError = function (error) {
  // $('.update-comment').trigger('reset')
  console.log(error)
}

const onShowProfileSuccess = function (res) {
  console.log(res)
  const display = $('#user-issues')

  $('#user-display').show()
  $('#user-settings').hide()
  $('#pub-display').hide()

  $('#nav-queue').removeClass('active')
  $('#nav-profile').addClass('active')
  $('#nav-settings').removeClass('active')

  $(display).show()

  console.log(res)

  $(display).empty()

  if (res.issues.length === 0) {
    $(display).html('<p>No Issues Yet!</p>')
  }

  for (let i = 0; i < res.issues.length; i++) {
    const issArr = res.issues[i]

    const list = document.createElement('li')
    $(list).addClass('list-group-item')
    $(list).html('<h4>' + issArr.title + '</h4><p>' + issArr.text + '</p><h6>' + issArr.tag + '</h6>' + '<form class="delete-issues"><input type="hidden" name="issueId" value="' + issArr._id + '"><input type="submit" value="Delete Issue" class="btn btn-danger"></form>' + '<a class="btn btn-warning" data-toggle="collapse" href="#update-collapse-' + issArr._id + '" role="button" aria-expanded="false" aria-controls="update-collapse">Update Issue</a><div class="collapse" id="update-collapse-' + issArr._id + '"><div class="card card-body"><form class="update-issues"><input type="hidden" name="issueId" value="' + issArr._id + '"><input type="text" name="title" class="form-control" placeholder="Title"><textarea type="text" name="text" class="form-control" placeholder="Body Text"></textarea><select name="tag" class="form-control"><option>New</option><option>In Progress</option><option>Solved</option><input type="submit" class="btn btn-warning" value="Update Issue"></form>')

    $(display).append(list)
  }
}
const onShowProfileError = function (error) {
  console.log(error)
}

module.exports = {
  onCreateIssueSuccess,
  onDeleteIssueSuccess,
  onUpdateIssueSuccess,
  onShowIssuesSuccess,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
  onUpdateCommentSuccess,
  onCreateIssueError,
  onDeleteIssueError,
  onUpdateIssueError,
  onShowIssuesError,
  onCreateCommentError,
  onDeleteCommentError,
  onUpdateCommentError,
  onShowProfileError,
  onShowProfileSuccess
}
