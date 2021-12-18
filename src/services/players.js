import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select().order('name');
  return checkError(resp);
}

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*').match({ id });
  return checkError(resp);
}
