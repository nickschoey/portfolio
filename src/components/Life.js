import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophoneAlt,
  faWineGlass,
  faMountain,
  faDesktop,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../constants';

const Life = () => {
  return (
    <Container>
      <LifeItem
        icon={faMicrophoneAlt}
        title="A long time ago"
        content={
          <div>
            Born in Sant Sadurní (BCN).
            <br />
            Studied Journalism at Universitat Autònoma de Barcelona.
            <br />
          </div>
        }
      />
      <LifeItem
        gradient
        icon={faWineGlass}
        title="Over ten years ago"
        content="Worked in PR for one of the largest privately held, family-owned winemaking companies in the world."
      />
      <LifeItem
        icon={faMountain}
        title="Six years ago"
        content={
          <div>
            Moved to the French Alps.
            <br />
            Climbed many mountains.
            <br />
            Became fascinated with development.
          </div>
        }
      />
      <LifeItem
        gradient
        icon={faDesktop}
        title="2018"
        content={
          <div>
            Relocated to Barcelona.
            <br />
            Graduated at
            <a style={{ color: '#ff7b10' }}> Codeworks</a>.
            <br />
            Freelanced at{' '}
            <span style={{ color: '#0096d6' }}>Abi Global Health</span>.
          </div>
        }
      />
      <LifeItem
        icon={faLaptopCode}
        title="Nowadays"
        content={
          <div>
            Hired by
            <a style={{ color: '#007db8' }}> SAP </a>
            as a Software developer creating internal tool prototypes.
          </div>
        }
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 0em 25em;
  display: flex;
  background-color: black;
  color: #fff;
  font-family: 'Open Sans';
`;

const LifeItem = ({ icon, title, content, gradient }) => {
  return (
    <ItemContainer gradient={gradient}>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: colors.red, fontSize: '2rem' }}
      />
      <ItemTitle>{title}</ItemTitle>
      <ItemContent>{content}</ItemContent>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  padding: 3em 1em;
  background-color: ${({ gradient }) =>
    gradient
      ? 'linear-gradient( 0deg, #000000 0%, #242323 50%, #000000 100%)'
      : 'transparent'};
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ItemTitle = styled.div`
  font-weight: 500;
  padding: 15px 0px;
  font-size: 13px;
`;
const ItemContent = styled.div`
  font-size: 12px;
`;

export default Life;
