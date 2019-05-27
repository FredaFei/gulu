import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Uploader from '../../src/uploader/uploader'
import http from '../../src/http'

describe('Uploader', () => {
  it('存在.', () => {
    expect(Uploader).to.be.ok
  })
  it('可以上传一个.', done => {
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(function() {
        options.success(JSON.stringify({ id: '1212' }))
      }, 100)
    })
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'files',
        action: '/upload',
        method: 'post',
        parseReponse: data => {
          let { id } = JSON.parse(data)
          return `/preview/${id}`
        },
        fileList: []
      },
      slots: {
        default: `<button id="x">click me</button>`
      },
      listeners: {
        'update:fileList': fileList => {
          wrapper.setProps({ fileList })
        },
        uploaded: () => {
          expect(wrapper.find('use').exists()).to.eq(false)
          expect(wrapper.props().fileList[0].url).to.eq('/preview/1212')
          stub.restore()
          done()
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    const file1 = new File(['hahaha'], 'a.png')

    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files

    // let use = wrapper.find('use').element
    // expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    done()
  })
})
