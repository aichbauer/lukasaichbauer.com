import styled from 'styled-components';
import { Navbar as Nb } from 'styled-navbar-component';
import { Link as L } from 'react-router-dom';

export const Navbar = styled(Nb)`
  padding-bottom: 0px;
  border-bottom: 1px solid #c0c0c0;
`;

export const Link = styled(L)`
  margin-bottom: -1px;
  border-bottom: ${
  (props) => {
    if (props.active) {
      return '5px solid black';
    }

    return '';
  }
  };
  & > a {
    color: ${
      (props) => {
        if (props.active) {
          return 'black !important';
        }

        return '';
      }
    }
  };
`;
