const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', done => {
        const Constructor = Vue.extend(Toast)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以设置 autoClose.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    autoClose: 3
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton 属性', () => {
            const callback = sinon.fake()
            vm = new Constructor({
                propsData: {
                    autoClose: false,
                    closeButton: {
                        text: '关闭',
                        callback
                    }
                }
            }).$mount()
            let closeElement = vm.$el.querySelector('.close')
            expect(closeElement.innerText.trim()).to.eq('关闭')
            closeElement.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml 属性', () => {
            vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">test strong</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position 属性', () => {
            vm = new Constructor({
                propsData: {
                    position: 'top'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
        })
    })
})
