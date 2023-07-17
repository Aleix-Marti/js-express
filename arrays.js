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


const noms = () => {
  const noms = [];

  for(let i=0; i<3; i++){
    let nom = prompt('Escriu un nom');
    noms.push(nom);
  }

  console.log(noms);
}

// noms();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(3, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(2, 1);
// console.log(fruits);



const colors = ["Orange", "Black", "Red", "Green", "Blue"];
// let pos = colors.indexOf("Black");
// console.log('indexof Black:',pos)

// colors.splice(pos,1)

// console.log(colors);

let temp = '';
for (let i = 0; i < colors.length; i++) {
  // temp = colors[i]
  // temp = temp + colors[i]
  temp += colors[i]+','
}
console.log(temp);

console.log( colors.join('|') );



const nums = [1,2,3,4,5]; 
const tempnums = []

for (let i = 0; i < nums.length; i++) {
  let n = nums[i]
  tempnums.push( n*2 )
}
console.log(tempnums);

const doublenums = nums.map( i => i*3 )
console.log(doublenums);
console.log(nums);



const nums2 = [1,22,30,4,5,2,22,18,15]; 

const firstAdult = nums2.find( i => i>=18 )
console.log(firstAdult);

const firstAdultIndex = nums2.findIndex( i => i>=18 )
console.log(firstAdultIndex);

const adults = nums2.filter( i => i>=18 )
console.log(adults);






