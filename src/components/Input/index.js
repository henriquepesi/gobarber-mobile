import React from 'react';
import PropTypes from 'prop-types';

import { Container, Tinput } from './styles';

export default function Input({ style, ...rest }) {
  return (
    <Container style={style}>
      <Tinput {...rest} />
    </Container>
  );
}
