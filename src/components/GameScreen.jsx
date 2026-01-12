import { useState, useEffect, useCallback } from 'react';
import { emojis, shuffleEmojis } from '../data/emojis';
import { getEmojiName } from '../data/emojiNames';
import { useTranslation } from '../App';

export default function GameScreen({ totalRounds, onGameEnd }) {
  const { lang, t } = useTranslation();
  const [shuffledEmojis] = useState(() => shuffleEmojis(emojis));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const currentEmoji = shuffledEmojis[currentIndex % shuffledEmojis.length];
  const roundNumber = currentIndex + 1;
  const isGameOver = roundNumber > totalRounds;

  useEffect(() => {
    if (isGameOver) {
      onGameEnd({ score, skipped, total: totalRounds });
    }
  }, [isGameOver, score, skipped, totalRounds, onGameEnd]);

  const handleAction = useCallback((action) => {
    setIsRevealing(true);
    setLastAction(action);

    if (action === 'correct') {
      setScore((s) => s + 1);
    } else {
      setSkipped((s) => s + 1);
    }

    // Brief pause to show feedback
    setTimeout(() => {
      setIsRevealing(false);
      setLastAction(null);
      setCurrentIndex((i) => i + 1);
    }, 400);
  }, []);

  if (isGameOver) {
    return null;
  }

  return (
    <div className={`screen game-screen ${isRevealing ? 'revealing' : ''} ${lastAction ? `action-${lastAction}` : ''}`}>
      <div className="game-header">
        <div className="round-indicator">
          <span>{roundNumber}</span> {t.of} {totalRounds}
        </div>
        <div className="score-display">
          <span className="score-correct">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-skipped">{skipped}</span>
        </div>
      </div>

      <div className="emoji-display">
        <span className="current-emoji">{currentEmoji.emoji}</span>
        <span className="emoji-name">{getEmojiName(currentEmoji.name, lang)}</span>
      </div>

      <div className="action-buttons">
        <button
          className="action-btn skip-btn"
          onClick={() => handleAction('skip')}
          disabled={isRevealing}
        >
          {t.skip}
        </button>
        <button
          className="action-btn correct-btn"
          onClick={() => handleAction('correct')}
          disabled={isRevealing}
        >
          {t.gotIt}
        </button>
      </div>

      {isRevealing && (
        <div className={`feedback-overlay ${lastAction}`}>
          {lastAction === 'correct' ? '✓' : '→'}
        </div>
      )}
    </div>
  );
}
