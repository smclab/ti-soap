/*
 * Copyright (c) 2011 Vinay Pulim <vinay@milewise.com>
 * MIT Licensed
 */

"use strict";

var Client = require('./client').Client,
  security = {
    //BasicAuthSecurity: require('soap/lib/security/BasicAuthSecurity'),
    //ClientSSLSecurity: require('soap/lib/security/ClientSSLSecurity'),
    WSSecurity: require('soap/lib/security/WSSecurity')
  },
  passwordDigest = require('soap/lib/utils').passwordDigest,
  open_wsdl = require('./wsdl').open_wsdl,
  WSDL = require('./wsdl').WSDL;

var WSDL = require('./wsdl').WSDL;
var _wsdlCache = {};

function _requestWSDL(url, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  var wsdl = _wsdlCache[url];
  if (wsdl) {
    process.nextTick(function() {
      callback(null, wsdl);
    });
  }
  else {
    open_wsdl(url, options, function(err, wsdl) {
      if (err)
        return callback(err);
      else
        _wsdlCache[url] = wsdl;
      callback(null, wsdl);
    });
  }
}

function createClient(url, options, callback, endpoint) {
  if (typeof options === 'function') {
    endpoint = callback;
    callback = options;
    options = {};
  }
  endpoint = options.endpoint || endpoint;
  _requestWSDL(url, options, function(err, wsdl) {
    callback(err, wsdl && new Client(wsdl, endpoint, options));
  });
}

exports.security = security;
exports.BasicAuthSecurity = security.BasicAuthSecurity;
exports.WSSecurity = security.WSSecurity;
exports.ClientSSLSecurity = security.ClientSSLSecurity;
exports.createClient = createClient;
exports.passwordDigest = passwordDigest;
exports.WSDL = WSDL;

/**/
