import './App.css';
import TeamList from './views/Teams.js/Teams';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <TeamList />
      </BrowserRouter>
    </main>
  );
}

export default App;
