export function normalize(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]/g, '')
  }
  
  export function isCorrectGuess(guess, answer) {
    const normGuess = normalize(guess)
    const normAnswer = normalize(answer)
    if (!normGuess) return false
    if (normGuess === normAnswer) return true
    return normGuess.length >= 4 && normAnswer.includes(normGuess)
  }