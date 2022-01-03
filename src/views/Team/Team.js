import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../../services/teams';
import TeamDetail from '../../components/TeamDetail';

export default function Team(props) {
  const [team, setTeam] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(props.match.params.id);
      console.log(data);
      setTeam(data[0]);
    };
    fetchData();
  }, [props]);

  return (
    <>
      <TeamDetail team={team} />
    </>
  );
}
