import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

const NeuTextInput = ({
  width, height, fontSize, placeholder, color, onChange, fontColor, distance, ...props
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const newValue = event?.target?.value
    setValue(newValue)
    if (onChange) {
      onChange(newValue === '' ? null : newValue)
    }
  }

  return (
    <Input
      data-testid="neutextinput-input"
      height={height}
      width={width}
      fontSize={fontSize}
      placeholder={placeholder}
      color={color}
      value={value}
      onChange={(event) => handleChange(event)}
      fontColor={fontColor}
      distance={distance}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}
NeuTextInput.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.number,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  fontColor: PropTypes.string,
  distance: PropTypes.number,
}
NeuTextInput.defaultProps = {
  width: '100%',
  height: '50px',
  fontSize: 20,
  placeholder: 'Placeholder',
  color: theme.colors.lightGray,
  onChange: null,
  fontColor: theme.colors.darkGray,
  distance: theme.distance,
}

/** @component */
export default NeuTextInput

const Input = styled.input`
  margin: auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  box-sizing: border-box;
  border-radius: 40px;
  background-color: ${(props) => props.color};
  border: 4px solid ${(props) => props.color};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getLightBoxShadow(props.color, props.distance, theme.intensity, true)}, ${getDarkBoxShadow(
    props.color,
    props.distance,
    theme.intensity,
    true
  )}`};
  padding: 0 1.5rem;
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${(props) => props.fontColor};
  outline: none;
`
Input.defaultProps = {
  type: 'text',
}
