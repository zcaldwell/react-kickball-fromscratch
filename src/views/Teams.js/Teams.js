import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import { Link } from 'react-router-dom';
// import Team from '../Team/Team';

export default function TeamList() {
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
    <div className="teams">
      {teams.map((team) => (
        <li key={team.id}>
          <Link key={team.id} to={`/teams/${team.id}`}>
            {/* <Team Team={Team} /> */}
          </Link>
        </li>
      ))}
    </div>
  );
}
