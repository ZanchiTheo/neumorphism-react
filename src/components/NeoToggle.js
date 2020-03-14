import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const sizes = {
  medium: {
    divWidth: 120,
    divHeight: 80,
    divRadius: 25,
    toggleWidth: 80,
    toggleHeight: 40,
    roundSize: 34,
    roundTop: 3,
    roundLefts: [3, 43],
    dotTop: 16,
    dotLefts: [16, 56],
    dotSize: 8,
  },
  small: {
    divWidth: 60,
    divHeight: 40,
    divRadius: 15,
    toggleWidth: 40,
    toggleHeight: 20,
    roundSize: 17,
    roundTop: 1.5,
    roundLefts: [1.5, 21.5],
    dotTop: 8,
    dotLefts: [8, 28],
    dotSize: 4,
  },
}

const NeoToggle = ({ size }) => {
  const [toggle, setToggle] = useState(false)
  const { divWidth, divHeight, divRadius } = sizes[size] || {}

  return (
    <ToggleWrapper
      width={divWidth}
      height={divHeight}
      radius={divRadius}
    >
      <Toggle 
        size={sizes[size]}
        toggle={toggle} 
        onClick={() => setToggle(!toggle)}
      />
    </ToggleWrapper>
  )
}
NeoToggle.propTypes = {
  size: PropTypes.oneOf(['big', 'medium', 'small']),
}

export default NeoToggle

const ToggleWrapper = styled.div`
  border-radius: ${(props) => `${props.radius}px`};
  background: #cbcbcb;
  box-shadow: 8px 8px 13px #b4b4b4, -8px -8px 13px #e4e4e4, inset 0px 0px 0px #b4b4b4, inset 0px 0px 0px #e4e4e4;
  margin: auto;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
`

const Toggle = styled.div`
  border-radius: 40px;
  background: #cbcbcb;
  border: 4px solid #cbcbcb;
  box-shadow: 6px 6px 13px #b4b4b4, -6px -6px 13px #e4e4e4, 
  inset 6px 6px 13px #b4b4b4, inset -6px -6px 13px #e4e4e4;

  margin: auto;
  width: ${(props) => `${props.size.toggleWidth}px`};
  height: ${(props) => `${props.size.toggleHeight}px`};
  position: relative;

  cursor: pointer;

  &::after {
    content: '';
    transition: left 0.3s ease-in-out;
    border-radius: 40px;
    position: absolute;
    top: ${(props) => `${props.size.roundTop}px`};
    left: ${(props) => props.toggle ? `${props.size.roundLefts[1]}px` : `${props.size.roundLefts[0]}px`};
    width: ${(props) => `${props.size.roundSize}px`};
    height: ${(props) => `${props.size.roundSize}px`};
    background: #cbcbcb;
    box-shadow: 1px 1px 13px #727272, -1px -1px 13px #cccccc;
    /* box-shadow: 3px 3px 13px #727272, -3px -3px 13px #ffffff; */
  }

  &::before {
    content: '';
    z-index: 1;
    transition: all 0.3s ease-in-out;
    border-radius: 50px;
    position: absolute;
    top: ${(props) => `${props.size.dotTop}px`};
    left: ${(props) => props.toggle ? `${props.size.dotLefts[1]}px` : `${props.size.dotLefts[0]}px`};
    width: ${(props) => `${props.size.dotSize}px`};
    height: ${(props) => `${props.size.dotSize}px`};
    background: ${(props) => props.toggle ? 'rgba(153, 42, 18, 1)' : '#525252'};
    box-shadow: ${(props) => props.toggle ? '0px 0px 10px 4px rgba(153,42,18,0.4)' : 'none'};
  }
`