import React from 'react';
import array from 'lodash/collection';

import { A } from '../styled';

import { Column } from 'styled-grid-system-component';

import { technologies } from '../../data';

class TechIconList extends React.Component {
  constructor() {
    super();

    this.state = {
      technologiesSubset: array.sampleSize(technologies, 9),
    };
  }

  render() {
    const { technologiesSubset } = this.state;

    const techsList = technologiesSubset.map((elem) => (
      <Column
        md={4}
        p="25px"
      >
        <A target="_blank" href="https://github.com/aichbauer">
          <img
            alt="self-Logo"
            src={elem.path}
            style={{
              height: '45px',
              width: '100%',
            }}
          />
        </A>
      </Column>
    ));

    return techsList;
  }
}

export {
  TechIconList,
};
