import React from 'react';

export default function PlayerDetail({ player }) {
  console.log(player);
  return (
    <div>
      {player.map((detail) => (
        <div key={detail.id}>
          <h2>{detail.booger}</h2>
        </div>
      ))}
    </div>
  );
}
