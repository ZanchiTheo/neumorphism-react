import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuToggle from '../../src/components/NeuToggle/NeuToggle'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuToggle', () => {
  it('Renders a medium sized toggle', () => {
    const { queryByTestId } = render(<NeuToggle size="medium" />)

    expect(queryByTestId('neutoggle-wrapper')).not.toBeNull()
    expect(queryByTestId('neutoggle-toggle')).not.toBeNull()
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('width', '120px')
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('height', '80px')
  })

  it('Renders a small sized toggle', () => {
    const { queryByTestId } = render(<NeuToggle size="small" />)

    expect(queryByTestId('neutoggle-wrapper')).not.toBeNull()
    expect(queryByTestId('neutoggle-toggle')).not.toBeNull()
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('width', '60px')
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('height', '40px')
  })

  it('Renders a small by default', () => {
    const { queryByTestId } = render(<NeuToggle />)

    expect(queryByTestId('neutoggle-wrapper')).not.toBeNull()
    expect(queryByTestId('neutoggle-toggle')).not.toBeNull()
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('width', '60px')
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('height', '40px')
  })

  it('Renders without error when clicked', () => {
    const { queryByTestId } = render(<NeuToggle />)

    expect(queryByTestId('neutoggle-wrapper')).not.toBeNull()
    expect(queryByTestId('neutoggle-toggle')).not.toBeNull()
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('width', '60px')
    expect(queryByTestId('neutoggle-wrapper')).toHaveStyleRule('height', '40px')
    fireEvent.click(queryByTestId('neutoggle-toggle'))
  })
})
