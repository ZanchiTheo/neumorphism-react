import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

const NeuButton = ({
  children, width, height, buttonClick, gradient, actived, radius, color,
}) => {
  const ratioBlur = Math.floor(height * 0.7)
  const ratioEpanse = Math.floor(height * 0.35)

  return (
    <ButtonWrapper width={width} height={height} onClick={buttonClick} radius={radius} color={color}>
      {children}
      {gradient && <Radial actived={actived} blur={ratioBlur} expanse={ratioEpanse} />}
    </ButtonWrapper>
  )
}

NeuButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.number,
  height: PropTypes.number,
  gradient: PropTypes.bool,
  actived: PropTypes.bool,
  radius: PropTypes.number,
  buttonClick: PropTypes.func,
  color: PropTypes.string,
}
NeuButton.defaultProps = {
  children: null,
  width: null,
  height: null,
  gradient: false,
  actived: false,
  radius: 25,
  buttonClick: null,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuButton

const ButtonWrapper = styled.button`
  border: none;
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getLightBoxShadow(props.color, 0, theme.intensity, true)}, ${getDarkBoxShadow(
    props.color,
    0,
    theme.intensity,
    true
  )}`};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  transition: box-shadow 0.1s ease;
  outline: none;
  &:active {
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, 0, theme.intensity, false)}, ${getDarkBoxShadow(props.color, 0, theme.intensity, false)}, ${getLightBoxShadow(props.color, theme.distance, theme.intensity, true)}, ${getDarkBoxShadow(
    props.color,
    theme.distance,
    theme.intensity,
    true
  )}`};
  }
  position: relative;
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
  cursor: pointer;
`

const Radial = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: box-shadow 0.1s ease;
  box-shadow: ${(props) => (props.actived ? `0px 0px ${props.blur}px ${props.expanse}px rgba(153, 42, 18,0.4)` : 'none')};
`
