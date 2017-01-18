const Url = require('url')
const qs = require('querystring')
const path = require('path')
const reduce = require('lodash.reduce')

function xurl (base, opts) {
  if (typeof opts === 'string') opts = stripNull(Url.parse(opts))

  const parsedUrl = Url.parse(base)
  const { pathname, query } = parsedUrl

  opts = Object.assign(opts, {
    search: extendQueryString(query, opts.query),
    pathname: extendPathname(pathname, opts.pathname)
  })

  const merged = Object.assign(parsedUrl, opts)
  return Url.format(merged)
}

function extendQueryString (base, extend) {
  if (!extend) return base
  if (!base) return (typeof extend === 'object') ? qs.stringify(extend) : extend

  const extended = (typeof extend === 'object')
    ? qs.stringify(Object.assign({}, qs.parse(base), extend))
    : [base, extend].join('&')
  return extended
}

function extendPathname (base, extend) {
  if (!extend) return base
  if (!base) return extend

  return path.join('/', base, extend)
}

function stripNull (obj) {
  return reduce(obj, (acc, value, key) => {
    if (value !== null) acc[key] = value
    return acc
  }, {})
}

module.exports = xurl
