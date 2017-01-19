# xurl

[![Build Status](https://travis-ci.org/gillesdemey/xtend-url.svg?branch=master)](https://travis-ci.org/gillesdemey/xtend-url)
[![Coverage Status](https://coveralls.io/repos/github/gillesdemey/xtend-url/badge.svg?branch=master)](https://coveralls.io/github/gillesdemey/xtend-url?branch=master)

Append to an URL without the headache

* no double-slashes
* correct querystring merging

## install

```shell
npm install --save xtend-url
```

## usage

```javascript
const xurl = require('xtend-url')

xurl('http://foo.bar/?baz=qux', '/baz?foo=bar')
// or
xurl('http://foo.bar/?baz=qux', { pathname: '/baz', query: { foo: 'bar' } })
// -> http://foo.bar/baz?baz=qux&foo=bar
```

## license

MIT
