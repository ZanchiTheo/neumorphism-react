import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuClock from '../../src/components/NeuClock/NeuClock'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuClock', () => {
  it('Renders without error', () => {
    const { queryByTestId } = render(<NeuClock />)

    expect(queryByTestId('neuclock-clock')).not.toBeNull()
    expect(queryByTestId('neuclock-innerclock')).not.toBeNull()

    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('width', '260px')
    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('height', '260px')
    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('border-radius', '100%')
    expect(queryByTestId('neuclock-innerclock')).toHaveStyleRule('box-shadow', 'none')
  })

  it('Renders without error a donut NeuClock', () => {
    const { queryByTestId } = render(<NeuClock donut />)

    expect(queryByTestId('neuclock-clock')).not.toBeNull()
    expect(queryByTestId('neuclock-innerclock')).not.toBeNull()

    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('width', '260px')
    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('height', '260px')
    expect(queryByTestId('neuclock-clock')).toHaveStyleRule('border-radius', '100%')
    expect(queryByTestId('neuclock-innerclock')).toHaveStyleRule('box-shadow', 'inset 5px 5px 10px #757575,inset -5px -5px 10px #afafaf')
  })
})
