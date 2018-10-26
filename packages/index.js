import imgZoomer from './img-zoomer/img-zoomer.vue'

const components = [
  imgZoomer
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  imgZoomer
}