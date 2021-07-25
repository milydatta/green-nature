import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Contact from './components/Contact/Contact';
import Contacts from './components/Contact/Contacts';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
             <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/contact">
              <Contacts />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
           </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
