import React from 'react';
import styled from 'styled-components';
import ImageSpring from './ImageSpring';
import Icon from '../Icon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Project = ({ data }) => {
  console.log(data);
  return (
    <Container backgroundColor={data.backgroundColor} color={data.fontColor}>
      <Title>{data.title}</Title>
      <TechStack>{data.techStack}</TechStack>
      <div>
        <ImageSpring slides={data.imageUrls} />
      </div>
      <Description>{data.description}</Description>
      <div>
        {data.github && (
          <Icon icon={faGithub} hoverColor={data.fontColor} url={data.github} />
        )}
        {data.site && (
          <Icon icon={faGlobe} hoverColor={data.fontColor} url={data.site} />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

const Title = styled.h2``;

const TechStack = styled.h6`
  font-weight: normal;
`;

const Description = styled.p``;

export default Project;
