
fetch('dbz.json')
  .then( data => data.json() )
  .then( info => {
    console.log(info)
    const template = document.querySelector('#dbz');
    const out = document.querySelector('#dbz-chars');


    info.forEach( character => {

      const c = template.content.cloneNode(true);
      c.querySelector('h2').innerText = character.name;
      c.querySelector('.attack').innerText = character.attack;
      c.querySelector('.defense').innerText = character.defense;

      out.appendChild(c)
    })

  })
  // .then( data => {
  //   console.log(data)
  //   return data.json()
  // })


const url = 'https://api.chucknorris.io/jokes/random';
const facts = document.querySelector('#facts')
// fetch(url)
//   .then( data => data.json() )
//   .then( fact => {
//     console.log(fact)
//     facts.innerHTML = `<i>${fact.value}</i>`;
//   } )


const num = document.querySelector('#numFacts')
const getBtn = document.querySelector('#getFacts')

getBtn.onclick = () => {
  let n = num.value;
  console.log(n);
  for( let i=0; i<n; i++) {
    getFact();
  }
}


const getFact = () => {
  fetch(url)
  .then( data => data.json() )
  .then( fact => {
    console.log(fact)
    facts.innerHTML += `<p>Fact: <i>${fact.value}</i><p>`;
  } )
}