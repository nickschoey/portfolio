import React from 'react';
import styled from 'styled-components';
import ImageSpring from './ImageSpring';
import Icon from '../Icon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../constants';

const Project = ({ data }) => {
  console.log(data);
  return (
    <Container backgroundColor={data.backgroundColor} color={data.fontColor}>
      <Title>{data.title}</Title>
      <TechStack>{data.techStack}</TechStack>
      <ImageContainer>
        <ImageSpring slides={data.imageUrls} />
      </ImageContainer>
      <Description>{data.description}</Description>
      <div>
        {data.github && (
          <Icon
            icon={faGithub}
            hoverColor={data.fontColor}
            url={data.github}
            color={data.color}
          />
        )}
        {data.site && (
          <Icon
            icon={faGlobe}
            hoverColor={data.fontColor}
            url={data.site}
            color={data.color}
          />
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

const ImageContainer = styled.div`
  width: 90vw;
  height: 300px;
  @media ${device.tablet} {
    width: 60vw;
    height: 40vw;
  }
`;

const Title = styled.h1`
  font-size: 30px;
`;

const TechStack = styled.h4`
  text-align: center;
  padding: 0 20px;
  font-weight: normal;
`;

const Description = styled.p`
  padding: 0 20px;
  text-align: center;
`;

export default Project;
