import React from 'react';
import Card from './homeComponents/Card';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <Card
            title='Total Score'
            score='572'
            borderColor='#6e0dd0'
            dark={true}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <Card
            title='Average Score'
            score='82'
            borderColor='#f2ea02'
            dark={true}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={6}>
          <Card
            title='High Score'
            score='82'
            borderColor='#11d241'
            dark={true}
          />
        </Col>
        <Col xs={6}>
          <Card
            title='Low Score'
            score='82'
            borderColor='#fd1c03'
            dark={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
