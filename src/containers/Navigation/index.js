import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'styled-button-component';
import { NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

import { Container } from '../../components';
import { Navbar, Link } from './styled';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  handleOpenCloseNav() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    const { fixed } = this.props;

    return (
      <Container fluid fixed={fixed}>
        <Container fluid>
          <Navbar expandSm>
            <Nav end>
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
                style={{ marginBottom: '8px' }}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
            <Nav center collapse expandSm hidden={hidden}>
              <Link active={window.location.pathname === '/'} to="/">
                <NavbarLink light>Home</NavbarLink>
              </Link>
              <Link light active={window.location.pathname === '/about'} to="/about">
                <NavbarLink light>About</NavbarLink>
              </Link>
              <Link active={window.location.pathname === '/projects'} to="/projects">
                <NavbarLink light>Projects</NavbarLink>
              </Link>
              <Link active={window.location.pathname === '/contact'} to="/contact">
                <NavbarLink light>Contact</NavbarLink>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
}

Navigation.defaultProps = {
  fixed: false,
};

Navigation.propTypes = {
  fixed: PropTypes.bool,
};

export {
  Navigation,
};
