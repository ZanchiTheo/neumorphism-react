import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

const NeuTextInput = ({
  width, height, fontSize, placeholder, color,
}) => (
  <InputWrapper width={width} height={height} data-testid="neutextinput-wrapper">
    <Input data-testid="neutextinput-input" fontSize={fontSize} placeholder={placeholder} color={color} />
  </InputWrapper>
)
NeuTextInput.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  placeholder: PropTypes.string,
  color: PropTypes.string,
}
NeuTextInput.defaultProps = {
  width: null,
  height: 50,
  fontSize: 20,
  placeholder: 'Placeholder',
  color: theme.colors.lightGray,
}

/** @component */
export default NeuTextInput

const InputWrapper = styled.div`
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => `${props.height}px`};
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: ${() => theme.colors.lightGray};
  border: 4px solid ${() => theme.colors.lightGray};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getLightBoxShadow(props.color, 4, theme.intensity, true)}, ${getDarkBoxShadow(props.color, 4, theme.intensity, true)}`};
  padding: 0 1.5rem;
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${() => theme.colors.darkGray};
  outline: none;
`
Input.defaultProps = {
  type: 'text',
}
