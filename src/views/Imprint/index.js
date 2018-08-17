import React, { Fragment } from 'react';

import {
  Footer,
  Navigation,
  Imprint as ImprintContainer,
} from '../../containers';

const Imprint = () => (
  <Fragment>
    <Navigation fixed />
    <ImprintContainer centered />
    <Footer />
  </Fragment>
);

export {
  Imprint,
};
