
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filterAge = ages.filter(age => age >= 18);
console.log(filterAge);












const parAges = ages.filter(age => age % 2 === 0);
console.log(parAges);












const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterGames = streamers.filter(game => game.gameMorePlayed === `League of Legends`);
console.log(filterGames);










const filterNameStreamers = streamers.filter(names => names.name.includes(`u`)) ;
console.log(filterNameStreamers);













const filterAgesStreamers = streamers.map(streamers => streamers.gameMorePlayed.includes(`Legends`) && streamers.age >= 35 ? {...streamers, gameMorePlayed: streamers.gameMorePlayed.toUpperCase()} : streamers);
console.log(filterAgesStreamers);