import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetail from '../../components/PlayerDetail';

export default function Player(props) {
  const [player, setPlayer] = useState({ player: [] });
  console.log(player);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(props.match.params.id);
      setPlayer(data[0]);
    };
    fetchData();
  }, [props]);

  return (
    <>
      <PlayerDetail player={player} />
    </>
  );
}
