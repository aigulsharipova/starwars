export async function getAllStarships() {
  const result = await fetch('https://swapi.dev/api/starships/').then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });

  return result;
}