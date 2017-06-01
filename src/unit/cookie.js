let handleCookie = {
  get: function (key) {
    let cookie = document.cookie
    let start = cookie.indexOf(key + '=')
    if (start !== -1) {
      let last = cookie.indexOf(';', start + key.length + 1)
      if (last === -1) {
        last = cookie.length
      }
      return unescape(cookie.substring(start + key.length + 1, last))
    } else {
      return ''
    }
  },
  set: function (key, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = key + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
  },
  del: function (key) {
    this.set(key, '', -1)
  }
}

export default {
  set: handleCookie.set,
  get: handleCookie.get,
  del: handleCookie.del
}
