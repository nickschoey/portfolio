import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faMap,
  faEnvelope,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../constants';
import { faGitkraken, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <Container>
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        <GridItem1>
          <ContactItem
            icon={faMapMarkerAlt}
            title="BASED"
            content="Barcelona, Catalunya Spain"
          />
        </GridItem1>
        <GridItem2>
          <ContactItem
            icon={faEnvelope}
            title="E-MAIL"
            content={
              <StyledLink href="mailto:jordi.m.zambrano@gmail.com">
                jordi.m.zambrano@gmail.com
              </StyledLink>
            }
          />
        </GridItem2>
        <GridItem3>
          <ContactItem
            icon={faGithubAlt}
            title="GITHUB"
            content={
              <StyledLink target="_blank" href="https://github.com/nickschoey">
                Visit my profile
              </StyledLink>
            }
          />
        </GridItem3>
      </ContactGrid>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 5em;
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h1`
  font-family: 'Fira Code';
  padding-bottom: 2em;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5em;
`;

const GridItem1 = styled.div`
  grid-area: 1 / 1/ 2 / 2;
`;
const GridItem2 = styled.div`
  padding: 0px 30px;
  border-right: 1px solid #99999999;
  border-left: 1px solid #99999999;
  grid-area: 1 / 2 / 2 / 3;
`;
const GridItem3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;

const Title = styled.div`
  font-size: 16px;
  color: #99999999;
`;
const Content = styled.div`
  padding: 1em 0em;
  font-size: 13px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    color: ${colors.red};
  }
`;

export default Contact;

const ContactItem = ({ icon, title, content }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ padding: '0.4em', fontSize: '2em', color: colors.red }}
      />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </div>
  );
};
