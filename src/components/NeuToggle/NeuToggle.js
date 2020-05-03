import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

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

const NeuToggle = ({
  size, color, onChange, distance, ...props
}) => {
  const [toggle, setToggle] = useState(false)
  const { divWidth, divHeight, divRadius } = sizes[size] || {}

  const handleClick = () => {
    const newValue = !toggle
    setToggle(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <ToggleWrapper
      data-testid="neutoggle-wrapper"
      width={divWidth}
      height={divHeight}
      radius={divRadius}
      color={color}
      distance={distance}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Toggle data-testid="neutoggle-toggle" size={sizes[size]} toggle={toggle} onClick={handleClick} color={color} />
    </ToggleWrapper>
  )
}
NeuToggle.propTypes = {
  size: PropTypes.oneOf(['big', 'medium', 'small']),
  color: PropTypes.string,
  onChange: PropTypes.func,
  distance: PropTypes.number,
}
NeuToggle.defaultProps = {
  size: 'small',
  color: theme.colors.lightGray,
  onChange: null,
  distance: theme.distance,
}

/** @component */
export default NeuToggle

const ToggleWrapper = styled.div`
  border-radius: ${(props) => `${props.radius}px`};
  background: ${() => theme.colors.lightGray};
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, props.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, props.distance, theme.intensity, false)}`};
  margin: auto;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  display: flex;
`

const Toggle = styled.div`
  border-radius: 40px;
  background: ${() => theme.colors.lightGray};
  border: 4px solid ${() => theme.colors.lightGray};
  /* box-shadow: 6px 6px 13px #b4b4b4, -6px -6px 13px #e4e4e4, inset 6px 6px 13px #b4b4b4, inset -6px -6px 13px #e4e4e4; */
  box-shadow: ${(props) => `${getLightBoxShadow(props.color, 6, theme.intensity, false)}, ${getDarkBoxShadow(props.color, 1, theme.intensity, false)}, ${getLightBoxShadow(props.color, 6, theme.intensity, true)}, ${getDarkBoxShadow(props.color, 1, theme.intensity, true)}`};

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
    left: ${(props) => (props.toggle ? `${props.size.roundLefts[1]}px` : `${props.size.roundLefts[0]}px`)};
    width: ${(props) => `${props.size.roundSize}px`};
    height: ${(props) => `${props.size.roundSize}px`};
    background: ${() => theme.colors.lightGray};
    /* box-shadow: 1px 1px 13px #727272, -1px -1px 13px #cccccc; */
    box-shadow: ${(props) => `${getLightBoxShadow(props.color, 1, theme.intensity, false)}, ${getDarkBoxShadow(props.color, 1, theme.intensity, false)}`};
  }

  &::before {
    content: '';
    z-index: 1;
    transition: all 0.3s ease-in-out;
    border-radius: 50px;
    position: absolute;
    top: ${(props) => `${props.size.dotTop}px`};
    left: ${(props) => (props.toggle ? `${props.size.dotLefts[1]}px` : `${props.size.dotLefts[0]}px`)};
    width: ${(props) => `${props.size.dotSize}px`};
    height: ${(props) => `${props.size.dotSize}px`};
    background: ${(props) => (props.toggle ? 'rgba(153, 42, 18, 1)' : theme.colors.darkGray)};
    box-shadow: ${(props) => (props.toggle ? '0px 0px 10px 4px rgba(153,42,18,0.4)' : 'none')};
  }
`
