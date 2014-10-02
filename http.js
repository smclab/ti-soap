"use strict";

var url = require('url');
var request = require('superagent');

var VERSION = require('./package.json').version;

request.parse[ request.types.xml ] = function (str) {
  return str;
};

exports.request = function(rurl, data, callback, exheaders, exoptions) {
  var curl = url.parse(rurl);
  var secure = curl.protocol === 'https:';
  var host = curl.hostname;
  var port = parseInt(curl.port || (secure ? 443 : false));
  var path = [curl.pathname || '/', curl.search || '', curl.hash || ''].join('');
  var method = data ? "POST" : "GET";
  var headers = {
    "User-Agent": "node-soap/" + VERSION,
    "Accept" : "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
    "Accept-Encoding": "none",
    "Accept-Charset": "utf-8",
    "Connection": "close",
    "Host" : host + (port ? ":"+port : "")
  };
  var attr;

  if (typeof data === 'string') {
    headers["Content-Length"] = Buffer.byteLength(data, 'utf8');
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  exheaders = exheaders || {};
  for (attr in exheaders) { headers[attr] = exheaders[attr]; }

  exoptions = exoptions || {};
  for (attr in exoptions) { options[attr] = exoptions[attr]; }

  return request(method, rurl)
  .type('form')
  .set(headers)
  .send(data)
  .end(function (err, res) {
    var text, match;

    if (err) {
      callback(err);
    }
    else {
      text = res.text;

      match = text.match(/(?:<\?[^?]*\?>[\s]*)?<([^:]*):Envelope([\S\s]*)<\/\1:Envelope>/i);
      if (match) {
        text = match[0];
      }

      res.statusCode = res.status;

      callback(null, res, text);
    }
  });
};
