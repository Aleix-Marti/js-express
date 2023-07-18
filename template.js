
const out = document.querySelector('#content');

// out.innerHTML = `<article>
//                     <h2>hola!</h2>
//                     <p class="text">sóc un article</p>
//                   </aricle>`;



const t = document.getElementById('plantilla');


const colors = ['Black','Red','Yellow'];

colors.forEach( color => {
  console.log(color)
  const clone = t.content.cloneNode(true);

  const p = clone.querySelector('p')
  p.innerText = color;
  // p.innerHTML = x;
  // clone.querySelector('.text')
  // clone.querySelector('p.text')

  out.appendChild(clone);
})



const evangelion = [
  {
      name: "Asuka Langley",
      eva: "Eva 02",
      image: "Asuka.webp"
  },
  {
      name: "Shinji Ikari",
      eva: "Eva 01",
      image: "Shinji.webp"
  },
  {
      name: "Rei Ayanami",
      eva: "Eva 00",
      image: "Rei.webp"
  }
]

const evaTemplate = document.querySelector('#character-template');
const characters = document.querySelector('#characters');


evangelion.forEach( character => {
  console.log(character);

  const c = evaTemplate.content.cloneNode(true);
  console.dir(c);
  c.querySelector('img').src = 'characters/'+character.image;
  c.querySelector('img').alt = character.name;
  c.querySelector('h2').innerText = character.name;
  c.querySelector('.eva').innerText = character.eva;

  characters.appendChild(c)
})
