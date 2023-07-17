const demo = document.getElementById('demo');
console.log(demo);

// const t = document.querySelector('#test');
const t = document.querySelector('h1');
console.dir(t);


// const d = document.querySelector('div');
const d = document.querySelectorAll('div');
console.dir(d);
d.forEach( x => console.log( x ) );


const out = document.querySelector('#out');
out.innerHTML = '<h2>Hey you!</h2>';


const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  out.innerHTML += '<h3>Click al primer botó</h3>';
})
// button.addEventListener('click', function(){
//   out.innerHTML += '<h3>Click al primer botó</h3>';
// })




const clickFunc = () => {
  out.innerHTML += '<h3>Click al segon botó</h3>';
}

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', clickFunc );

const clickFuncAlt = () => {
  out.innerHTML += '<h3>Click al tercer botó</h3>';
}


const myText = document.querySelector('#myText');
const myNum = document.querySelector('#myNum');
const getBtn = document.querySelector('#get');

getBtn.onclick = () => {
  // console.dir(myText)
  // console.dir(myNum)
  out.innerHTML = `<p>${myText.value} té ${myNum.value} anys`;
}


const btnRed = document.querySelector('#red');
const btnHide = document.querySelector('#hide');
const btnShow = document.querySelector('#show');


btnRed.onclick = () => {
  out.style.color = 'red';
  out.style.backgroundColor = 'aquamarine';
}
btnHide.onclick = () => {
  // out.style.display = 'none';
  out.style.visibility = 'hidden';
}
btnShow.onclick = () => {
  // out.style.display = 'block';
  out.style.visibility = 'visible';
}