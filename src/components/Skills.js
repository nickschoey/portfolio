import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {
  faReact,
  faAngular,
  faNodeJs,
  faHtml5,
  faJsSquare,
  faPython,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, device } from '../constants';

const Skills = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Open Sans'
      }}
    >
      <SectionTitle>Skills</SectionTitle>
      <GridContainer>
        <Skill1>
          <Skill
            title="React + Redux"
            icon={faReact}
            text="React good practices, Hooks, Redux. Front end testing with Jest + React Testing Library."
          />
        </Skill1>

        <Skill2>
          <Skill
            title="Angular"
            icon={faAngular}
            text="Angular CLI, components, services, observables... Handling types with TypeScript"
          />
        </Skill2>
        <Skill3>
          <Skill
            title="Node.js"
            icon={faNodeJs}
            text="Express, Koa, GraphQL. NPM, Yarn, Bower"
          />
        </Skill3>

        <Skill4>
          <Skill
            title="HTML5"
            icon={faHtml5}
            text="Strong knowledge of web standards and web markup. Good understanding of cross-browser compatibility issues."
          />
        </Skill4>
        <Skill5>
          <Skill
            title="CSS"
            icon={faCss3Alt}
            text="Styling and animating in pure CSS3 or pre-processors (LESS, SASS). Designing with frameworks as Bootstrap or Material."
          />
        </Skill5>
        <Skill6>
          <Skill
            title="JavaScript"
            icon={faJsSquare}
            text="ES6, Functional and Object Oriented Programming."
          />
        </Skill6>

        <Skill7>
          <Skill
            title="Databases"
            icon={faReact}
            text="Relational (mySQL, postgreSQL, MariaDB) and non-relational (Redis, MongoDB) databases."
          />
        </Skill7>
        <Skill8>
          <Skill
            title="Python"
            icon={faPython}
            text="Lightweighted (Flask) and heavier (Django) web frameworks. Templating languages (Jinja)"
          />
        </Skill8>
        <Skill9>
          <Skill
            title="Soft-skills"
            icon={faReact}
            text="Fluent in English, French, Catalan and Spanish. Strong work ethic. Thirst for learning. Can play table tennis. Can eat pizza."
          />
        </Skill9>
      </GridContainer>
    </div>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 15px;
  @media ${device.tablet} {
    padding: 2em 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 2em;
  }
`;

const Skill1 = styled.div`
  padding: 10px 0;
  grid-area: 1 / 1 / 2 / 2;
`;
const Skill2 = styled.div`
  padding: 10px 0;
  grid-area: 1 / 2 / 2 / 3;
`;
const Skill3 = styled.div`
  padding: 10px 0;
  grid-area: 1 / 3 / 2 / 4;
`;

const Skill4 = styled.div`
  padding: 10px 0;
  grid-area: 2 / 1 / 3 / 2;
`;
const Skill5 = styled.div`
  padding: 10px 0;
  grid-area: 2 / 2 / 3 / 3;
`;
const Skill6 = styled.div`
  padding: 10px 0;
  grid-area: 2 / 3 / 3 / 4;
`;
const Skill7 = styled.div`
  padding: 10px 0;
  grid-area: 3 / 1 / 4 / 2;
`;
const Skill8 = styled.div`
  padding: 10px 0;
  grid-area: 3 / 2 / 4 / 3;
`;
const Skill9 = styled.div`
  padding: 10px 0;
  grid-area: 3 / 3 / 4 / 4;
`;

const SectionTitle = styled.h1`
  font-family: 'Fira Code';
  text-align: center;
`;

const Skill = ({ icon, title, text }) => {
  return (
    <div style={{ display: 'flex', maxWidth: '300px' }}>
      <div style={{ paddingRight: '15px' }}>
        <FontAwesomeIcon
          style={{ color: colors.red, fontWeight: 'bold', fontSize: '2rem' }}
          icon={icon}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '5px'
        }}
      >
        <strong style={{ fontSize: '16px', paddingBottom: '7px' }}>
          {title}
        </strong>
        <span style={{ fontSize: '12px', color: ' #666666' }}>{text}</span>
      </div>
    </div>
  );
};
export default Skills;
