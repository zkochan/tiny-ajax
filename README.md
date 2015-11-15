# tiny-ajax

A tiny XMLHttpRequest wrapper.

[![Dependency Status](https://david-dm.org/zkochan/tiny-ajax/status.svg?style=flat)](https://david-dm.org/zkochan/tiny-ajax)
[![Build Status](https://travis-ci.org/zkochan/tiny-ajax.svg?branch=master)](https://travis-ci.org/zkochan/tiny-ajax)
[![npm version](https://badge.fury.io/js/tiny-ajax.svg)](http://badge.fury.io/js/tiny-ajax)


## Installation

```
npm i --save tiny-ajax
```


## Usage

```js
var ajax = require('ajax');

/* Making a GET request */
ajax.get('http://foo.com/bar', {
  data: {
    bar: 'bax'
  },
  success: function(res) {
    console.log(res);
  },
  error: function(err) {
    console.error(err);
  }
});

/* Making a POST request */
ajax.post('http://foo.com/bar?id=23', {
  data: {
    bar: 'bax'
  },
  success: function(res) {
    console.log(res);
  },
  error: function(err) {
    console.error(err);
  }
});

/* other requests */
ajax.send('http://foo.com/bar/23', {
  method: 'DELETE',
  success: function(res) {
    console.log(res);
  },
  error: function(err) {
    console.error(err);
  }
});
```


## License

MIT
