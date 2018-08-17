import React, { Fragment } from 'react';

import {
  Footer,
  Navigation,
  Projects as ProjectsContainer,
} from '../../containers';

const Projects = () => (
  <Fragment>
    <Navigation />
    <ProjectsContainer />
    <Footer />
  </Fragment>
);

export {
  Projects,
};
