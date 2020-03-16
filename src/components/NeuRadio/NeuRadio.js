import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getDarkBoxShadow, getLightBoxShadow } from '../../utils/colors'

const NeuRadio = ({ data, color }) => (
  <Wrapper>
    {data
      && data?.length !== 0
      && data.map((d) => (
        <RadioBlockWrapper>
          <Radio color={color}>
            <RadioInput />
          </Radio>
          <RadioText>{d}</RadioText>
        </RadioBlockWrapper>
      ))}
  </Wrapper>
)
NeuRadio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  color: PropTypes.string,
}
NeuRadio.defaultProps = {
  data: null,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuRadio

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const RadioBlockWrapper = styled.div`
  margin: auto;
  display: flex;
`

const RadioText = styled.p`
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${() => theme.colors.darkGray};
  outline: none;
`

const RadioInput = styled.input`
  position: absolute;
  left: -900px;
`
RadioInput.defaultProps = {
  type: 'checkbox',
}

const Radio = styled.label`
  margin: auto;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, 6, theme.intensity, false)}, ${getDarkBoxShadow(props.color, 6, theme.intensity, false)}`};
  outline: none;
  &:active {
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, 2, theme.intensity, true)}, ${getDarkBoxShadow(props.color, 2, theme.intensity, true)}`};
  }
  position: relative;
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
  cursor: pointer;
`
