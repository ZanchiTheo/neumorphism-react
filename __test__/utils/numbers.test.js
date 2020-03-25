import { getPercentageDecimal } from '../../src/utils/number'

describe('Numbers utils', () => {
  describe('getPercentage()', () => {
    it('Computes percentages correctly', () => {
      let assertion

      assertion = getPercentageDecimal(1, 10)
      expect(assertion).toBe('0.1')

      assertion = getPercentageDecimal(5, 10)
      expect(assertion).toBe('0.5')

      assertion = getPercentageDecimal(null, 10)
      expect(assertion).toBe('0.0')

      assertion = getPercentageDecimal(0, 10)
      expect(assertion).toBe('0.0')

      assertion = getPercentageDecimal(5, null)
      expect(assertion).toBe('0.0')

      assertion = getPercentageDecimal(5, 10, 2)
      expect(assertion).toBe('0.50')
    })
  })
})
