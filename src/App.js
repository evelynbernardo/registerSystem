import React from 'react';
import { LoginPage } from './Containers/LoginPage'
import { ListPage } from './Containers/ListPage'
import { RegisterPage } from './Containers/RegisterPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route path='/list'>
            <ListPage />
          </Route>
          <Route path='/register' >
            <RegisterPage />
          </Route >
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
