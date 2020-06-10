import React from 'react';
import firebase from 'firebase';
import LoginCard from '../components/login/LoginCard';

const Login = () => {
  const login = (
    email: string,
    password: string,
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return <LoginCard login={login} />;
};

export default Login;
