import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import cardSet from './cardSet'

function App() {
  const [order, setOrder] = useState(() => cardSet.map((_, i) => i))
  const [position, setPosition] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)

  const currentCard = cardSet[order[position]]
  const atStart = position === 0
  const atEnd = position === order.length - 1

  const goPrev = () => { if (!atStart) setPosition(position - 1) }
  const goNext = () => { if (!atEnd) setPosition(position + 1) }

  const handleShuffle = () => {
    const shuffled = [...order]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setOrder(shuffled)
    setPosition(0)
  }

  const handleCorrect = () => {
    const next = streak + 1
    setStreak(next)
    setBestStreak((best) => Math.max(best, next))
  }

  const handleIncorrect = () => setStreak(0)

  return (
    <div className="App">
      <header className="header">
        <h1>Who's That Pokémon?</h1>
        <p className="description">
          Type your guess, then flip the card to check it. Use Prev and Next to move through the set.
        </p>
        <p className="count">Total cards: {cardSet.length}</p>
      </header>

      <div className="streak-bar">
        <span>Streak: {streak}</span>
        <span>Best: {bestStreak}</span>
      </div>

      <Card key={order[position]} card={currentCard} onCorrect={handleCorrect} onIncorrect={handleIncorrect} />

      <div className="nav-row">
        <button className="nav-button" onClick={goPrev} disabled={atStart}>
          &lsaquo; Prev
        </button>
        <span className="position-indicator">{position + 1} / {order.length}</span>
        <button className="nav-button" onClick={goNext} disabled={atEnd}>
          Next &rsaquo;
        </button>
      </div>

      <button className="shuffle-button" onClick={handleShuffle}>Shuffle</button>
    </div>
  )
}

export default App