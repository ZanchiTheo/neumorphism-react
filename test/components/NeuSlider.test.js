import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuSlider from '../../src/components/NeuSlider/NeuSlider'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuSlider', () => {
  it('Renders without error', () => {
    const test = jest.fn()

    const { queryByTestId } = render(<NeuSlider />)

    expect(queryByTestId('neudiv-wrapper')).not.toBeNull()
    expect(queryByTestId('neuslider-slider')).not.toBeNull()

    fireEvent.change(queryByTestId('neuslider-slider'), {
      target: { value: 200 },
    })

    // Don't fires function because
    expect(test).not.toHaveBeenCalled()
  })
})
