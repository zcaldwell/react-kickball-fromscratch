import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <li key={team.id}>
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
