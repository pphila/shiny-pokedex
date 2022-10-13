import './css/styles.css';

//Business Logic
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }

  Promise.all(promises).then( results => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_shiny'],
      type: data.types.map((type) => type.type.name).join(', ')
    }));
    displayPokemon(pokemon);
  });
};
fetchPokemon();

//UI logic
const pokedex = document.getElementById('pokedex');
const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon.map ( poke => `
  <li class="card">
    <img class="card-image" src="${poke.image}"/>
    <h2 class="card-title"> ${poke.id}. ${poke.name}</h2>
    <p class="card-subtitle">Type: ${poke.type}</p>
  </li>
  `).join('');
  pokedex.innerHTML = pokemonHTMLString;
};