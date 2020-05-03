import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuTextInput from '../../src/components/NeuTextInput/NeuTextInput'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuTextInput', () => {
  it('Renders without error with default value', () => {
    const { queryByTestId } = render(<NeuTextInput />)

    expect(queryByTestId('neutextinput-input')).not.toBeNull()
    // Use the default width and height which is 100% for width and 50px for height
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('height', '50px')
    // The default fontSize is 20px
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('font-size', '20px')
  })

  it('Renders without error with custom value', () => {
    const { queryByTestId } = render(<NeuTextInput fontSize={22} height="60px" />)

    expect(queryByTestId('neutextinput-input')).not.toBeNull()
    // Use the default width and height which is 100% for width and 50px for height
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('height', '60px')
    // The default fontSize is 20px
    expect(queryByTestId('neutextinput-input')).toHaveStyleRule('font-size', '22px')
  })
})
