import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h1> {team.name} </h1>
      <h2>
        {team.city}, {team.state}
      </h2>
      {team.players.map((player) => (
        <li key={player.id}>
          <Link key={player.team_id} to={`/players/${player.team_id}`}>
            {player.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
