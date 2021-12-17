import './App.css';
import Teams from './views/Teams/Teams.js';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import Team from './views/Team/Team.js';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavLink to="/Teams">Teams</NavLink>
        <Switch>
          <Route path="/Teams/:id" component={Team} />
          <Route path="/Teams" component={Teams} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
