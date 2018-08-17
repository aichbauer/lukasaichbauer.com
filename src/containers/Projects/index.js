import React from 'react';
import {
  Row,
} from 'styled-grid-system-component';
import {
  Container,
  ProjectsList,
} from '../../components';

const Projects = () => (
  <Container>
    <Row>
      <ProjectsList />
    </Row>
  </Container>
);

export {
  Projects,
};
