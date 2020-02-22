import React from 'react';
import styled from 'styled-components';
import ImageSpring from './ImageSpring';
import Icon from '../Icon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const data = {
  title: '21 Meals',
  fontColor: '#ea9267',
  backgroundColor: '#221e2f',
  techStack: 'React + Redux, Ant Design, Koa, mySQL',
  description: 'Meal planner and recipe handler created as a PWA',
  github: 'https://github.com/nickschoey/mealee-client',
  site: ''
};
const Project = () => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <TechStack>{data.techStack}</TechStack>
      <Carousel>
        <ImageSpring />
      </Carousel>
      <Description>{data.description}</Description>
      <div>
        <Icon icon={faGithub} hoverColor={data.fontColor} url={data.github} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${data.backgroundColor};
  color: ${data.fontColor};
`;

const Title = styled.h1``;

const Carousel = styled.div``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TechStack = styled.h3`
  font-weight: normal;
`;

const Description = styled.p``;

export default Project;
