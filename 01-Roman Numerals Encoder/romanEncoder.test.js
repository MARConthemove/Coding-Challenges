'use strict'

const { solution } = require('./romanEncoder')

describe('romanEncoder test', () => {
  describe('should handle small numbers', () => {

    test('should handle small numbers', () => {
      expect(solution(1)).toBe('I')
    })

    test('should handle small numbers', () => {
      expect(solution(2)).toBe('II')
    })

    test('should handle small numbers', () => {
      expect(solution(3)).toBe('III')
    })

    test('should handle small numbers', () => {
      expect(solution(4)).toBe('IV')
    })

    test('should handle small numbers', () => {
      expect(solution(5)).toBe('V')
    })
  })
})
