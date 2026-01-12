export default function ScoreScreen({ score, skipped, total, onPlayAgain }) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return { emoji: '🏆', text: 'Perfect game!' };
    if (percentage >= 80) return { emoji: '🎉', text: 'Amazing!' };
    if (percentage >= 60) return { emoji: '😄', text: 'Great job!' };
    if (percentage >= 40) return { emoji: '😊', text: 'Nice try!' };
    if (percentage >= 20) return { emoji: '🤔', text: 'Keep practicing!' };
    return { emoji: '😅', text: 'Better luck next time!' };
  };

  const message = getMessage();

  return (
    <div className="screen score-screen">
      <div className="result-emoji">{message.emoji}</div>
      <h2 className="result-message">{message.text}</h2>

      <div className="score-breakdown">
        <div className="score-item correct">
          <span className="score-number">{score}</span>
          <span className="score-label">Correct</span>
        </div>
        <div className="score-item skipped">
          <span className="score-number">{skipped}</span>
          <span className="score-label">Skipped</span>
        </div>
        <div className="score-item total">
          <span className="score-number">{percentage}%</span>
          <span className="score-label">Score</span>
        </div>
      </div>

      <button className="play-btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}
