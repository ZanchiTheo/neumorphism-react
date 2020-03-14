import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'

const divWidth = 1.8
const divHeight = 3
const divRadius = 10

const Digit = ({ digit, radial }) => (
  <Wrapper width={divWidth} height={divHeight} radius={divRadius}>
    <DigitText radial={radial}>{digit}</DigitText>
    {radial && <Radial />}
  </Wrapper>
)
Digit.propTypes = {
  digit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radial: PropTypes.bool,
}
Digit.defaultProps = {
  digit: null,
  radial: false,
}

const NeuDigitalClock = ({ width, height, revert }) => {
  const updateDate = () => {
    console.log('hey')
  }

  useEffect(() => {
    const interval = setInterval(updateDate, 1000)
    return clearInterval(interval)
  }, [])

  return (
    <Wrapper width={width} height={height} revert={revert}>
      <DigitsWrapper>
        <Digit digit={1} />
        <Digit digit={1} />
        <Digit digit=":" radial />
        <Digit digit={1} />
        <Digit digit={1} />
      </DigitsWrapper>
    </Wrapper>
  )
}
NeuDigitalClock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  revert: PropTypes.bool,
}
NeuDigitalClock.defaultProps = {
  width: null,
  height: null,
  revert: false,
}

export default NeuDigitalClock

const Wrapper = styled.div`
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '25px')};
  background-color: ${() => theme.colors.lightGray};
  box-shadow: ${(props) => (props.revert ? 'inset 8px 8px 13px #b4b4b4, inset -8px -8px 13px #e4e4e4' : '8px 8px 13px #b4b4b4, -8px -8px 13px #e4e4e4')};
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
  height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
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
