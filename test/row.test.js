const expect = chai.expect
import Vue from 'vue'
import GRow from '../src/gRow'
import GCol from '../src/gCol'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('GRow', () => {
    it('存在.', () => {
        expect(GRow).to.be.ok
    })
    describe('props', done => {
        const Constructor = Vue.extend(GRow)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以设置gutter.', () => {
            Vue.component('g-col', GCol)
            Vue.component('g-row', GRow)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12">2</g-col>
                <g-col span="6">6</g-col>
                <g-col span="6">4</g-col>
            </g-row>
            `
            vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const rowElement = vm.$el.querySelector('.row')
                expect(getComputedStyle(rowElement).marginLeft).to.eq('-20px')
                const colElement = vm.$el.querySelector('.col')
                expect(getComputedStyle(rowElement).marginRight).to.eq('-20px')
                done()
                vm.$el.remove()
            });
        })
        it('接受 align 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    align: 'right'
                }
            }).$mount(div)
            const element = vm.$el
            expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
            div.remove()
        })
    })
})
