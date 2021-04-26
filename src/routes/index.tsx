import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import CandyMachine from '../pages/CandyMachine';
import ElevatorMachine from '../pages/ElevatorMachine';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/semester6-automaton" component={Home} />
        <Route path="/candy-machine" component={CandyMachine} />
        <Route path="/elevator-machine" component={ElevatorMachine} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
