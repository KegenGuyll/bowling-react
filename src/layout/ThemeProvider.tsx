import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: JSX.Element;
}

const ThemeProvider = (props: Props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ThemeProvider;
