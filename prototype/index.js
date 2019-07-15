function debounce(func, wait) {
  let timeout, args, context, timestamp
  function later() {
    const last = new Date() - timestamp
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      func.apply(context, args)
    }
  }
  return function() {
    context = this
    args = arguments
    timestamp = new Date()
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
  }
}
function deepCopy(param) {
  const isObj = Object.prototype.toString.call(param) === '[object Object]'
  if (!Array.isArray(param) && !isObj) {
    throw new TypeError('deepCopy`s first param needs array || object')
  } else {
    const result = Array.isArray(param) ? [] : {}
    for (const item in param) {
      if (Object.prototype.toString.call(item) === '[object Object]' && param[item] !== null) {
        result[item] = deepCopy(param[item])
      } else {
        result[item] = param[item]
      }
    }
    return result
  }
}
export {debounce, deepCopy}
