import React from 'react';
import styled from 'styled-components';
import Project from './Projects/Project';
import { colors } from '../constants';

const Projects = () => {
  return (
    <Container>
      <SectionTitle>My Pet Projects</SectionTitle>
      {projects.map((data, i) => (
        <Project key={i} data={data} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h1`
  text-align: center;
`;
export default Projects;

const projects = [
  {
    title: 'Ahbits',
    fontColor: 'white',
    backgroundColor: '#007cff',
    techStack: 'Angular, Material Design, Express, mySQL',
    description:
      'Habit tracking app based on the Seinfeld Calendar and the No More Zero Days philosophy.',
    github: 'https://gitlab.com/nickschoey/ahbits-client',
    site: null,
    color: colors.white,
    imageUrls: [
      {
        id: 0,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646709/portfolio/ahbits_1.jpg'
      },
      {
        id: 1,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646709/portfolio/ahbits_2.jpg'
      },
      {
        id: 2,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646709/portfolio/ahbits_3.jpg'
      },
      {
        id: 3,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646710/portfolio/ahbits_4.jpg'
      }
    ]
  },
  {
    title: '21 Meals',
    fontColor: '#ea9267',
    backgroundColor: '#221e2f',
    techStack: 'React + Redux, Ant Design, Koa, mySQL',
    description: 'Meal planner and recipe handler created as a PWA',
    github: 'https://github.com/nickschoey/mealee-client',
    site: null,
    color: colors.white,
    imageUrls: [
      {
        id: 0,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646708/portfolio/21meals_1.jpg'
      },
      {
        id: 1,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646708/portfolio/21meals_2.jpg'
      },
      {
        id: 2,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646709/portfolio/21meals_4.jpg'
      }
    ]
  },

  {
    title: 'Masia Can Cardús',
    fontColor: 'black',
    backgroundColor: '#fafafa',
    color: 'black',
    techStack: 'React, Firestore, Google Cloud Platform',
    description:
      'Landing Page and reservation handling backoffice for a local business.',
    site: 'https://www.cancardus.com/',
    imageUrls: [
      {
        id: 0,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646710/portfolio/masia_1.jpg'
      },
      {
        id: 1,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646710/portfolio/masia_2.jpg'
      },
      {
        id: 2,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646710/portfolio/masia_3.jpg'
      }
    ]
  },
  {
    title: 'Snell Sports Rentals',
    fontColor: '#3389d2',
    backgroundColor: '#202020',
    color: colors.white,
    techStack: 'Bootstrap, Flask, Jinja, mySQL',
    description: 'Rental handling web page with two frontends.',
    github: 'https://github.com/nickschoey/learning-CS50Project',
    imageUrls: [
      {
        id: 0,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646711/portfolio/sports_1.jpg'
      },
      {
        id: 1,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646711/portfolio/sports_2.jpg'
      },
      {
        id: 2,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646711/portfolio/sports_3.jpg'
      }
    ]
  },
  {
    title: 'JavaScript Blackjack',
    fontColor: '#5cb85d',
    backgroundColor: '#152304',
    color: colors.white,
    techStack: 'JQuery, HTML, CSS',
    description: 'Complete Blackjack game with bets and all its rules.',
    github: 'https://github.com/nickschoey/Codeworks-Blackjack',
    site: 'https://blackjackcodeworks.herokuapp.com/index.html',
    imageUrls: [
      {
        id: 0,
        url:
          'https://res.cloudinary.com/nickschoey/image/upload/v1535646710/portfolio/blackjack_1.jpg'
      }
    ]
  }
];
