/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getDarkBoxShadow, getLightBoxShadow } from '../../utils/colors'

const NeuRadio = ({
  data, color, radio, onChange, distance, ...props
}) => {
  const [selected, setSelected] = useState(radio ? null : [])

  const handleClick = (d) => {
    let selectedSnapshot = selected
    if (radio) {
      selectedSnapshot = d === selected ? null : d
    } else if (selected?.find((f) => d === f)) {
      selectedSnapshot = selected?.filter((f) => d !== f)
    } else {
      selectedSnapshot = selected?.concat(d)
    }
    setSelected(selectedSnapshot)
    if (onChange) {
      onChange(selectedSnapshot)
    }
  }

  const checkSelected = (d) => (radio ? d === selected : selected?.find((f) => d === f))

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper data-testid="neuradio-wrapper" {...props}>
      {data
        && data?.length !== 0
        && data.map((d, index) => (
          <RadioBlockWrapper key={d + index}>
            <Radio data-testid={`neuradio-radio-${d}`} color={color} selected={checkSelected(d)} onClick={() => handleClick(d)} distance={distance}>
              <RadioInput id={d} />
            </Radio>
            <RadioText htmlFor={d}>{d}</RadioText>
          </RadioBlockWrapper>
        ))}
    </Wrapper>
  )
}
NeuRadio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  color: PropTypes.string,
  radio: PropTypes.bool,
  onChange: PropTypes.func,
  distance: PropTypes.number,
}
NeuRadio.defaultProps = {
  data: null,
  color: theme.colors.lightGray,
  radio: false,
  onChange: null,
  distance: 4,
}

/** @component */
export default NeuRadio

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
`

const RadioBlockWrapper = styled.div`
  margin: auto;
  display: flex;
`

const RadioText = styled.label`
  margin: auto;
  margin-left: 20px;
  margin-bottom: 2px;
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

const Radio = styled.button`
  outline: none;
  margin: auto;
  padding: 0;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => (props.selected ? `${getLightBoxShadow(props.color, 2, theme.intensity, true)}, ${getDarkBoxShadow(props.color, 2, theme.intensity, true)}` : `${getLightBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, false)}`)};
  position: relative;
  font-size: 20px;
  color: ${() => theme.colors.darkGray};
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: 10px;
    left: 10px;
    z-index: 1;
    /* transition: all 0.3s ease-in-out; */
    border-radius: 100%;
    background: ${(props) => (props.selected ? 'rgba(153, 42, 18, 1)' : theme.colors.darkGray)};
    box-shadow: ${(props) => (props.selected ? '0px 0px 10px 4px rgba(153,42,18,0.4)' : 'none')};
  }
`
