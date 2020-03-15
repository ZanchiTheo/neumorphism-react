import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { colorLuminance } from '../../utils/colors'

const NeuDiv = ({
  children, width, height, revert,
}) => (
  <DivWrapper width={width} height={height} revert={revert}>
    {children}
  </DivWrapper>
)
NeuDiv.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.number,
  height: PropTypes.number,
  revert: PropTypes.bool,
}
NeuDiv.defaultProps = {
  children: null,
  width: null,
  height: null,
  revert: false,
}

export default NeuDiv

const DivWrapper = styled.div`
  border-radius: 25px;
  background: ${() => theme.colors.lightGray};
  box-shadow: ${(props) => (props.revert
    ? `inset 8px 8px 13px ${colorLuminance(theme.colors.lightGray, -0.2)}, inset -8px -8px 13px ${colorLuminance(theme.colors.lightGray, 0.2)}`
    : `8px 8px 13px ${colorLuminance(theme.colors.lightGray, -0.2)}, -8px -8px 13px ${colorLuminance(theme.colors.lightGray, 0.2)}`)};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
`
