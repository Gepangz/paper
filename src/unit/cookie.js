let cookie = function () {
  let cookie = document.cookie
  let get = function (key) {
    let start = cookie.indexOf(key + '=')
    if (start !== -1) {
      let last = cookie.indexOf(';', start + key.length + 1)
      if (last === -1) {
        last = cookie.length
      }
      return unescape(cookie.substring(start, last))
    } else {
      return ''
    }
  }
  let set = function (key, value, expiredays) {
    if (get(key) !== '') {
      let now = new Date()
      let lastTime = new Date(now.getDate() + expiredays)
      document.cookie = encodeURIComponent(key) + '=' + escape(value) +
      ((expiredays === null) ? '' : ';expires=' + lastTime.toGMTString())
    } else {
      return false
    }
  }
  let del = function (key) {
    set(key, '', -1)
  }

  return {
    get: get,
    set: set,
    del: del
  }
}

export default {
  cookie: cookie
}
