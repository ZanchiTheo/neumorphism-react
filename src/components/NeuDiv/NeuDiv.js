import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getDarkBoxShadow, getLightBoxShadow } from '../../utils/colors'

const NeuDiv = ({
  children, width, height, revert, color, radius, distance, column,
}) => (
  <DivWrapper data-testid="neudiv-wrapper" width={width} height={height} revert={revert} color={color} radius={radius} distance={distance} column={column}>
    {children}
  </DivWrapper>
)
NeuDiv.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.number,
  height: PropTypes.number,
  distance: PropTypes.number,
  radius: PropTypes.number,
  revert: PropTypes.bool,
  column: PropTypes.bool,
  color: PropTypes.string,
}
NeuDiv.defaultProps = {
  children: null,
  width: null,
  height: null,
  distance: theme.distance,
  radius: 25,
  revert: false,
  column: false,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuDiv

const DivWrapper = styled.div`
  border-radius: ${(props) => props.radius}px;
  background: ${() => theme.colors.lightGray};
  box-shadow: ${(props) => (props.revert
    ? `${getLightBoxShadow(props.color, props.distance, theme.intensity, true)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, true)}`
    : `${getLightBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, false)}`)};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
`
