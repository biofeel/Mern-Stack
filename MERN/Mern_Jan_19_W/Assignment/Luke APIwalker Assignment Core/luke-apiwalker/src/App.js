import React from 'react';
import './App.css';
import Planets from './views/Planets';
import People from './views/People';
import Starships from './views/Starships';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HeaderForm from './components/HeaderForm';

function App() {

  return (
    <BrowserRouter>
      <HeaderForm />
      <Switch>
        <Route path="/starships/:id">
          <Starships />
        </Route>
        <Route path="/planets/:id">
          <Planets />
        </Route>
        <Route path="/people/:id">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;