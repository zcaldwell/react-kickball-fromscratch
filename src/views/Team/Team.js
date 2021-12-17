import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeambyId } from '../../services/teams';
import TeamDetail from '../../components/TeamDetail';

export default function Team(props) {
  const [team, setTeam] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeambyId(props.match.params.id);
      setTeam(data[0]);
      console.log(data);
    };
    fetchData();
  }, [props]);

  return (
    <>
      <TeamDetail team={team} />
    </>
  );
}
