import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import validata from '../../src/validata.js'

describe('validata', () => {
  it('validata 存在.', () => {
    expect(validata).to.be.ok
  })
})
