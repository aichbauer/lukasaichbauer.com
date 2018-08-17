import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Footer = styled.footer`
  font-family: "Open Sans", sans-serif;
  fonr-weight: 300;
  color: white;
  width: 100vw;
  padding: 0.6em;
  background-color: black;
  font-size: 0.72em;
  font-weight: 100;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

export const FooterLink = styled(L)`
  margin-right: 8px;
  color: white;
  font-weight: 100;
  &:hover{
    color: #336699;
  };
`;
