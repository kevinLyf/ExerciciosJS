async function getAllPlanets() {
  const response = await fetch(
    "https://api.le-systeme-solaire.net/rest/bodies/"
  );

  const data = response.json();

  console.log(data);
}

getAllPlanets();
