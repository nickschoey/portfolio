import { render } from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const slides = [
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
];

const ImageSpring = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: 'none' },
    config: config.molasses
  });
  useEffect(() => {
    const interval = setInterval(() => set(state => (state + 1) % 3), 4000);
    return () => clearInterval(interval);
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
        height: '40vh',
        width: '40vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  ));
};

export default ImageSpring;
