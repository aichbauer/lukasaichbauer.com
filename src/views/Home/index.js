import React, { Fragment } from 'react';

import {
  Footer,
  Navigation,
  Home as HomeContainer,
} from '../../containers';

const Home = () => (
  <Fragment>
    <Navigation fixed />
    <HomeContainer centered />
    <Footer />
  </Fragment>
);

export {
  Home,
};
