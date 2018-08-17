import React, { Fragment } from 'react';

import {
  Contact as ContactContainer,
  Footer,
  Navigation,
} from '../../containers';

const Contact = () => (
  <Fragment>
    <Navigation fixed />
    <ContactContainer centered />
    <Footer />
  </Fragment>
);

export {
  Contact,
};
