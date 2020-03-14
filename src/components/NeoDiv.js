import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NeoDiv = ({ children, width, height, revert }) => {
  return(
    <DivWrapper width={width} height={height} revert={revert}>
      {children}
    </DivWrapper>
  )
}
NeoDiv.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  revert: PropTypes.bool,
}
NeoDiv.defaultProps = {
  width: null,
  height: null,
  revert: false,
}

export default NeoDiv

const DivWrapper = styled.div`
  border-radius: 25px;
  background: #cbcbcb;
  box-shadow: ${(props) => props.revert ? 'inset 8px 8px 13px #b4b4b4, inset -8px -8px 13px #e4e4e4' : '8px 8px 13px #b4b4b4, -8px -8px 13px #e4e4e4'};
  margin: auto;
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  height: ${(props) => props.height ? `${props.height}px` : '100%'};
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
`