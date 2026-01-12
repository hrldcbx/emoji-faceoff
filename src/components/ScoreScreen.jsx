import { useTranslation } from '../App';

export default function ScoreScreen({ score, skipped, total, onPlayAgain }) {
  const { t } = useTranslation();
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return { emoji: '🏆', text: t.results.perfect };
    if (percentage >= 80) return { emoji: '🎉', text: t.results.amazing };
    if (percentage >= 60) return { emoji: '😄', text: t.results.great };
    if (percentage >= 40) return { emoji: '😊', text: t.results.nice };
    if (percentage >= 20) return { emoji: '🤔', text: t.results.practice };
    return { emoji: '😅', text: t.results.again };
  };

  const message = getMessage();

  return (
    <div className="screen score-screen">
      <div className="result-emoji">{message.emoji}</div>
      <h2 className="result-message">{message.text}</h2>

      <div className="score-breakdown">
        <div className="score-item correct">
          <span className="score-number">{score}</span>
          <span className="score-label">{t.correct}</span>
        </div>
        <div className="score-item skipped">
          <span className="score-number">{skipped}</span>
          <span className="score-label">{t.skipped}</span>
        </div>
        <div className="score-item total">
          <span className="score-number">{percentage}%</span>
          <span className="score-label">{t.score}</span>
        </div>
      </div>

      <button className="play-btn" onClick={onPlayAgain}>
        {t.playAgain}
      </button>
    </div>
  );
}
