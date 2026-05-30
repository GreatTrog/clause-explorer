import React from 'react';
import { AppMode } from '../../types';

interface ModeSelectionProps {
  onSelectMode: (mode: AppMode) => void;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelectMode }) => {
  return (
    <div className="home-screen">
      <div className="hero">
        <h1>Welcome to Grammar Explorer!</h1>
        <p className="subtitle">Master your grammar with the wise Owl!</p>
        {/* Placeholder for Owl Image */}
        <div className="mascot-placeholder">🦉</div>
      </div>

      <div className="mode-grid">
        <button
          className="mode-card learn"
          onClick={() => onSelectMode(AppMode.LEARN)}
        >
          <h2>🎓 Learn</h2>
          <p>Discover Main, Subordinate, and Relative clauses.</p>
        </button>

        <button
          className="mode-card practice"
          onClick={() => onSelectMode(AppMode.PRACTICE)}
        >
          <h2>🎯 Practice</h2>
          <p>Test your skills on specific clause types.</p>
        </button>

        <button
          className="mode-card mastery"
          onClick={() => onSelectMode(AppMode.MASTERY)}
        >
          <h2>🏆 Mastery</h2>
          <p>Prove you're a grammar wizard!</p>
        </button>
      </div>

      <div className="badge-container">
        <a
          href="https://learningarcade.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
          aria-label="Visit Learning Arcade"
        >
          <img
            src="/learning-arcade-badge-light.png"
            alt="Learning Arcade"
            className="badge-img"
          />
        </a>
      </div>

      <style>{`
        .home-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .hero {
          margin-bottom: 3rem;
        }

        .hero h1 {
          font-size: 3rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--color-text-muted);
        }

        .mascot-placeholder {
          font-size: 5rem;
          margin: 1rem 0;
          animation: bounce 2s infinite;
        }

        .mode-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }

        .mode-card {
          padding: 2rem;
          border-radius: var(--radius-lg);
          color: white;
          text-align: left;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: var(--shadow-lg);
        }

        .mode-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-pop);
        }

        .mode-card h2 {
          font-size: 2rem;
          margin: 0;
        }
        
        .mode-card p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .learn { background-color: var(--color-primary); }
        .practice { background-color: var(--color-secondary); }
        .mastery { background-color: var(--color-accent); }

        .badge-container {
          margin-top: 3.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .badge-link {
          display: inline-block;
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .badge-link:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        .badge-link:active {
          transform: translateY(-1px) scale(0.98);
        }

        .badge-img {
          width: 200px;
          height: auto;
          display: block;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};
