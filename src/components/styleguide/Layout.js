import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'

const Layout = ({ height, color, children }) => (
  <LayoutWrapper height={height} color={color}>
    {children}
  </LayoutWrapper>
)
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  height: PropTypes.number,
  color: PropTypes.string,
}
Layout.defaultProps = {
  children: null,
  height: null,
  color: theme.colors.lightGray,
}

/** @component */
export default Layout

const LayoutWrapper = styled.div`
  display: flex;
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  background-color: ${(props) => props.color};
  padding: 0 20px;
`
