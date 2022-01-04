import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <h3>{player.position}</h3>
    </div>
  );
}
