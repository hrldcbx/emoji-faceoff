import { useState, useMemo } from 'react';
import { useTranslation } from '../App';
import { emojis, shuffleEmojis } from '../data/emojis';
import { getEmojiName } from '../data/emojiNames';
import { getCharacterSet } from '../data/characterSets';

export default function GuesserScreen({ onPlayAgain, gameMode = 'emojis' }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const { t, lang } = useTranslation();

  const isEmojiMode = gameMode === 'emojis';

  // Get characters based on game mode
  const characters = useMemo(() => {
    const characterSet = getCharacterSet(gameMode);
    if (characterSet.useDefaultEmojis) {
      return shuffleEmojis(emojis.map(e => ({ display: e.emoji, name: e.name, isEmoji: true })));
    }
    return shuffleEmojis(characterSet.characters);
  }, [gameMode]);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setShowResult(true);
  };

  const handleTryAgain = () => {
    setSelectedItem(null);
    setShowResult(false);
  };

  // Get display name - for emojis use translation, for characters use name directly
  const getDisplayName = (item) => {
    return item.isEmoji ? getEmojiName(item.name, lang) : item.name;
  };

  if (showResult && selectedItem) {
    return (
      <div className="screen guesser-result-screen">
        <div className="guesser-result">
          <span className={`result-emoji ${!isEmojiMode ? 'result-character' : ''}`}>
            {selectedItem.display}
          </span>
          <p className="result-text">
            {t.youGuessed}: <strong>{getDisplayName(selectedItem)}</strong>
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
      <div className={`emoji-grid ${!isEmojiMode ? 'character-grid' : ''}`}>
        {characters.map((item, index) => (
          <button
            key={index}
            className={`emoji-grid-item ${!isEmojiMode ? 'character-grid-item' : ''}`}
            onClick={() => handleItemSelect(item)}
            aria-label={getDisplayName(item)}
            title={getDisplayName(item)}
          >
            {isEmojiMode ? item.display : (
              <span className="grid-item-content">
                <span className="grid-item-emoji">{item.display}</span>
                <span className="grid-item-name">{item.name}</span>
              </span>
            )}
          </button>
        ))}
      </div>
      <button className="back-btn" onClick={onPlayAgain}>
        ← {t.playAgain}
      </button>
    </div>
  );
}
