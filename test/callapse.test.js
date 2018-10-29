const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapseItem'

Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
    })
    it.only('可以设置 single.', done => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse single :selected.sync="selectedTab">
            <g-collapse-item title="title_1" name="1"><span id="content_1">content_1</span></g-collapse-item>
            <g-collapse-item title="title_2" name="2"><span id="content_2">content_2</span></g-collapse-item>
            <g-collapse-item title="title_3" name="3"><span id="content_3">content_3</span></g-collapse-item>
            <g-collapse-item title="title_4" name="4"><span id="content_4">content_4</span></g-collapse-item>
        </g-collapse>
    `
        const vm = new Vue({
            el: div,
            data: {
                selectedTab: ['1']
            }
        })
        setTimeout(() => {
            vm.$el.querySelector('.callapse-item[data-name="2"]').click()
            console.log(vm.$el)
            setTimeout(() => {
                console.log(vm.$el)
                expect(vm.$el.querySelector('#content_1')).to.not.exist
                expect(vm.$el.querySelector('#content_2')).to.exist
                vm.$el.remove
                done()
            })
        })
    })
})
