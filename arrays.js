const numbers = [];

console.log(numbers);

for (let i = 0; i < 5; i++) {
  numbers.push(i);
}

console.log(numbers);



const letters = ['a','b','c','d'];
console.log(letters);

// console.log( letters[0] );
// console.log( letters[1] );
// console.log( letters[4] );


// console.log( letters.length );

// console.log( letters[letters.length - 1] )


for (let i = 0; i < letters.length; i++) {
  // console.log( letters[i] )
}

let valor = letters[2];
// console.log(valor);

letters[0] = 'z';

console.log(letters);

letters.pop();
console.log(letters);

let last = letters.pop()

console.log(letters);
console.log(last);

const noms = [];

for(let i=0; i<3; i++){
  let nom = prompt('Escriu un nom');
  noms.push(nom);
}

console.log(noms);












