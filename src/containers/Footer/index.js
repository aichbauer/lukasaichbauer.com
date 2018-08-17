import React from 'react';

import { Footer as F, FooterLink } from './styled';

const Year = new Date().getFullYear();

const Footer = () => (
  <F>
    <FooterLink to="/imprint">Imprint</FooterLink>
    <span>
      © by Lukas Aichbauer,{` ${Year}`}
    </span>
  </F>
);

export {
  Footer,
};
