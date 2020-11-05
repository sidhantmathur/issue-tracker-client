'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: formData.auth.email,
        password: formData.auth.password,
        password_confirmation: formData.auth.confirmPassword
      }
    }
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: formData.auth.email,
        password: formData.auth.password
      }
    }
  })
}

const changePass = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      passwords: {
        old: formData.auth.oldPass,
        new: formData.auth.newPass
      }
    }
  })
}

const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut
}
