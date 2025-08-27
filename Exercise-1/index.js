const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};


const {title, gender, year}= game;

console.log(title);
console.log(gender);
console.log(year);





const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);







const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};


const {name ,race} = animalFunction();

console.log(name);
console.log(race);






const car = {nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nameCar, itv:[firstItv, secondItv, thirdItv]} = car;

console.log(nameCar);
console.log(firstItv);
console.log(secondItv);
console.log(thirdItv);