import { useState } from 'react';
import { useTranslation } from '../App';
import { getLanguageList } from '../data/translations';

export default function StartScreen({ onStart, theme, onToggleTheme, lang, onSetLang }) {
  const [rounds, setRounds] = useState(10);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const { t } = useTranslation();

  const roundOptions = [5, 10, 15, 20];
  const languages = getLanguageList();
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

      <button className="play-btn" onClick={() => onStart(rounds)}>
        {t.play}
      </button>

      <div className="instructions">
        <h3>{t.howToPlay}</h3>
        <ol>
          {t.instructions.map((instruction, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: instruction }} />
          ))}
        </ol>
      </div>
    </div>
  );
}
