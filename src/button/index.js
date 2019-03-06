import Button from './button.vue'
import ButtonGroup from './buttonGroup.vue'

Button.install = Vue => Vue.component(Button.name, Button)
ButtonGroup.install = Vue => Vue.component(ButtonGroup.name, ButtonGroup)

export default Button
// export default { Button, ButtonGroup }
