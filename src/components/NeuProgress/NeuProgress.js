import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import theme from '../../theme'
import NeuDiv from '../NeuDiv/NeuDiv'

const NeuProgress = ({ progress, color }) => (
  <NeuDiv height={45} color={color} radius={10}>
    <ProgressWrapper>
      <NeuDiv distance={3} height={15} color={color} radius={4} revert>
        <Progress progress={progress} radius={4} />
      </NeuDiv>
    </ProgressWrapper>
  </NeuDiv>
)
NeuProgress.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
}
NeuProgress.defaultProps = {
  progress: 0,
  color: theme.colors.lightGray,
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
