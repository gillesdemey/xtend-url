# xurl

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
// -> http://foo.bar/baz?baz=qux&foo=bar
```

## license

MIT
