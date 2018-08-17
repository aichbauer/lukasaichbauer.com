import React from 'react';
import PropTypes from 'prop-types';
import {
  Column,
  Row,
} from 'styled-grid-system-component';

import {
  Gravatar,
  Container,
  H1,
  H3,
  Span,
  Button,
  SocialIconList,
} from '../../components';

const Home = ({ centered }) => (
  <Container centered={centered}>
    <Row textAlign="center">
      <Column md={12}>
        <Row>
          <Column md={12} pt="16px">
            <Gravatar email="l.aichbauer@gmail.com" size={180} />
          </Column>
          <Column md={12} pt="16px">
            <H1 textAlign="center">
              Lukas Aichbauer
            </H1>
          </Column>
          <Column md={12} pt="16px">
            <H3 textAlign="center">
              Fullstack developer from Graz, Austria.
              <Span role="img" aria-label="flag austria">
                🇦🇹
              </Span>
            </H3>
            <H3 textAlign="center">
              In
              <Span role="img" aria-label="red heart (love)">
                ❤️
              </Span>
              with the web and data science.
            </H3>
          </Column>
          <Column md={12} pt="16px">
            <Button target="_blank" href="https://goo.gl/forms/Tk9bcWIjw85gk66u2">I need a web site</Button>
            <Button href="mailto:l.aichbauer@gmail.com">I am here to hire</Button>
          </Column>
          <Column md={12} pt="16px">
            <SocialIconList />
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
);

Home.defaultProps = {};

Home.propTypes = {
  centered: PropTypes.bool.isRequired,
};

export {
  Home,
};
