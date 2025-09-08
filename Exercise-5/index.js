const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const input = document.querySelector(`[data-function="toFilterStreamers"]`);
input.addEventListener(`input`, handleInput);

function handleInput(){
    const searchText = input.value.toLowerCase();
    const filterInput = streamers.filter(streamer => streamer.name.toLowerCase().includes(searchText));
    console.log(filterInput);
}
