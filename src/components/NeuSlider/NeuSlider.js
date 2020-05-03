import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import NeuDiv from '../NeuDiv/NeuDiv'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'
import { getPercentageDecimal } from '../../utils/number'

const shadowDistance = 3

const NeuSlider = ({
  min, max, color, onChange, distance, ...props
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event) => {
    const newValue = event?.target?.value
    setValue(newValue || value)
    if (onChange) {
      onChange(newValue || value)
    }
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NeuDiv distance={distance} height="45px" color={color} radius={10} {...props}>
      <Slider data-testid="neuslider-slider" min={min} max={max} value={value} color={color} onChange={(event) => handleChange(event)} percentage={getPercentageDecimal(value, max)} />
    </NeuDiv>
  )
}
NeuSlider.propTypes = {
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  color: PropTypes.string,
  distance: PropTypes.number,
}
NeuSlider.defaultProps = {
  onChange: null,
  min: 0,
  max: 255,
  color: theme.colors.lightGray,
  distance: theme.distance,
}

/** @component */
export default NeuSlider

const Slider = styled.input`
  margin: auto 25px;
  width: 100%;
  height: 0;
  border: 1px dashed ${theme.colors.darkGray};
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  background: ${(props) => props.color};
  position: relative;
  z-index: 10;
  outline: none;

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  &::-webkit-slider-thumb {
    z-index: 50;
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 10px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: ${theme.colors.lightGray};
    cursor: pointer; /* Cursor on hover */
    border: none;
    border-radius: 3px;
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, shadowDistance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, shadowDistance, theme.intensity, false)}`};
  }

  &::-moz-range-thumb {
    z-index: 50;
    width: 10px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: ${theme.colors.lightGray};
    cursor: pointer; /* Cursor on hover */
    border: none;
    border-radius: 3px;
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, shadowDistance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, shadowDistance, theme.intensity, false)}`};
  }

  /* Remove dotted outline on firefox */
  &::-moz-focus-outer {
    border: 0;
  }

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: -1px;
    border: 1px dashed rgba(153, 42, 18, 1);
    opacity: ${(props) => props.percentage};
  }

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: -1px;
    box-shadow: 0px 0px 10px 4px rgba(153, 42, 18, 0.4);
    opacity: ${(props) => props.percentage};
  }
`
Slider.defaultProps = {
  type: 'range',
}
