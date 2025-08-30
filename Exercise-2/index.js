const pointsList = [32, 54, 21, 64, 75, 43]

const list = [...pointsList];
console.log(list);




const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log(copyToy);







const pointsLis2 = [54,87,99,65,32];
const unitedLists = [...pointsList, ...pointsLis2];
console.log(unitedLists);





const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const unitedToys = {...toy, ...toyUpdate};
console.log(unitedToys);








const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const duplicateColors = [...colors];
duplicateColors.splice(2,1);
console.log(duplicateColors);



