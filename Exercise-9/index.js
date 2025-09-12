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
        console.log(pokemonData);
        const div = document.createElement('div');
        const img = document.querySelector('.random-image');
        div.style = 'background-color: rgba(255, 0, 0, 0.419); border: 1px solid black; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin: 10px; padding: 10px;';
        img.src = pokemonData.sprites.front_default;
        img.alt = `Image of ${pokemonData.name}`;
        const createdName = document.createElement('p');
        createdName.textContent = `${pokemonData.name}`;
        document.body.appendChild(div);
        div.appendChild(img);
        div.appendChild(createdName);
        })
    .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
    });
