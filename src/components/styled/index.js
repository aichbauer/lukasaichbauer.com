import styled, { css } from 'styled-components';
import { space, maxWidth } from 'styled-system';
import {
  P as p,
  A as a,
  H1 as h1,
  H6 as h6,
} from 'styled-base-components';
import {
  CardTitle as cardTitle,
  CardText as cardText,
} from 'styled-card-component';
import { Container as container } from 'styled-container-component';

export const P = styled(p)`
  word-break: break-word;
  text-align: justify;
  font-weight: 100vw;
  font-family: "Open Sans", serif;
  ${space};
`;

export const A = styled(a)`
  padding: ${(props) => props.padding || '0'};
  color: ${(props) => props.color || '#336699'};
  font-weight: 400;
  &:hover{
    color: #336699;
  };
  ${space};
  ${maxWidth};
`;

export const Container = styled(container)`
  ${(props) => {
    if (props.centered) {
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
      `;
    }

    return css`min-height: auto`;
  }};
  position: ${(props) => (props.fixed ? 'fixed' : '')};
  z-index: ${(props) => (props.fixed ? '100' : '')};
  width: ${(props) => (props.fixed ? '100vw' : 'auto')};
  font-family: "Open Sans", serif;
`;

export const H1 = styled(h1)`
  font-family: "Merriweather", serif;
  font-weight: 700;
  ${space};
`;

export const H3 = styled(h6)`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  ${space};
`;

export const Span = styled.span`
  padding-left: 7px;
  padding-right: 7px;
  ${space};
`;

export const Button = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 0.75em;
  padding: 0.75em 1em;
  background: none;
  color: #c0c0c0;  
  font-weight: 100;
  position: relative;
  transition: color 0.25s ease-in-out;
  border: 1px solid #c0c0c0;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transition: width 0.25s ease-in-out;
    z-index: -1;
  };
  &:hover {
    color: white;
    border: 1px solid black;
  };
  &:hover:after {
    width: 100%;
  };
  ${space};
`;

export const CardTitle = styled(cardTitle)`
  font-family: "Merriweather", serif;
  word-break: break-word;
`;

export const CardText = styled(cardText)`
  font-family: "Open Sans", sans-serif;
  word-break: break-word;
  font-wight: 300;
`;
