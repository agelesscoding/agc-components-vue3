import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, shallowMount, type VueWrapper } from '@vue/test-utils'

import AgcText from '.'
import { textDefaultProps } from '@/defaultProps'

describe('AgcText.vue', () => {
  const dummyUrl = 'https://dummy.url'
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: dummyUrl }
    })
    Object.defineProperty(window, 'open', {
      writable: true,
      value: vi.fn()
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default AgcText render', () => {
    const text = 'Hello AgcText.'
    const props = {
      ...textDefaultProps,
      text
    }
    const wrapper = shallowMount(AgcText, { props })
    console.log(wrapper.html())
    // should be exists
    expect(wrapper.exists()).toBeTruthy()
    // should render correct text
    expect(wrapper.text()).toBe(text)
    // should render correct tag (DIV)
    expect(wrapper.element.tagName).toBe('DIV')
    // should have certain css attributes
    const style = wrapper.attributes('style')
    expect(style?.includes('font-size')).toBeTruthy()
    expect(style?.includes('actionType')).toBeFalsy()
  })
  it('AgcText with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: dummyUrl,
      tag: 'h2'
    }
    const wrapper = shallowMount(AgcText, { props })
    console.log(wrapper.html())
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe(dummyUrl)
  })
  // it('AgcText with isEditing should not trigger location change', async () => {
  //   const props = {
  //     ...textDefaultProps,
  //     actionType: 'url',
  //     url: dummyUrl,
  //     tag: 'h2',
  //     isEditing: true
  //   }
  //   const wrapper = shallowMount(AgcText, { props })
  //   console.log(wrapper.html())
  //   await wrapper.trigger('click')
  //   // expect(window.open).toBeCalled()
  // })
})
