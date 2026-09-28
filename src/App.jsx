import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import cardSet from './cardSet'

const getRandomIndex = (current) => {
  let next = current
  while (next === current && cardSet.length > 1) {
    next = Math.floor(Math.random() * cardSet.length)
  }
  return next
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * cardSet.length)
  )

  return (
    <div className="App">
      <header className="header">
        <h1>Who's That Pokémon?</h1>
        <p className="description">
          Read the clue, guess the Pokémon, then flip the card to check your answer.
        </p>
        <p className="count">Total cards: {cardSet.length}</p>
      </header>

      <Card key={currentIndex} card={cardSet[currentIndex]} />

      <button className="next-button" onClick={() => setCurrentIndex(getRandomIndex(currentIndex))}>
        Next random card
      </button>
    </div>
  )
}

export default App
