const xurl = require('./')
const tap = require('tap')

tap.test('add pathname', t => {
  t.plan(2)

  const resultObj = xurl('http://foo.bar/', '/baz')
  const resultStr = xurl('http://foo.bar/', { pathname: '/baz' })

  t.equal(resultObj, 'http://foo.bar/baz')
  t.equal(resultStr, 'http://foo.bar/baz')
})

tap.test('add querystring', t => {
  t.plan(2)

  const resultObj = xurl('http://foo.bar', '?foo=bar')
  const resultStr = xurl('http://foo.bar', { query: { foo: 'bar' } })

  t.equal(resultObj, 'http://foo.bar/?foo=bar')
  t.equal(resultStr, 'http://foo.bar/?foo=bar')
})

tap.test('add pathname and querystring', t => {
  t.plan(2)

  const resultObj = xurl('http://foo.bar/', '/baz?foo=bar')
  const resultStr = xurl('http://foo.bar/', { pathname: '/baz', query: { foo: 'bar' } })

  t.equal(resultObj, 'http://foo.bar/baz?foo=bar')
  t.equal(resultStr, 'http://foo.bar/baz?foo=bar')
})

tap.test('add querystring merge', t => {
  t.plan(2)

  const resultObj = xurl('http://foo.bar/?baz=qux', '/baz?foo=bar')
  const resultStr = xurl('http://foo.bar/?baz=qux', { pathname: '/baz', query: { foo: 'bar' } })

  t.equal(resultObj, 'http://foo.bar/baz?baz=qux&foo=bar')
  t.equal(resultStr, 'http://foo.bar/baz?baz=qux&foo=bar')
})

tap.test('overwrite pathname and querystring', t => {
  t.plan(2)

  const resultObj = xurl('http://foo.bar/', '/baz?foo=bar')
  const resultStr = xurl('http://foo.bar/', { pathname: '/baz', query: { foo: 'bar' } })

  t.equal(resultObj, 'http://foo.bar/baz?foo=bar')
  t.equal(resultStr, 'http://foo.bar/baz?foo=bar')
})

tap.test('overwrite additional properties', t => {
  t.plan(1)

  const result = xurl('http://foo.bar/', { pathname: '/baz', protocol: 'file' })

  t.equal(result, 'file://foo.bar/baz')
})
