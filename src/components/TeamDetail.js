import React from 'react';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h1> {team.name} </h1>
      <h2>
        {team.city}, {team.state}
      </h2>
      {team.players.map((player) => (
        <div key={player.id}>
          <p key={player.team_id}>{player.name}</p>
        </div>
      ))}
    </div>
  );
}
