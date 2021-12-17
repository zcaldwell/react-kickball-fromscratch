import './App.css';
import Teams from './views/Teams.js/Teams';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavLink to="/Teams">Teams</NavLink>
        <Switch>
          t
          <Route path="/Teams" component={Teams} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
