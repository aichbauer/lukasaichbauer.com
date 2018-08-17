import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'styled-grid-system-component';

import { Container, P } from '../../components';

const Imprint = ({ centered }) => (
  <Container centered={centered}>
    <Row>
      <P>
        Lukas Aichbauer
      </P>
    </Row>
    <Row>
      <P>
        8501 Lieboch, Austria
      </P>
    </Row>
    <Row>
      <P>
        l.aichbauer@gmail.com
      </P>
    </Row>
  </Container>
);

Imprint.defaultProps = {};

Imprint.propTypes = {
  centered: PropTypes.bool.isRequired,
};

export {
  Imprint,
};
