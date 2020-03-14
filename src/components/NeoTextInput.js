import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NeoTextInput = ({ width, height, fontSize, type, placeholder }) => {
  return (
    <InputWrapper width={width} height={height}>
      <Input
        fontSize={fontSize}
        placeholder={placeholder}
        type={type}
      />
    </InputWrapper>
  )
}
NeoTextInput.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
NeoTextInput.defaultProps = {
  width: null,
  height: 50,
  fontSize: 20,
  type: 'text',
  placeholder: 'Placeholder',
}

export default NeoTextInput

const InputWrapper = styled.div`
  margin: auto;
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  height: ${(props) => `${props.height}px`};
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: #cbcbcb;
  border: 4px solid #cbcbcb;
  box-shadow: 6px 6px 13px #b4b4b4, -6px -6px 13px #e4e4e4, 
  inset 6px 6px 13px #b4b4b4, inset -6px -6px 13px #e4e4e4;
  padding: 0 1.5rem;
  font-size: ${(props) => `${props.fontSize}px`};
  color: #525252;
  outline: none;
`
Input.defaultProps = {
  type: 'text',
}