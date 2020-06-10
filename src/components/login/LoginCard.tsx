import React, { useState, useEffect } from 'react';
import { Card as BootstrapCard, Form } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

interface Props {
  login: (
    email: string,
    password: string,
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
}

const LoginCard = (props: Props) => {
  const { login } = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (email && password) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [email, password]);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <BootstrapCard className='login-card'>
      <BootstrapCard.Header>
        <Link className='float-right' to='/register'>
          <h6 className='mb-0'>Register</h6>
        </Link>
      </BootstrapCard.Header>
      <h4 className='title-card'>Login</h4>
      <Form>
        <input
          onChange={handleEmail}
          placeholder='Email'
          type='email'
          autoComplete='username'
        ></input>
        <input
          onChange={handlePassword}
          placeholder='Password'
          type='password'
          autoComplete='current-password'
        ></input>
        <div>
          <input
            onClick={(event) => login(email, password, event)}
            disabled={!canSubmit}
            type='submit'
            value='Login'
          />
        </div>
      </Form>
    </BootstrapCard>
  );
};

export default LoginCard;
