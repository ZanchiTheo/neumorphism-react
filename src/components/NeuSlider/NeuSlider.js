import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import NeuDiv from '../NeuDiv/NeuDiv'

const NeuSlider = ({
  min, max, color, onChange,
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event) => {
    const newValue = event?.target?.value
    setValue(newValue || value)
    onChange(newValue || value)
  }

  return (
    <NeuDiv height={60} color={color} radius={10}>
      <Slider min={min} max={max} value={value} color={color} onChange={(event) => handleChange(event)} />
    </NeuDiv>
  )
}
NeuSlider.propTypes = {
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  color: PropTypes.string,
}
NeuSlider.defaultProps = {
  onChange: null,
  min: 0,
  max: 255,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuSlider

const Slider = styled.input`
  margin: auto 25px;
  width: 100%;
  height: 0;
  border: 1px solid #d3d3d3;
  border-style: dashed;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  background: ${(props) => props.color};
  outline: none;

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
    outline: none;
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
`
Slider.defaultProps = {
  type: 'range',
}
