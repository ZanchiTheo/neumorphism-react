import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import Layout from '../../src/components/styleguide/Layout'
import theme from '../../src/theme'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('Layout', () => {
  it('Renders without error', () => {
    const { queryByTestId } = render(<Layout />)

    expect(queryByTestId('layout-wrapper')).not.toBeNull()
    // Use the default height which is 100%
    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('height', '100%')
    // Use the default background-color
    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('background-color', theme.colors.lightGray)
    // Use the default flex-direction which is row
    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('flex-direction', 'row')
  })

  it('Renders without error a custom Layout', () => {
    const mockedColor = '#FFFFFF'

    const { queryByTestId } = render(<Layout height={10} color={mockedColor} column />)

    expect(queryByTestId('layout-wrapper')).not.toBeNull()

    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('height', '10px')
    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('background-color', mockedColor)
    expect(queryByTestId('layout-wrapper')).toHaveStyleRule('flex-direction', 'column')
  })
})
