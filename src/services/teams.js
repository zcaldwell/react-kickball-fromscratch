import { checkError, client } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select().order('name');
  return checkError(resp);
}

export async function fetchTeambyId(id) {
  const resp = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(resp);
}
