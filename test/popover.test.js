const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position.', done => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-popover position="bottom" ref="ha">
            <template slot="popover">content</template>
            <button>click</button>
        </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { popoverContent } = vm.$refs.ha.$refs
      expect(popoverContent.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
//   todo 
  itx('可以设置  trigger', ()=>{})
})
