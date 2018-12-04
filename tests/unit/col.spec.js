import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'

import GCol from '../../../src/grid/gCol'

describe('GCol', () => {
    it('存在.', () => {
        expect(GCol).to.be.ok
    })
    describe('props', () => {
        it('可以设置span.', () => {
            const wrapper = mount(GCol, {
                propsData: {
                    span: 12
                }
            })
            const { vm } = wrapper
            expect(wrapper.classes('col-12')).to.eq(true)
        })
        it('接受 offset 属性', () => {
            const wrapper = mount(GCol, {
                propsData: {
                    offset: 10
                }
            })
            const { vm } = wrapper
            expect(wrapper.classes('offset-10')).to.eq(true)
        })
        it('接受 phone 属性', () => {
            const wrapper = mount(GCol, {
                propsData: {
                    phone: {
                        span: 1,
                        offset: 2
                    }
                }
            })
            const { vm } = wrapper
            expect(wrapper.classes('col-phone-1')).to.eq(true)
            expect(wrapper.classes('offset-phone-2')).to.eq(true)
        })
        it('接受 ipad 属性', () => {
            const wrapper = mount(GCol, {
                propsData: {
                    ipad: {
                        span: 1,
                        offset: 2
                    }
                }
            })
            
            const { vm } = wrapper
            expect(wrapper.classes('col-ipad-1')).to.eq(true)
            expect(wrapper.classes('offset-ipad-2')).to.eq(true)
        })
        it('接受 narrowPc 属性', () => {
            const wrapper = mount(GCol, {
                propsData: {
                    narrowPc: {
                        span: 1,
                        offset: 2
                    }
                }
            })
            
            const { vm } = wrapper
            expect(wrapper.classes('col-narrow-pc-1')).to.eq(true)
            expect(wrapper.classes('offset-narrow-pc-2')).to.eq(true)
        })
        it('接受 pc 属性', () => {
            
            const wrapper = mount(GCol, {
                propsData: {
                    pc: {
                        span: 1,
                        offset: 2
                    }
                }
            })
            const { vm } = wrapper
            expect(wrapper.classes('col-pc-1')).to.eq(true)
            expect(wrapper.classes('offset-pc-2')).to.eq(true)
        })
    })
})
