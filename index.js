import {debounce, deepCopy} from './prototype/index'
export default function install(Vue) {
  Vue.prototype.$deepCopy = deepCopy
  Vue.prototype.$debounce = debounce
}