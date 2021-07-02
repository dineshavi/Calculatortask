import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from "./components/Calculator/Calculator"


function App() {
  return (
     <BrowserRouter>
        <Switch>
          <Route path="/">
            <Calculator />
          </Route>
         
        </Switch>
      </BrowserRouter>
  );
}

export default App;
