import './css/styles.css';

const fetchPokemon = () => {
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const pokemon = {
          name: data.name,
          id: data.id,
          image: data.sprites['front_shiny'],
          type: data.types.map((type) => type.type.name).join(', ')
        };
        console.log(pokemon);
      });
  }
};

fetchPokemon();