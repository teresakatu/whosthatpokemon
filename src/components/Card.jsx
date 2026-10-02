import { useState } from 'react'
import { isCorrectGuess } from '../utils'

function Card({ card, onCorrect, onIncorrect }) {
  const [flipped, setFlipped] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState(null)

  const flip = () => setFlipped(!flipped)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!guess.trim() || flipped) return

    if (isCorrectGuess(guess, card.name)) {
      setFeedback('correct')
      onCorrect()
      setTimeout(() => setFlipped(true), 600)
    } else {
      setFeedback('incorrect')
      onIncorrect()
    }
  }

  return (
    <>
      <div
        className={`card type-${card.type} ${flipped ? 'flipped' : ''}`}
        onClick={flip}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            flip()
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Answer showing. Press to flip back.' : 'Clue showing. Press to reveal the answer.'}
      >
        <div className="card-inner">
          <div className="card-face card-front">
            <div className="card-tags">
              <span className="tag">{card.type}</span>
              <span className="tag">{card.difficulty}</span>
            </div>
            <div className="silhouette">?</div>
            <p className="clue">{card.clue}</p>
            <p className="hint">Click to flip</p>
          </div>

          <div className="card-face card-back">
            <div className="photo">
              {card.image && !imgFailed ? (
                <img src={card.image} alt={card.name} onError={() => setImgFailed(true)} />
              ) : (
                <span className="photo-empty">Photo goes here</span>
              )}
            </div>
            <p className="dex">No. {card.dex}</p>
            <h2 className="answer">{card.name}</h2>
            <p className="hint">Click to flip back</p>
          </div>
        </div>
      </div>

      {!flipped && (
        <form className="guess-form" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Who's that Pokémon?</label>
          <div className="guess-row">
            <input
              id="guess-input"
              type="text"
              value={guess}
              onChange={(e) => {
                setGuess(e.target.value)
                if (feedback) setFeedback(null)
              }}
              placeholder="Type your guess"
              autoComplete="off"
            />
            <button type="submit" className="guess-submit">Submit</button>
          </div>
          {feedback && (
            <p className={`feedback ${feedback}`}>
              {feedback === 'correct' ? 'Correct! Flipping the card...' : 'Not quite — try again!'}
            </p>
          )}
        </form>
      )}
    </>
  )
}

export default Card