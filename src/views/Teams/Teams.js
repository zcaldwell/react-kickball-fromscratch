import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../components/TeamList';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <TeamList teams={teams} />
    </>
  );
}
