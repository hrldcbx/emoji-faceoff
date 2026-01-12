import { useState } from 'react';

export default function StartScreen({ onStart, theme, onToggleTheme }) {
  const [rounds, setRounds] = useState(10);

  const roundOptions = [5, 10, 15, 20];

  return (
    <div className="screen start-screen">
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="logo">
        <span className="logo-emoji">😜</span>
        <h1>Emoji Faceoff</h1>
        <p className="tagline">Mimic the emoji. Guess the face!</p>
      </div>

      <div className="rounds-selector">
        <label>Rounds</label>
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
        Play
      </button>

      <div className="instructions">
        <h3>How to play</h3>
        <ol>
          <li>One player holds the phone and sees the emoji</li>
          <li>They mimic the expression for others to guess</li>
          <li>Tap <strong>Got it!</strong> if someone guesses correctly</li>
          <li>Tap <strong>Skip</strong> to pass</li>
        </ol>
      </div>
    </div>
  );
}
