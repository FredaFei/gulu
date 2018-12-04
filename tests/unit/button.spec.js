import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount,shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Button from '@/button/button'

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    describe('props', () => {
        it('可以设置icon.', () => {
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                }
            })
            let el = wrapper.find('use')
            expect(el.attributes('href')).to.equal('#i-settings')
        })
        it('可以设置loading.', () => {
            const wrapper = mount(Button, {
                propsData: {
                    loading: true
                }
            })
            const { vm } = wrapper
            let el = wrapper.find('use')
            expect(el.attributes('href')).to.equal('#i-loading')
        })
        xit('icon 默认的 order 是 1', () => {
            const wrapper = shallowMount(Button, {
                attachToDocument: true,
                propsData: {
                    icon: 'settings',
                    iconPosition: 'left'
                }
            })
            const { vm } = wrapper
            let el = vm.$el.querySelector('svg')
            console.log(getComputedStyle(el))
            console.log(vm.$el)
            expect(wrapper.contains('.icon-left')).to.eq(true)
            expect(getComputedStyle(el).order).to.eq('1')
        })
        xit('设置 iconPosition 可以改变 order', () => {
            const wrapper = mount(Button, {
                attachToDocument: true,
                propsData: {
                    icon: 'settings',
                    iconPosition: 'right'
                }
            })
            const { vm } = wrapper
            const el = vm.$el.querySelector('svg')
            expect(wrapper.contains('.icon-right')).to.eq(true)
            expect(getComputedStyle(el).order).to.eq('2')
        })
    })
    describe('事件', () => {
        it('点击 button 触发 click 事件', () => {
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                }
            })
            const { vm } = wrapper
            const callback = sinon.fake()
            vm.$on('click', callback)
            vm.$el.click()
            // wrapper.trigger('click')
            expect(callback).to.have.been.called
        })
    })
})
