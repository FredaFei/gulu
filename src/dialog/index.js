import Dialog from './dialog'
let currentDialog
export default {
  install(Vue, options) {
    Vue.prototype.$Dialog = function(message, DialogOptions) {
      if (currentDialog) {
        currentDialog.close()
      }
      currentDialog = createDialog({
        Vue,
        message,
        propsData: DialogOptions,
        onClose: () => {
          currentDialog = null
        }
      })
    }
  }
}
function createDialog({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Dialog)
  let Dialog = new Constructor({ propsData })
  Dialog.$slots.default = [message]
  Dialog.$mount()
  Dialog.$on('update:visible', onClose)
  document.body.appendChild(Dialog.$el)
  return Dialog
}
