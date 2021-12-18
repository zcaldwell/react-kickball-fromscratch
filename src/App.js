import './App.css';
import Teams from './views/Teams/Teams.js';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import Team from './views/Team/Team.js';
import Players from './views/Players/Players.js';
import Player from './views/Player/Player.js';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavLink to="/Teams">Teams</NavLink>
        <NavLink to="/Players" exact>
          Players
        </NavLink>
        <Switch>
          <Route path="/Teams/:id" component={Team} />
          <Route path="/Teams" component={Teams} />
          <Route path="/Players/:id" compontent={Player} />
          <Route path="/Players/" component={Players} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
