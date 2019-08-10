import Message from './message.vue';

let currentConfirm;
let currentAlert;
export default {
  install(Vue, options) {
    Vue.prototype.$alert = function (message, propsData) {
      if (currentAlert) {
        currentAlert.close();
      }
      currentAlert = createMessage({
        Vue, message, propsData: {
          cancelButton: {},
          ...propsData
        }
      });
    };
    Vue.prototype.$confirm = function (message, propsData) {
      if (currentConfirm) {
        currentConfirm.close();
      }
      currentConfirm = createMessage({Vue, message, propsData});
    };
  }
};

function createMessage({Vue, message, propsData}) {
  let Constructor = Vue.extend(Message);
  let instance = new Constructor({propsData});
  instance.$slots.default = [message];
  instance.$mount();
  instance.visible = true;
  document.body.appendChild(instance.$el);
  return instance;
}
