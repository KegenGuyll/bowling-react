import React, { useState, useEffect } from 'react';
import Card from '../components/dashboard/Card';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import db from '../config/firebaseInit';
import { Dispatch } from 'redux';
import { setUserScores } from '../redux/slice/scoreSlice';
import Graph from '../components/dashboard/Graph';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);
  const score = useSelector((state: RootState) => state.score);
  const docRef = db.collection('user-scores').doc(user.uid);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    docRef.get().then((doc) => {
      if (doc.exists) {
        dispatch(setUserScores(doc.data()));
      } else {
        console.log('something has went wrong');
      }
    });
  }, []);

  return (
    <div>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <Card
            title='Total Score'
            score={score.totalScore}
            borderColor='#6e0dd0'
            dark={true}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <Card
            title='Average Score'
            score={score.average}
            borderColor='#f2ea02'
            dark={true}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={6}>
          <Card
            title='High Score'
            score={score.high}
            borderColor='#11d241'
            dark={true}
          />
        </Col>
        <Col xs={6}>
          <Card
            title='Low Score'
            score={score.low}
            borderColor='#fd1c03'
            dark={true}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <Card title='Graph' borderColor='#0190fb' dark={true} Graph={Graph} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
