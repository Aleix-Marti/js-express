let a = 'a';
let b = 'b';

// console.log(a,b);

// a = b;

// console.log(a,b);

// console.log( a == b );



let c = 2;
let d = '2';
let e = 2;

// console.log( c, typeof(c) );
// console.log( d, typeof(d) );

// console.log( c == d );
// console.log( c === d );
// console.log( c === e );
// console.log( a != c );
// console.log( c != e );


if ( a == b ) {
  console.log('"a" i "b" són iguals');
}

if ( c == e ) {
  console.log('"c" i "e" són iguals');
} 

if ( a == b ) {
  console.log('"a" i "b" són iguals');
} else {
  console.log('"a" i "b" són diferents');
}



const sum = (x,y) => parseInt(x) + parseInt(y);

const rest = (x,y) => parseInt(x) - parseInt(y);


// let op1 = 2;
let op1 = 8;
let op2 = 4;
let result = 0;

if ( op1 > op2 ) {
  result = rest(op1,op2)
} else {
  result = sum(op1,op2)
}

// console.log(`op1:${op1}, op2:${op2}, result:${result}`);


const oper = (x,y) => {
  let res;
  if ( x > y ) {
    res = rest(x,y)
  } else {
    res = sum(x,y)
  }
  return res;
}

// console.log( oper(5,3) );


const oper2 = (x,y) => {
  let res;
  if ( x > y ) {
    res = x/y
  } else {
    res = x*y
  }
  return res;
}

// console.log( oper2(3,5) );




let input = prompt('Escriu una operació: +, -, * o /');

switch (input) {
  case '+':
    console.log('suma');
    break;

  case '-':
    console.log('resta');
    break;

  case '*':
    console.log('mult');
    break;

  case '/':
    console.log('div');
    break;

  default:
    console.log('...');
    break;
}