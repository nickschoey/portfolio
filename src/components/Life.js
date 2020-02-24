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
import { colors, device } from '../constants';

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
        gradient={true}
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
            Creating prototypes at
            <a style={{ color: '#007db8' }}> SAP </a>
          </div>
        }
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: ${colors.white};
  font-family: 'Open Sans';
  @media ${device.tablet} {
    flex-direction: row;
    padding: 0 10%;
  }
`;

const LifeItem = ({ icon, title, content }) => {
  return (
    <ItemContainer>
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
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.white};
  flex: 1;
  @media ${device.tablet} {
    border-bottom: 0px;
  }
`;
const ItemTitle = styled.div`
  font-weight: 500;
  padding: 15px 0px;
  font-size: 15px;
`;
const ItemContent = styled.div`
  font-size: 12px;
`;

export default Life;
