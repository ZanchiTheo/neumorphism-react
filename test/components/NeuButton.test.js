import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuButton from '../../src/components/NeuButton/NeuButton'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuButton', () => {
  it('Renders without error', () => {
    const { queryByTestId } = render(<NeuButton />)

    expect(queryByTestId('neubutton-wrapper')).not.toBeNull()
    // Use the default width and height which is 100%
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('height', '100%')
    // Use the default border-radius which is 25px
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('border-radius', '25px')
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('box-shadow', '5px 5px 10px #757575,-5px -5px 10px #afafaf,inset 0px 0px 0px #757575,inset -0px -0px 0px #afafaf')
  })

  it('Fires a function on click', async () => {
    const test = jest.fn()

    const { queryByTestId } = render(<NeuButton width={10} height={10} radius={10} onClick={test} />)

    expect(queryByTestId('neubutton-wrapper')).not.toBeNull()

    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('width', '10px')
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('height', '10px')
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('border-radius', '10px')
    expect(queryByTestId('neubutton-wrapper')).toHaveStyleRule('box-shadow', '5px 5px 10px #757575,-5px -5px 10px #afafaf,inset 0px 0px 0px #757575,inset -0px -0px 0px #afafaf')

    fireEvent.click(queryByTestId('neubutton-wrapper'))

    expect(test).toHaveBeenCalled()
  })
})
