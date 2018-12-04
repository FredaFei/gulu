import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Slides from '@/slides/slides'
import SlidesItem from '@/slides/slidesItem'

Vue.component('GSlidesItem', SlidesItem)
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
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.slides-item-1').exists()).to.be.true
      done()
    })
  })
  it('接受 selected 属性 ', done => {
    const wrapper = mount(Slides, {
      propsData: {
        selected: '2',
        autoPlay: false
      },
      slots: {
        default: `
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
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
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
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
  it('能自动播放', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        selected: '1',
        autoPlayDelay: 20
      },
      slots: {
        default: `
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
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
  it('可以点击上一张', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
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
  it('可以点击下一张', done => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <g-slides-item name="1">
            <div class="slides-item-1">slide 1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="slides-item-2">slide 2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="slides-item-3">slide 3</div>
          </g-slides-item>
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
})
