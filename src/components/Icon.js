import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colors } from '../constants';

const Icon = ({ icon, hoverColor, url, color = colors.white }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <StyledIcon hoverColor={hoverColor} icon={icon} color={color} />
    </a>
  );
};

const StyledIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  font-size: 2rem;
  color: ${({ color }) => color};
  transition: 0.3s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export default Icon;
