import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <div>
      {team.players.map((player) => (
        <li key={player.team_id}>
          <Link key={player.team_id} to={`/team/${player.name}`}>
            {player.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
