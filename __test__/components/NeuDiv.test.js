import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import NeuDiv from '../../src/components/NeuDiv/NeuDiv'
import { getLightBoxShadow, getDarkBoxShadow } from '../../src/utils/colors'
import theme from '../../src/theme'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe('NeuDiv', () => {
  it('Renders without error', () => {
    const { queryByTestId } = render(<NeuDiv />)

    expect(queryByTestId('neudiv-wrapper')).not.toBeNull()
    // Use the default width and height which is 100%
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('width', '100%')
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('height', '100%')
    // Use the default border-radius which is 25px
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('border-radius', '25px')
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, theme.distance, theme.intensity, false)},${getDarkBoxShadow(theme.colors.lightGray, theme.distance, theme.intensity, false)}`)
  })

  it('Renders without error a custom NeuDiv', () => {
    const { queryByTestId } = render(<NeuDiv revert width="10px" height="10px" radius={10} />)

    expect(queryByTestId('neudiv-wrapper')).not.toBeNull()

    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('width', '10px')
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('height', '10px')
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('border-radius', '10px')
    expect(queryByTestId('neudiv-wrapper')).toHaveStyleRule('box-shadow', `${getLightBoxShadow(theme.colors.lightGray, theme.distance, theme.intensity, true)},${getDarkBoxShadow(theme.colors.lightGray, theme.distance, theme.intensity, true)}`)
  })
})
