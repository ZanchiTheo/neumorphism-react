import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

const NeuButton = ({
  children, width, height, onClick, radius, color,
}) => (
  <ButtonWrapper data-testid="neubutton-wrapper" width={width} height={height} onClick={onClick} radius={radius} color={color}>
    {children}
  </ButtonWrapper>
)

NeuButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  onClick: PropTypes.func,
  color: PropTypes.string,
}
NeuButton.defaultProps = {
  children: null,
  width: null,
  height: null,
  radius: 25,
  onClick: null,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuButton

const ButtonWrapper = styled.button`
  border: none;
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getLightBoxShadow(props.color, 0, theme.intensity, true)}, ${getDarkBoxShadow(props.color, 0, theme.intensity, true)}`};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  transition: box-shadow 0.1s ease;
  outline: none;
  &:active {
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, 0, theme.intensity, false)}, ${getDarkBoxShadow(props.color, 0, theme.intensity, false)}, ${getLightBoxShadow(props.color, theme.distance, theme.intensity, true)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, true)}`};
  }
  position: relative;
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
  cursor: pointer;
`
