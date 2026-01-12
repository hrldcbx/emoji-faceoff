import { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ScoreScreen from './components/ScoreScreen';
import './App.css';

export default function App() {
  const [gameState, setGameState] = useState('start'); // 'start' | 'playing' | 'end'
  const [totalRounds, setTotalRounds] = useState(10);
  const [results, setResults] = useState(null);

  const handleStart = useCallback((rounds) => {
    setTotalRounds(rounds);
    setResults(null);
    setGameState('playing');
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
    <div className="app">
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      {gameState === 'playing' && (
        <GameScreen totalRounds={totalRounds} onGameEnd={handleGameEnd} />
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
  );
}
