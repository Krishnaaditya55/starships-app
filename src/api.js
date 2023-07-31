const API_BASE_URL = "https://swapi.dev/api";

export const fetchStarships = async () => {
  const response = await fetch(`${API_BASE_URL}/starships`);
  const data = await response.json();
  return data.results;
};
