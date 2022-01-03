import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <PlayerList players={players} />
    </div>
  );
}
