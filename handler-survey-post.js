'use strict'

const consts = require('./common/consts')
const utils = require('./common/utils')
var request = require('request')

module.exports.postSurvey = (event, context, callback) => {
  console.log('request test - m.google.com')
  const options = {
    method: 'GET',
    url: 'http://m.google.com/',
    headers: {'cache-control': 'no-cache'}
  }

  request(options, (error, response, body) => {
    if (error) callback(null, error)
    else callback(null, body) // ok
  })
}
