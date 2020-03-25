import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuProgress from '../../src/components/NeuProgress/NeuProgress'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuDiv', () => {
  it('Renders a 0% progress bar', () => {
    const { queryByTestId } = render(<NeuProgress />)

    expect(queryByTestId('neuprogress-wrapper')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('width', '0%')
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('box-shadow', 'none')
  })

  it('Renders a 10% progress bar', () => {
    const { queryByTestId } = render(<NeuProgress progress={10} />)

    expect(queryByTestId('neuprogress-wrapper')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('width', '10%')
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('box-shadow', '0px 0px 10px 4px rgba(153,42,18,0.4)')
  })

  it('Renders a 100% progress bar', () => {
    const { queryByTestId } = render(<NeuProgress progress={100} />)

    expect(queryByTestId('neuprogress-wrapper')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('box-shadow', '0px 0px 10px 4px rgba(153,42,18,0.4)')
  })

  it('Renders a 100% progress bar', () => {
    const { queryByTestId } = render(<NeuProgress progress={1000} />)

    expect(queryByTestId('neuprogress-wrapper')).not.toBeNull()
    expect(queryByTestId('neuprogress-progress')).not.toBeNull()
    // Renders a 100% progress bar even if the progress props is greater than 100
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neuprogress-progress')).toHaveStyleRule('box-shadow', '0px 0px 10px 4px rgba(153,42,18,0.4)')
  })
})
