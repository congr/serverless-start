'use strict'

const consts = require('./consts')

module.exports.toAllQueryString = (json) => {
  return Object.keys(json).map(k => k + '=' + /* encodeURIComponent */(json[k])).join('&')
}
