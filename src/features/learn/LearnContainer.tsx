import React, { useState } from 'react';
import { LEARN_CONTENT } from '../../data/curriculum';
import { LearnCard } from './LearnCard';
import { useGameState } from '../../context/GameStateContext';
import { ModuleSelector } from '../../components/ModuleSelector';
import { GrammarModule } from '../../types';

interface LearnContainerProps {
  onComplete: () => void;
}

export const LearnContainer: React.FC<LearnContainerProps> = ({ onComplete }) => {
  const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { markLearnCompleted } = useGameState();

  if (!selectedModule) {
    return (
      <div className="learn-container">
        <ModuleSelector onSelect={setSelectedModule} />
      </div>
    );
  }

  // TODO: Add different content for TENSES when available
  // For now, if TENSES is selected, we could show a "Coming Soon" or just the clauses again for testing
  const content = selectedModule === GrammarModule.CLAUSES ? LEARN_CONTENT : []; // Placeholder empty for Tenses

  if (content.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>🚧 Tenses Module Coming Soon! 🚧</h2>
        <p>We are building this right now.</p>
        <button className="btn-primary" onClick={() => setSelectedModule(null)}>Choose Another Topic</button>
      </div>
    );
  }

  const currentPage = content[currentIndex];
  // Calculate progress for the bar (0 to 100)
  const progressPercent = ((currentIndex + 1) / content.length) * 100;

  const isLastPage = currentIndex === content.length - 1;
  const isFirstPage = currentIndex === 0;

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentIndex(prev => prev + 1);
    } else {
      markLearnCompleted();
      onComplete(); // Note: This might exit the whole Learn mode back to Home
    }
  };

  const handlePrev = () => {
    if (!isFirstPage) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setCurrentIndex(0);
  };

  return (
    <div className="learn-container">
      <div className="header-nav" style={{ marginBottom: '1rem' }}>
        <button className="back-link" onClick={handleBackToModules}>← modules</button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="progress-text">{currentIndex + 1} / {content.length}</span>
      </div>

      <LearnCard page={currentPage} />

      <div className="navigation-controls">
        <button
          className="nav-btn secondary"
          onClick={handlePrev}
          disabled={isFirstPage}
        >
          Previous
        </button>

        <button
          className="nav-btn primary"
          onClick={handleNext}
        >
          {isLastPage ? 'Finish!' : 'Next'}
        </button>
      </div>

      <style>{`
        .learn-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .progress-bar-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          flex: 1;
          height: 12px;
          background: #E5E7EB;
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-primary);
          transition: width 0.3s ease;
          border-radius: var(--radius-full);
        }
        
        .progress-text {
          font-weight: bold;
          color: var(--color-text-muted);
        }

        .navigation-controls {
          display: flex;
          justify-content: space-between;
        }

        .nav-btn {
          padding: 1rem 2rem;
          border-radius: var(--radius-full);
          font-weight: bold;
          font-size: 1.1rem;
          min-width: 120px;
          transition: transform 0.1s, opacity 0.2s;
        }
        
        .nav-btn:active {
          transform: scale(0.95);
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-btn.primary {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-pop);
        }

        .nav-btn.secondary {
          background: white;
          color: var(--color-text-muted);
          border: 1px solid #E5E7EB;
        }
      `}</style>
    </div>
  );
};
