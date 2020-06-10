import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeProvider from './layout/ThemeProvider';
import './config/firebaseInit';
import './index.css';
import firebase from 'firebase';
import Login from './containers/Login';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider>
          <App user={user} />
        </ThemeProvider>
      </Provider>,
      document.getElementById('root')
    );
  } else {
    ReactDOM.render(<Login />, document.getElementById('root'));
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
