const pokemonLimit = 150;

const randomPokemonId = Math.floor(Math.random() * pokemonLimit) + 1;

const urlApi = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

console.log(`Fetching data for Pokémon #${randomPokemonId}`);

fetch(urlApi)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((pokemonData) => {
        const img = document.querySelector('.random-image');
        img.src = pokemonData.sprites.front_default;
        img.alt = `Image of ${pokemonData.name}`;
        const createdName = document.createElement('p');
        createdName.textContent = `${pokemonData.name}`;
        document.body.appendChild(createdName);
    })
    .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
    });
