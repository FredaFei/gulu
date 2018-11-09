import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Tabs from '@/tabs'
import TabsHeader from '@/tabsHeader'
import TabsBody from '@/tabsBody'
import TabsItem from '@/tabsItem'
import TabsPane from '@/tabsPane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    describe('props', (done) => {
        const Constructor = Vue.extend(Tabs)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受 selected 属性 ', () => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                <g-tabs selected="sport">
                    <g-tabs-header>
                        <g-tabs-item name="sport">sport</g-tabs-item>
                        <g-tabs-item name="music">music</g-tabs-item>
                        <g-tabs-item name="moving">moving</g-tabs-item>
                    </g-tabs-header>
                    <g-tabs-body>
                        <g-tabs-pane name="sport">sport content</g-tabs-pane>
                        <g-tabs-pane name="music">music content</g-tabs-pane>
                        <g-tabs-pane name="moving">moving content</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            `
            vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const element = vm.$el.querySelector('.tabs-item[data-name="sport"]')
                expect(element.classList.contains('active')).to.eq(true)
                vm.$el.remove
                done()
            });
        })
        xit('可以设置 direction .', () => {
            
        })
    })
})
