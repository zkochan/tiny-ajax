'use strict';

var param = require('jquery-param');
var STATE_DONE = 4;
var CONTENT_TYPE = 'Content-type';

var ajax = {};

ajax.x = function() {
  return new XMLHttpRequest();
};

ajax.send = function(url, opts) {
  var x = ajax.x();
  x.open(opts.method, url);
  x.onreadystatechange = function() {
    if (x.readyState !== STATE_DONE) {
      return;
    }
    if (x.status >= 200 && x.status < 300) {
      opts.success(x.responseText);
      return;
    }
    opts.error(x.responseText);
  };
  if (opts.method === 'POST') {
    x.setRequestHeader(CONTENT_TYPE, 'application/x-www-form-urlencoded');
  }
  if (opts.contentType) {
    x.setRequestHeader(CONTENT_TYPE, opts.contentType);
  }
  x.setRequestHeader('Accept', '*/*');
  if (opts.mimeType && x.overrideMimeType) {
    x.overrideMimeType(opts.mimeType);
  }
  x.send(opts.data);
};

ajax.get = function(url, opts) {
  opts = opts || {};
  opts.method = 'GET';

  var query = param(opts.data);
  var fullUrl = url + (query.length ? '?' + query : '');
  opts.data = null;
  ajax.send(fullUrl, opts);
};

ajax.post = function(url, opts) {
  opts = opts || {};
  opts.method = 'POST';

  opts.data = param(opts.data);
  ajax.send(url, opts);
};

module.exports = ajax;
