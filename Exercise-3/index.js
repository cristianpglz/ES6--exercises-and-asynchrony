const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const usersNames = users.map(names => names.name);
console.log(usersNames);











const namesReplaced = users.map(user =>
    user.name.startsWith('A') ? 'Anacleto' : user.name
);

console.log(namesReplaced);











const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

let city = "Madagascar";
const checkVisit = cities.map(check => check.name === city ? {...check} = true : check.isVisited = false);
console.log(checkVisit);