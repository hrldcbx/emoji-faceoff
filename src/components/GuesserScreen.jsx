import { useState, useMemo } from 'react';
import { useTranslation } from '../App';
import { emojis, shuffleEmojis } from '../data/emojis';
import { getEmojiName } from '../data/emojiNames';

export default function GuesserScreen({ onPlayAgain }) {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const { t, lang } = useTranslation();

  // Shuffle emojis once on mount
  const shuffledEmojis = useMemo(() => shuffleEmojis(emojis), []);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setShowResult(true);
  };

  const handleTryAgain = () => {
    setSelectedEmoji(null);
    setShowResult(false);
  };

  if (showResult && selectedEmoji) {
    return (
      <div className="screen guesser-result-screen">
        <div className="guesser-result">
          <span className="result-emoji">{selectedEmoji.emoji}</span>
          <p className="result-text">
            {t.youGuessed}: <strong>{getEmojiName(selectedEmoji.name, lang)}</strong>
          </p>
        </div>
        <div className="guesser-actions">
          <button className="action-btn try-again-btn" onClick={handleTryAgain}>
            {t.tryAgain}
          </button>
          <button className="action-btn home-btn" onClick={onPlayAgain}>
            {t.playAgain}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen guesser-screen">
      <div className="guesser-header">
        <h2>{t.pickEmoji}</h2>
      </div>
      <div className="emoji-grid">
        {shuffledEmojis.map((item, index) => (
          <button
            key={index}
            className="emoji-grid-item"
            onClick={() => handleEmojiSelect(item)}
            aria-label={getEmojiName(item.name, lang)}
          >
            {item.emoji}
          </button>
        ))}
      </div>
      <button className="back-btn" onClick={onPlayAgain}>
        ← {t.playAgain}
      </button>
    </div>
  );
}
