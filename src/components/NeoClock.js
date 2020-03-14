import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const tirets = [
  { hour: 1, teta: 30 },
  { hour: 2, teta: 60 },
  { hour: 3, teta: 90 },
  { hour: 4, teta: 120 },
  { hour: 5, teta: 150 },
  { hour: 6, teta: 180 },
  { hour: 7, teta: 210 },
  { hour: 8, teta: 240 },
  { hour: 9, teta: 270 },
  { hour: 10, teta: 300 },
  { hour: 11, teta: 330 },
  { hour: 12, teta: 360 }
];

const NeoClock = ({ donut }) => {
  const size = 260;
  const innerWidth = size - 20;
  const innerClockWidth = 195;
  const getTetaDegree = teta => teta * (Math.PI / 180);
  const getSecondsDegree = (seconds, milliseconds) =>
    ((seconds + milliseconds / 1000) * 360) / 60;
  const getMinutesDegree = minutes => (minutes * 360) / 60;
  const getHoursDegree = (hours, minutes) =>
    ((hours + minutes / 60) * 360) / 12;
  const getX = teta => (innerWidth / 2) * Math.sin(getTetaDegree(teta));
  const getY = teta => (innerWidth / 2) * Math.cos(getTetaDegree(teta));
  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();

  const animate = () => {
    const now = new Date();
    secondsRef.current.style.transform = `rotate(${getSecondsDegree(
      now.getSeconds(),
      now.getMilliseconds()
    )}deg)`;
    minutesRef.current.style.transform = `rotate(${getMinutesDegree(
      now.getMinutes()
    )}deg)`;
    hoursRef.current.style.transform = `rotate(${getHoursDegree(
      now.getHours(),
      now.getMinutes()
    )}deg)`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <Clock size={size}>
      <InnerClock size={innerClockWidth} donut={donut}>
        {tirets.map(tiret => (
          <TiretPos
            key={tiret.hour}
            x={getX(tiret.teta)}
            y={getY(tiret.teta)}
            teta={tiret.teta}
          >
            <Tiret />
          </TiretPos>
        ))}
        <CenterPos>
          <Center>
            <Seconds ref={secondsRef} />
            <Minutes ref={minutesRef} />
            <Hours ref={hoursRef} />
          </Center>
        </CenterPos>
      </InnerClock>
    </Clock>
  );
};
NeoClock.propTypes = {
  donut: PropTypes.bool
};
NeoClock.defaultProps = {
  donut: false
};

export default NeoClock;

const Clock = styled.div`
  margin: auto;
  border-radius: 100%;
  display: flex;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  /* background-color: #cbcbcb; */
  /* background: linear-gradient(145deg, #b8b8b8, #b8b8b8 20%, #dadada); */
  /* box-shadow: 28px 28px 84px #525252, -28px -28px 84px #ffffff; */
  box-shadow: 8px 8px 13px #b4b4b4, -8px -8px 13px #e4e4e4;
`;

const InnerClock = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border: ${props => (props.donut ? "16px solid #cbcbcb" : "none")};
  box-shadow: ${props =>
    props.donut
      ? "inset 8px 8px 13px #b4b4b4, inset -8px -8px 13px #e4e4e4"
      : "none"};
  margin: auto;
  position: relative;
  border-radius: 100%;
  background: none;
`;

const TiretPos = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  top: ${props => `calc(50% - ${props.x}px)`};
  left: ${props => `calc(50% - ${props.y}px)`};
  -moz-transform: ${props => `rotate(${props.teta}deg)`};
  -ms-transform: ${props => `rotate(${props.teta}deg)`};
  -webkit-transform: ${props => `rotate(${props.teta}deg)`};
  transform: ${props => `rotate(${props.teta}deg)`};
`;

const Tiret = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 14px;
    height: 6px;
    top: -2px;
    border-radius: 2px;
    background-color: #525252;
  }
`;

const CenterPos = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #525252;
  border-radius: 10px;
  z-index: 3;
`;

const Seconds = styled.div`
  width: 2px;
  height: 90px;
  position: absolute;
  bottom: calc(50%);
  left: calc(50% - 1px);
  background-color: #525252;
  border-radius: 40px;
  z-index: 2;

  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -moz-transform-origin: bottom; /* Set transform origin to center bottom */
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
`;

const Minutes = styled.div`
  width: 4px;
  height: 90px;
  position: absolute;
  bottom: calc(50%);
  left: calc(50% - 2px);
  background-color: #525252;
  border-radius: 40px;
  z-index: 1;

  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(60deg);
  -moz-transform-origin: bottom; /* Set transform origin to center bottom */
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
`;

const Hours = styled.div`
  width: 4px;
  height: 75px;
  position: absolute;
  bottom: calc(50%);
  left: calc(50% - 2px);
  background-color: rgba(153, 42, 18, 1);
  box-shadow: 0px 0px 15px 1px rgba(153, 42, 18, 0.4);
  border-radius: 40px;
  z-index: 0;

  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(90deg);
  -moz-transform-origin: bottom; /* Set transform origin to center bottom */
  -ms-transform-origin: bottom;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
`;
