import './Resources/logo.svg'; //Superdrug logo added.
import './Resources/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Header/Navigation';

import HomePage from './Components/Header/HomePage';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
      <Route path="/" exact>
          <HomePage/>
      </Route>
      </Switch>
      </Router>
 
  );
}

export default App;


