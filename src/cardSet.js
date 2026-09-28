import charmander from './assets/images/charmander.jpg'
import squirtle from './assets/images/squirtle.jpg'
import bulbasaur from './assets/images/bulbasaur.jpg'
import pikachu from './assets/images/pikachu.jpg'
import eevee from './assets/images/eevee.jpg'
import jigglypuff from './assets/images/jigglypuff.jpg'
import gengar from './assets/images/gengar.jpg'
import snorlax from './assets/images/snorlax.jpg'
import onix from './assets/images/onix.jpg'
import mewtwo from './assets/images/mewtwo.jpg'

// Each card is a pair with a clue (front) and the Pokémon's name + photo (back).
const cardSet = [
  { name: 'Charmander', image: charmander, dex: 4, type: 'fire', difficulty: 'Easy',
    clue: 'A small orange lizard whose tail flame shows how healthy it is. If the flame goes out, it is in trouble.' },
  { name: 'Squirtle', image: squirtle, dex: 7, type: 'water', difficulty: 'Easy',
    clue: 'A tiny turtle that pulls into its shell and blasts water at opponents.' },
  { name: 'Bulbasaur', image: bulbasaur, dex: 1, type: 'grass', difficulty: 'Easy',
    clue: 'A plant bulb has grown on its back since birth. It is number one in the Pokédex.' },
  { name: 'Pikachu', image: pikachu.png, dex: 25, type: 'electric', difficulty: 'Easy',
    clue: 'A yellow mouse with red cheeks that store electricity and a tail shaped like a lightning bolt.' },
  { name: 'Eevee', image: eevee.png, dex: 133, type: 'normal', difficulty: 'Medium',
    clue: 'A fluffy brown fox-like Pokémon with an unstable genetic makeup that lets it evolve into many forms.' },
  { name: 'Jigglypuff', image: jigglypuff, dex: 39, type: 'fairy', difficulty: 'Medium',
    clue: 'A round pink balloon Pokémon whose singing puts everyone to sleep.' },
  { name: 'Gengar', image: gengar, dex: 94, type: 'ghost', difficulty: 'Medium',
    clue: 'A grinning purple shadow that is said to hide in the dark and lower the temperature of the room.' },
  { name: 'Snorlax', image: snorlax, dex: 143, type: 'normal', difficulty: 'Medium',
    clue: 'A huge, sleepy giant that eats a mountain of food each day and often blocks roads while napping.' },
  { name: 'Onix', image: onix, dex: 95, type: 'rock', difficulty: 'Hard',
    clue: 'A enormous chain of boulders that tunnels underground, dragging its body through solid rock.' },
  { name: 'Mewtwo', image: mewtwo, dex: 150, type: 'psychic', difficulty: 'Hard',
    clue: 'A powerful psychic Pokémon created by science from the DNA of a rare, mythical Pokémon.' },
]

export default cardSet