const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notesExams = exams.reduce( (base, notes) => base + notes.score, 0);
console.log(`El total de las notas es de: ${notesExams}`);










const aprovedExams = exams.reduce((base, aproved) => base + (aproved.score >= 5 ? aproved.score : 0), 0);
console.log(`El total de las notas aprobadas es de: ${aprovedExams}`);




















const medianExams = exams.reduce((base , median) => base + median.score / exams.length, 0).toFixed(2);
console.log(`La media de las notas es de: ${medianExams}`);
