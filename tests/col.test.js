const expect = chai.expect
import Vue from 'vue'
import GRow from '../src/gRow'
import GCol from '../src/gCol'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('GCol', () => {
    it('存在.', () => {
        expect(GCol).to.be.ok
    })
    describe('props', done => {
        const Constructor = Vue.extend(GCol)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以设置span.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    span: 12
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-12')).to.eq(true)
            div.remove()
        })
        it('接受 offset 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    offset: '10'
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-10')).to.eq(true)
            div.remove()
        })
        it('接受 phone 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    phone: {
                        span: 1,
                        offset: 2
                    }
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-phone-1')).to.eq(true)
            expect(element.classList.contains('offset-phone-2')).to.eq(true)
            div.remove()
        })
        it('接受 ipad 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    ipad: {
                        span: 1,
                        offset: 2
                    }
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-ipad-1')).to.eq(true)
            expect(element.classList.contains('offset-ipad-2')).to.eq(true)
            div.remove()
        })
        it('接受 narrowPc 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    narrowPc: {
                        span: 1,
                        offset: 2
                    }
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
            expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
            div.remove()
        })
        it('接受 pc 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    pc: {
                        span: 1,
                        offset: 2
                    }
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-pc-1')).to.eq(true)
            expect(element.classList.contains('offset-pc-2')).to.eq(true)
            div.remove()
        })
    })
})
