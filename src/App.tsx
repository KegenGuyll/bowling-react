import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/slice/userSlice';
import { Dispatch } from 'redux';

interface Props {
  user: firebase.User;
}

const App = (props: Props) => {
  const { user } = props;
  const dispatch: Dispatch = useDispatch();

  dispatch(
    setUserData({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      icon: user.photoURL,
    })
  );

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/settings' component={Settings} />
        <Route>//404</Route>
      </Switch>
    </Router>
  );
};

export default App;
