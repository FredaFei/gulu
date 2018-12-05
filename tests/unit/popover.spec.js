import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Popover from '../../src/popover/popover'

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以设置 position.', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: { template: `<button>click</button>` },
                content: `<div>这是弹出内容哦</div>`
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        let classs = wrapper.find('.popover-content').classes()
        expect(classs).to.include('position-bottom')
    })
    it('可以设置  trigger', () => {
        const wrapper = mount(Popover, {
            propsData: {
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.popover-content').element).to.not.exist
        wrapper.find('.popover-wrapper').trigger('mouseenter')
        expect(wrapper.find('.popover-content').element).to.exist
    })
})
