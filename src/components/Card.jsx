import { useState } from 'react'

function Card({ card }) {
  const [flipped, setFlipped] = useState(false)

  const [imgFailed, setImgFailed] = useState(false)
  const flip = () => setFlipped(!flipped)

  return (
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
  )
}

export default Card