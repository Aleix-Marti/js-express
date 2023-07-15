function hola() {
  console.log('hello!');
}

hola();

let nom = 'Aleix';

function saluda( persona ){
  let pers = 'Pili';
  console.log(`Hola ${pers} i ${persona}!`);
}

saluda(nom);

function mult( a, b ){
  let result = a * b;
  console.log(`El resultat de multiplicar ${a} * ${b} és: ${result}`);
  console.log('El resultat de multiplicar ' + a + ' * ' + b + ' és: ' + result);
  return result;
}

mult(3,4);


function sum( a, b ){
  let result = a + b;
  return result;
}

let suma;

suma = sum(4,5);

console.log(`El valor de la suma és ${suma}`);

suma = sum(5,5);

console.log(`El valor de la suma és ${suma}`);




const divide = (x,y) => {
  let result = x/y;
  console.log(`El resultat de dividir ${x} entre ${y} és ${result}`);
  return result;
}

let d;
d = divide(10,2);

console.log(d);

const salutacio = (nom) => {
// const salutacio = nom => {
  console.log(`Hola ${nom}!`);
}

salutacio('Albert');

const resta = (a,b) => a-b ;


console.log( resta(8,2) );


// console.log('abans d\'alert');

// alert('Hola Alert!');

// console.log('després d\'alert');

const operacio = () => {
  // let nom = prompt('Escriu el teu nom');
  // alert(`Hola ${nom}`);
  let op1 = prompt('Escriu el primer operand');
  let op2 = prompt('Escriu el segon operand');
  let res = mult(op1,op2);
  alert(`El resultat de multiplicar ${op1} per ${op2} és ${res}`);
}   

// operacio();


const opSum = () => {
  let op1 = parseInt( prompt('Escriu el primer valor') );
  let op2 = parseInt( prompt('Escriu el segon valor') );
  let res = sum( op1, op2 );
  let msg = `El resultat de sumar ${op1} més ${op2} és ${res}`;
  alert(msg);

  // console.log(typeof(op1));
  // console.log(typeof(op2));
  // let num2 = '2'
  // let num3 = 3;
  // console.log('num2 i num3 '+num2+num3);
  // console.log(msg);
}   

opSum();




