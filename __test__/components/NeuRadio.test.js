import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuRadio from '../../src/components/NeuRadio/NeuRadio'
import theme from '../../src/theme'
import { getDarkBoxShadow, getLightBoxShadow } from '../../src/utils/colors'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

const mockData = [1, 2]
const mockFunction = jest.fn((selected) => selected)

const mockedDistance = 3
const mockedDistancePressed = 2

describe('NeuRadio', () => {
  it('Renders a functionnals checkboxes', () => {
    const { queryByTestId } = render(<NeuRadio distance={mockedDistance} data={mockData} onChange={mockFunction} />)

    expect(queryByTestId('neuradio-wrapper')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-1')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-2')).not.toBeNull()

    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)

    // Selects the first radio, expect [1]
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)

    // Selects the second radio, expect [1, 2]
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)

    // Unselects the second radio, expect [2]
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)

    // Unselects the second radio, expect []
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
  })

  it('Renders a functionnals radio choice', () => {
    const { queryByTestId } = render(<NeuRadio distance={mockedDistance} data={mockData} onChange={mockFunction} />)

    expect(queryByTestId('neuradio-wrapper')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-1')).not.toBeNull()
    expect(queryByTestId('neuradio-radio-2')).not.toBeNull()

    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)

    // Selects the first radio, expect 1
    fireEvent.click(queryByTestId('neuradio-radio-1'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-1')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)

    // Selects the second radio, expect 2
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistancePressed, theme.intensity, true)}`)

    // Unselects the second radio, expect null
    fireEvent.click(queryByTestId('neuradio-radio-2'))
    expect(mockFunction).toHaveBeenCalled()
    expect(queryByTestId('neuradio-radio-2')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, mockedDistance, theme.intensity, false)}`)
  })
})
