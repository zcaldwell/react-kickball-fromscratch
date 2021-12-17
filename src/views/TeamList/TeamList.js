import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        {teams.map((team) => (
          <li key={team.id}> {team.name} </li>
        ))}
      </>
    </div>
  );
}
