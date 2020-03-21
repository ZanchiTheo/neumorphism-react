import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuRadio from '../../src/components/NeuRadio/NeuRadio'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

const mockData = [1, 2]
const mockFunction = jest.fn((selected) => selected)

describe('NeuRadio', () => {
  it('Renders a functionnals checkboxes', () => {
    const { queryByTestId } = render(<NeuRadio data={mockData} onChange={mockFunction} />)

    expect(queryByTestId('neuradio-wrapper')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-1')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-2')).not.toBeNull()

    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')

    // Selects the first radio, expect [1]
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')

    // Selects the second radio, expect [1, 2]
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')

    // Unselects the second radio, expect [2]
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')

    // Unselects the second radio, expect []
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
  })

  it('Renders a functionnals radio choice', () => {
    const { queryByTestId } = render(<NeuRadio data={mockData} onChange={mockFunction} />)

    expect(queryByTestId('neuradio-wrapper')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-1')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-2')).not.toBeNull()

    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')

    // Selects the first radio, expect 1
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')

    // Selects the second radio, expect 2
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', 'inset 2px 2px 4px #757575,inset -2px -2px 4px #afafaf')

    // Unselects the second radio, expect null
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', '4px 4px 8px #757575,-4px -4px 8px #afafaf')
  })
})
