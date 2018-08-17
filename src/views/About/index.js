import React, { Fragment } from 'react';

import {
  About as AboutContainer,
  Footer,
  Navigation,
} from '../../containers';

const About = () => (
  <Fragment>
    <Navigation />
    <AboutContainer />
    <Footer />
  </Fragment>
);

export {
  About,
};
