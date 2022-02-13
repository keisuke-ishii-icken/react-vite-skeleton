import { sum } from '@/helper/helper'

test('basic', () => {
  expect(sum()).toBe(0)
})
test('basic again', () => {
  expect(sum(1, 2)).toBe(3)
})
