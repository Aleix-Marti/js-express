const evangelion = {
  name: 'Rei',
  surname: 'Ayanami',
  age: 14,
  eva: {
    model: '00',
    weapon: 'Lance of Longinus'
  },
  suits: ['school uniform','plug suit']
}

console.log(evangelion);
console.dir(evangelion);

console.log( evangelion.name );

const { name, age } = evangelion
const { suits } = evangelion;

console.log(name,age);

for( let x=0; x<suits.length; x++){
  console.log(suits[x])
}

console.log( suits.join(',') );

suits.forEach( x => console.log(x) );

console.log( evangelion.eva.model);

evangelion.eva.model = '01';

console.log( evangelion );

