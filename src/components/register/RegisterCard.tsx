import React from 'react';
import { Card as BootstrapCard, Form } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

const RegisterCard = () => {
  return (
    <BootstrapCard className='login-card'>
      <BootstrapCard.Header>
        <Link to='/login'>
          <a className='float-right'>
            <h6 className='mb-0'>Login</h6>
          </a>
        </Link>
      </BootstrapCard.Header>
      <h4 className='title-card'>Register</h4>
      <Form>
        <input placeholder='Email' type='text'></input>
        <input placeholder='Password' type='text'></input>
        <div>
          <input type='submit' value='Register' />
        </div>
      </Form>
    </BootstrapCard>
  );
};

export default RegisterCard;
