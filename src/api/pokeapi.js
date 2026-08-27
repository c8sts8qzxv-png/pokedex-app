// Thin wrapper around https://pokeapi.co/ — no key required.

const BASE_URL = 'https://pokeapi.co/api/v2';
const ARTWORK_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

// The list endpoint returns only { name, url }. The numeric id is the last
// path segment of that url, and the artwork file is named after the id.
function idFromUrl(url) {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}

function artworkUrl(id) {
  return `${ARTWORK_URL}/${id}.png`;
}

export async function fetchPokemonList(limit = 30) {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data.results.map((item) => {
    const id = idFromUrl(item.url);
    return {
      id,
      name: item.name,
      number: id,
      image: artworkUrl(id),
    };
  });
}

export async function fetchPokemonDetails(nameOrId) {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    number: data.id,
    image:
      data.sprites?.other?.['official-artwork']?.front_default || artworkUrl(data.id),
    types: data.types.map((entry) => entry.type.name),
    // The API reports height in decimetres and weight in hectograms.
    heightM: data.height / 10,
    weightKg: data.weight / 10,
  };
}
