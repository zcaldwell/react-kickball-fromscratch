import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <div>
      {players.map((player) => (
        <ul key={player.id}>
          <li key={player.id}>
            <Link key={player.id} to={`/players/${player.id}`}>
              {player.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
