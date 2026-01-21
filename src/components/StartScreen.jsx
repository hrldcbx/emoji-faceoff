import { useState } from 'react';
import { useTranslation } from '../App';
import { getLanguageList } from '../data/translations';
import { getAllCharacterSets } from '../data/characterSets';

export default function StartScreen({ onStart, theme, onToggleTheme, lang, onSetLang }) {
  const [rounds, setRounds] = useState(10);
  const [role, setRole] = useState('actor'); // 'actor' | 'guesser'
  const [gameMode, setGameMode] = useState('emojis'); // 'emojis' | 'fictional' | 'famous'
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const { t } = useTranslation();

  const roundOptions = [5, 10, 15, 20];
  const languages = getLanguageList();
  const characterSets = getAllCharacterSets();
  const currentLang = languages.find((l) => l.code === lang);

  return (
    <div className="screen start-screen">
      <div className="top-controls">
        <button
          className="lang-toggle"
          onClick={() => setShowLangPicker(!showLangPicker)}
          aria-label="Select language"
        >
          {currentLang?.flag}
        </button>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {showLangPicker && (
        <div className="lang-picker">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`lang-option ${lang === language.code ? 'active' : ''}`}
              onClick={() => {
                onSetLang(language.code);
                setShowLangPicker(false);
              }}
            >
              <span className="lang-flag">{language.flag}</span>
              <span className="lang-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      <div className="logo">
        <span className="logo-emoji">😜</span>
        <h1>{t.title}</h1>
        <p className="tagline">{t.tagline}</p>
      </div>

      {/* Game Mode Selector */}
      <div className="mode-selector">
        <label>{t.selectMode}</label>
        <div className="mode-options">
          {characterSets.map((set) => (
            <button
              key={set.id}
              className={`mode-btn ${gameMode === set.id ? 'active' : ''}`}
              onClick={() => setGameMode(set.id)}
            >
              <span className="mode-icon">{set.icon}</span>
              <span className="mode-name">{t.modes[set.id]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Role Selector */}
      <div className="role-selector">
        <label>{t.selectRole}</label>
        <div className="role-options">
          <button
            className={`role-btn ${role === 'actor' ? 'active' : ''}`}
            onClick={() => setRole('actor')}
          >
            <span className="role-icon">🎭</span>
            <span className="role-name">{t.actor}</span>
            <span className="role-desc">{t.actorDesc}</span>
          </button>
          <button
            className={`role-btn ${role === 'guesser' ? 'active' : ''}`}
            onClick={() => setRole('guesser')}
          >
            <span className="role-icon">🤔</span>
            <span className="role-name">{t.guesser}</span>
            <span className="role-desc">{t.guesserDesc}</span>
          </button>
        </div>
      </div>

      {/* Only show rounds selector for actor */}
      {role === 'actor' && (
        <div className="rounds-selector">
          <label>{t.rounds}</label>
          <div className="rounds-options">
            {roundOptions.map((num) => (
              <button
                key={num}
                className={`round-btn ${rounds === num ? 'active' : ''}`}
                onClick={() => setRounds(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      <button className="play-btn" onClick={() => onStart(rounds, role, gameMode)}>
        {t.play}
      </button>

      {/* Collapsible Instructions */}
      <button
        className={`instructions-toggle ${showInstructions ? 'open' : ''}`}
        onClick={() => setShowInstructions(!showInstructions)}
      >
        <span>{t.howToPlay}</span>
        <span className="toggle-icon">{showInstructions ? '▲' : '▼'}</span>
      </button>

      {showInstructions && (
        <div className="instructions">
          <ol>
            {(role === 'guesser' ? t.guesserInstructions : t.instructions).map((instruction, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: instruction }} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
