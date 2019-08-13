import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Slides from '../../src/slides/slides'
import SlidesItem from '../../src/slides/slidesItem'

Vue.component('AmSlidesItem', SlidesItem)
describe('Slides', () => {
  it('存在.', () => {
    expect(Slides).to.be.ok
  })
  it('selected 默认为1', done => {
    const wrapper = mount(Slides, {
      propsData: {
        selected: '1'
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.slides-item-1').exists()).to.be.true
      done()
    })
  })
  it('设置 selected 属性 ', done => {
    const wrapper = mount(Slides, {
      propsData: {
        selected: '2',
        autoPlay: false
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.slides-item-2').exists()).to.be.true
      done()
    })
  })
  it('点击第二个就展示第二个', done => {
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      },
      listeners: {
        'update:selected': x => {
          expect(x).to.eq('2')
          done()
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })
  it('设置自动播放', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        selected: '1',
        autoPlayDelay: 20
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })
  it('点击上一张', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.prev').trigger('click')
      expect(callback).to.have.been.calledWith('1')
      done()
    })
  })
  it('点击下一张', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.next').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    })
  })
  
  it('mouseEnter & mouseLeave', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        selected: '1',
        autoPlayDelay: 20
      },
      slots: {
        default: `
          <am-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </am-slides-item>
          <am-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </am-slides-item>
          <am-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </am-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })

    setTimeout(() => {
      wrapper.find('.am-slides-window').trigger('mouseenter')
      expect(wrapper.find('.slides-item-1').exists()).to.eq(true)
      wrapper.find('.am-slides-window').trigger('mouseleave')
      setTimeout(() => {
        expect(callback).to.have.been.calledWith('2')
        done()
      }, 21)
    })
  })
  it('destroyed', () => {
    const spy = sinon.stub()
    const wrapper = mount(Slides, {
      destroyed() {
        spy()
      }
    })
    wrapper.destroy()
    expect(spy.calledOnce).to.eq(true)
  })
})
