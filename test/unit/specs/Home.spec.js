import Vue from 'vue'
import Home from '@/components/home/Home.vue'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .to.equal('Hey')
  })
})
