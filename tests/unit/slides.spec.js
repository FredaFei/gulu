import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Slides from '@/slides.vue'
import SlidesItem from '@/slidesItem.vue'

describe('Slides', () => {
  it('存在.', () => {
    expect(Slides).to.be.ok
  })
  it('接受 selected 属性 ', done => {
    Vue.component('GSlidesItem', SlidesItem)
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
})
