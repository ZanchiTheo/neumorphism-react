import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NeoButton = ({ children, width, height, buttonClick, gradient, clicked, radius }) => {
  const ratioBlur = Math.floor(height * 0.7)
  const ratioEpanse = Math.floor(height * 0.35)

  return(
    <ButtonWrapper width={width} height={height} onClick={buttonClick} radius={radius}>
      {children}
      {gradient && <Radial clicked={clicked} blur={ratioBlur} expanse={ratioEpanse} />}
    </ButtonWrapper>
  )
}
NeoButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  gradient: PropTypes.bool,
  clicked: PropTypes.bool,
  radius: PropTypes.number,
  buttonClick: PropTypes.func,
}
NeoButton.defaultProps = {
  children: null,
  width: null,
  height: null,
  gradient: false,
  clicked: false,
  radius: 25,
  buttonClick: null,
}

export default NeoButton

const ButtonWrapper = styled.button`
  border-radius: ${(props) => props.radius}px;
  background: #cbcbcb;
  box-shadow: 8px 8px 13px #b4b4b4, -8px -8px 13px #e4e4e4, inset 0px 0px 0px #b4b4b4, inset 0px 0px 0px #e4e4e4;
  margin: auto;
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  height: ${(props) => props.height ? `${props.height}px` : '100%'};
  transition: box-shadow 0.1s ease;
  outline: none;
  &:active {
    box-shadow: 0px 0px 0px #b4b4b4, 0px 0px 0px #e4e4e4, inset 8px 8px 13px #b4b4b4, inset -8px -8px 13px #e4e4e4;
  }
  position: relative;
`

const Radial = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: box-shadow 0.1s ease;
  box-shadow: ${(props) => props.clicked ? `0px 0px ${props.blur}px ${props.expanse}px rgba(153, 42, 18,0.4)` : 'none'};
`