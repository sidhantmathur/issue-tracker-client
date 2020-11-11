'use strict'
const config = require('../config')
const store = require('../store')

const createIssue = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      issue: {
        text: formData.text,
        title: formData.title,
        tag: formData.tag
      }
    }
  })
}

const deleteIssue = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues/' + formData.issueId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateIssue = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues/' + formData.issueId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      issue: {
        text: formData.text,
        title: formData.title,
        tag: formData.tag
      }
    }
  })
}

const showIssues = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues',
    method: 'GET'
  })
}

const showTrello = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues-user',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showTrello2 = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues',
    method: 'GET'
  })
}

const showProfile = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues-user',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showIssue = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/issues/' + formData.issueId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createComment = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        text: formData.text,
        issueId: formData.issueId
      }
    }
  })
}

const deleteComment = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + formData.commentId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        issueId: formData.issueId
      }
    }
  })
}

const updateComment = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + formData.commentId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        text: formData.text,
        issueId: formData.issueId
      }
    }
  })
}

module.exports = {
  createIssue,
  deleteIssue,
  updateIssue,
  showIssues,
  showIssue,
  createComment,
  deleteComment,
  updateComment,
  showProfile,
  showTrello,
  showTrello2
}
