import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'styled-grid-system-component';

import {
  Container, SocialIconList, A, H1,
} from '../../components';

const Contact = ({ centered }) => (
  <Container centered={centered}>
    <Row>
      <H1 fontSize="2.4em">Want to get in touch?</H1>
    </Row>
    <Row>
      <SocialIconList />
    </Row>
    <Row>
      <A color="black" href="mailto:l.aichbauer@gmail.com">
        <H1 fontSize="2em">
          l.aichbauer@gmail.com
        </H1>
      </A>
    </Row>
  </Container>
);

Contact.defaultProps = {};

Contact.propTypes = {
  centered: PropTypes.bool.isRequired,
};

export {
  Contact,
};
