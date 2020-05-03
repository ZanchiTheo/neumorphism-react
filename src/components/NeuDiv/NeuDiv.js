import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getDarkBoxShadow, getLightBoxShadow } from '../../utils/colors'

const NeuDiv = ({
  children, width, height, revert, color, radius, distance, column, ...props
}) => (
  <DivWrapper
    data-testid="neudiv-wrapper"
    width={width}
    height={height}
    revert={revert}
    color={color}
    radius={radius}
    distance={distance}
    column={column}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </DivWrapper>
)
NeuDiv.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.string,
  height: PropTypes.string,
  distance: PropTypes.number,
  radius: PropTypes.number,
  revert: PropTypes.bool,
  column: PropTypes.bool,
  color: PropTypes.string,
}
NeuDiv.defaultProps = {
  children: null,
  width: '100%',
  height: '100%',
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
  background: ${(props) => props.color};
  box-shadow: ${(props) => (props.revert
    ? `${getLightBoxShadow(props.color, props.distance, theme.intensity, true)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, true)}`
    : `${getLightBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, false)}`)};
  margin: auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
`
