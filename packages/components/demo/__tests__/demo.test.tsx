import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Demo from '../src/demo.vue'

const AXIOM = 'Rem is the best girl'

describe('Demo.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Demo>{AXIOM}</Demo>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
