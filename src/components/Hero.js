import React from 'react';
import styled from 'styled-components';
import splashImage from '../assets/2.jpg';
import { colors, device } from '../constants';
import HeroSpring from './HeroSpring';
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import Icon from './Icon';
const Hero = () => (
  <Container>
    <Title>
      Hi
      <span role="img" aria-label="wave">
        👋
      </span>{' '}
      I'm Jordi.
    </Title>
    <SubTitle>
      <HeroSpring />
    </SubTitle>
    <IconContainer>
      <Icon
        icon={faGithub}
        hoverColor={colors.red}
        target="_blank"
        url="https://github.com/nickschoey"
      />
      <Icon
        icon={faLinkedin}
        hoverColor={colors.red}
        target="_blank"
        url="https://www.linkedin.com/in/jordi-zambrano/"
      />
      <Icon
        icon={faInstagram}
        hoverColor={colors.red}
        target="_blank"
        url="https://www.instagram.com/jordimzambrano/"
      />
    </IconContainer>
  </Container>
);

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
    url(${splashImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

const Title = styled.div`
  font-size: 2.5rem;
  padding-bottom: 1.1rem;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  text-align: center;
  width: 90%;
  @media ${device.tablet} {
    width: 50%;
    font-size: 1.2rem;
  }
`;

const IconContainer = styled.div`
  & {
    padding: 5px;
  }
`;

export default Hero;
