import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import NeuDiv from '../NeuDiv/NeuDiv'

const NeuProgress = ({
  progress, color, distance, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NeuDiv height="45px" color={color} radius={10} distance={distance} {...props}>
    <ProgressWrapper data-testid="neuprogress-wrapper">
      <NeuDiv distance={3} height="15px" color={color} radius={4} revert>
        <Progress progress={progress > 100 ? 100 : progress} radius={4} data-testid="neuprogress-progress" />
      </NeuDiv>
    </ProgressWrapper>
  </NeuDiv>
)
NeuProgress.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  distance: PropTypes.number,
}
NeuProgress.defaultProps = {
  progress: 0,
  color: theme.colors.lightGray,
  distance: theme.distance,
}

/** @component */
export default NeuProgress

const ProgressWrapper = styled.div`
  margin: auto 10px;
  width: 100%;
`

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: rgba(153, 42, 18, 1);
  box-shadow: ${(props) => (props.progress <= 0 ? 'none' : '0px 0px 10px 4px rgba(153,42,18,0.4)')};
  border-radius: ${(props) => props.radius}px;
`
