import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { colors } from '../constants';

import SAP from '../assets/sap.png';
import abi from '../assets/abi.png';

const data = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      {' '}
      I'm a Software Engineer based in <Red>Barcelona</Red>.
    </animated.div>
  ),

  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I develop Full Stack Applications at <Logo src={SAP} />
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I created a Front End for <Logo src={abi} />
      </ItemContainer>
    </animated.div>
  )
];

export default () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0%,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      opacity: 0,
      transform: 'translate3d(0%,-100%,0)',
      position: 'absolute',
      width: '100%'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      set(state => (state + 1) % 3);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div style={{ height: '70px', position: 'relative' }}>
      {transitions.map(({ item, props, key }) => {
        const Page = data[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

const Red = styled.span`
  font-weight: bold;
  color: ${colors.red};
`;

const Logo = styled.img`
  height: 2rem;
  width: auto;
  padding-left: 0.3rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
