import { Card as BootstrapCard } from 'react-bootstrap';
import React from 'react';

interface Props {
  borderColor: string;
  dark: boolean;
  title: string;
  score?: string | number;
  Graph?: any;
  style?: React.CSSProperties | undefined;
}

const Card = (props: Props) => {
  const { dark, borderColor, title, score, Graph, style } = props;
  return (
    <BootstrapCard
      style={{
        color: dark ? '#fff' : '#2a2a2c',
        backgroundColor: dark ? '#2a2a2c' : '#fff',
        border: 'unset',
        borderBottom: `5px solid ${borderColor}`,
        borderRadius: '5px',
        fontWeight: 600,
        ...style,
      }}
    >
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{score}</BootstrapCard.Text>
        {Graph ? <Graph /> : null}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
