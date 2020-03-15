import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import { getLightBoxShadow, getDarkBoxShadow } from '../../utils/colors'

const divWidth = 1.8
const divHeight = 3
const divRadius = 10

const Digit = ({ digit, radial, color }) => (
  <Wrapper width={divWidth} height={divHeight} radius={divRadius} color={color}>
    <DigitText radial={radial}>{digit}</DigitText>
    {radial && <Radial />}
  </Wrapper>
)
Digit.propTypes = {
  digit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radial: PropTypes.bool,
  color: PropTypes.string,
}
Digit.defaultProps = {
  digit: null,
  radial: false,
  color: theme.colors.lightGray,
}

const NeuDigitalClock = ({
  width, height, revert, color,
}) => {
  const updateDate = () => {
    console.log('hey')
  }

  useEffect(() => {
    const interval = setInterval(updateDate, 1000)
    return clearInterval(interval)
  }, [])

  return (
    <Wrapper width={width} height={height} revert={revert} color={color}>
      <DigitsWrapper>
        <Digit color={color} digit={1} />
        <Digit color={color} digit={1} />
        <Digit color={color} digit=":" radial />
        <Digit color={color} digit={1} />
        <Digit color={color} digit={1} />
      </DigitsWrapper>
    </Wrapper>
  )
}
NeuDigitalClock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  revert: PropTypes.bool,
  color: PropTypes.string,
}
NeuDigitalClock.defaultProps = {
  width: null,
  height: null,
  revert: false,
  color: theme.colors.lightGray,
}

/** @component */
export default NeuDigitalClock

const Wrapper = styled.div`
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '25px')};
  background-color: ${() => theme.colors.lightGray};
  box-shadow: ${(props) => (props.revert
    ? `${getLightBoxShadow(props.color, theme.distance, theme.intensity, true)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, true)}`
    : `${getLightBoxShadow(props.color, theme.distance, theme.intensity, false)}, ${getDarkBoxShadow(props.color, theme.distance, theme.intensity, false)}`)};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  position: relative;
  text-align: center;
  display: flex;
`
const DigitsWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
`
const DigitText = styled.p`
  margin: auto;
  font-size: 1.8rem;
  color: ${(props) => (props.radial ? 'rgba(153, 42, 18, 1)' : theme.colors.darkGray)};
`
const Radial = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0px 2px 18px 9px rgba(153, 42, 18, 0.4);
`
