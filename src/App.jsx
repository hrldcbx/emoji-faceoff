import { useState, useCallback, useEffect, createContext, useContext } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GuesserScreen from './components/GuesserScreen';
import ScoreScreen from './components/ScoreScreen';
import { translations, getDefaultLanguage } from './data/translations';
import './App.css';

// Theme helper
function getInitialTheme() {
  const saved = localStorage.getItem('emoji-faceoff-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// i18n Context
const I18nContext = createContext();

export function useTranslation() {
  const { lang, t } = useContext(I18nContext);
  return { lang, t };
}

export default function App() {
  const [gameState, setGameState] = useState('start'); // 'start' | 'playing' | 'guessing' | 'end'
  const [totalRounds, setTotalRounds] = useState(10);
  const [gameMode, setGameMode] = useState('emojis');
  const [results, setResults] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getDefaultLanguage);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('emoji-faceoff-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('emoji-faceoff-lang', lang);
    // Set RTL for Arabic
    document.documentElement.setAttribute('dir', t.dir || 'ltr');
  }, [lang, t.dir]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const handleSetLang = useCallback((newLang) => {
    setLang(newLang);
  }, []);

  const handleStart = useCallback((rounds, role, mode = 'emojis') => {
    setTotalRounds(rounds);
    setGameMode(mode);
    setResults(null);
    if (role === 'guesser') {
      setGameState('guessing');
    } else {
      setGameState('playing');
    }
  }, []);

  const handleGameEnd = useCallback((gameResults) => {
    setResults(gameResults);
    setGameState('end');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setResults(null);
    setGameState('start');
  }, []);

  return (
    <I18nContext.Provider value={{ lang, t }}>
      <div className="app">
        {gameState === 'start' && (
          <StartScreen
            onStart={handleStart}
            theme={theme}
            onToggleTheme={toggleTheme}
            lang={lang}
            onSetLang={handleSetLang}
          />
        )}
        {gameState === 'playing' && (
          <GameScreen totalRounds={totalRounds} onGameEnd={handleGameEnd} gameMode={gameMode} />
        )}
        {gameState === 'guessing' && (
          <GuesserScreen onPlayAgain={handlePlayAgain} gameMode={gameMode} />
        )}
        {gameState === 'end' && results && (
          <ScoreScreen
            score={results.score}
            skipped={results.skipped}
            total={results.total}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </I18nContext.Provider>
  );
}
