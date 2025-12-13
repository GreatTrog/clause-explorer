import React, { useState } from 'react';
import { LEARN_CONTENT } from '../../data/curriculum';
import { TENSES_CONTENT } from '../../data/tensesCurriculum';
import { VOICE_CURRICULUM } from '../../data/voiceCurriculum';
import { WORD_CLASSES_CURRICULUM } from '../../data/wordClassesCurriculum';
import { LearnCard } from './LearnCard';
import { useGameState } from '../../context/GameStateContext';
import { ModuleSelector } from '../../components/ModuleSelector';
import { GrammarModule, WordClassType } from '../../types';

interface LearnContainerProps {
  onComplete: () => void;
}

export const LearnContainer: React.FC<LearnContainerProps> = ({ onComplete }) => {
  const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);
  const [selectedWordClass, setSelectedWordClass] = useState<WordClassType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { markLearnCompleted } = useGameState();

  if (!selectedModule) {
    return (
      <div className="learn-container">
        <ModuleSelector onSelect={setSelectedModule} />
      </div>
    );
  }

  // --- MENU STYLES (Reused) ---
  const MENU_STYLES = `
    .learn-menu {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
    .category-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }
    .cat-btn {
        padding: 1rem;
        min-height: 120px;
        border-radius: var(--radius-lg);
        border: 1px solid #e5e7eb;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        text-align: center;
        color: var(--color-text-main);
        background: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .cat-btn:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-pop);
        border-color: transparent;
    }
    .cat-btn h3 { font-size: 1.5rem; margin: 0; }
    .cat-btn p { font-size: 1rem; opacity: 0.9; margin: 0; color: #6b7280; }
    .cat-btn .icon {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }
    .cat-btn.word-class h3 { color: #8B5CF6; }
  `;

  // --- WORD CLASSES SUB-MENU ---
  if (selectedModule === GrammarModule.WORD_CLASSES && !selectedWordClass) {
    return (
      <div className="learn-menu">
        <div className="header-nav" style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <button className="back-link" onClick={() => setSelectedModule(null)}>← modules</button>
        </div>
        <h2>Choose a Word Class to Learn</h2>
        <div className="category-grid">
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.NOUN)}>
            <div className="icon">📦</div>
            <h3>Nouns</h3>
            <p>Naming words</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.VERB)}>
            <div className="icon">🏃</div>
            <h3>Verbs</h3>
            <p>Action words</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADJECTIVE)}>
            <div className="icon">🎨</div>
            <h3>Adjectives</h3>
            <p>Describing nouns</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADVERB)}>
            <div className="icon">⚡</div>
            <h3>Adverbs</h3>
            <p>Describing verbs</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PRONOUN)}>
            <div className="icon">👤</div>
            <h3>Pronouns</h3>
            <p>He, She, It</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PREPOSITION)}>
            <div className="icon">📍</div>
            <h3>Prepositions</h3>
            <p>Position words</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.DETERMINER)}>
            <div className="icon">👈</div>
            <h3>Determiners</h3>
            <p>The, A, That</p>
          </button>
          <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.INTERJECTION)}>
            <div className="icon">❗</div>
            <h3>Interjections</h3>
            <p>Wow! Ouch!</p>
          </button>
        </div>
        <style>{MENU_STYLES}</style>
        <style>{`
                .back-link {
                    background: none;
                    border: none;
                    color: var(--color-primary);
                    font-weight: bold;
                    cursor: pointer;
                    text-decoration: underline;
                }
              `}</style>
      </div>
    );
  }

  let content = LEARN_CONTENT;
  if (selectedModule === GrammarModule.TENSES) {
    content = TENSES_CONTENT;
  } else if (selectedModule === GrammarModule.VOICE) {
    content = VOICE_CURRICULUM;
  } else if (selectedModule === GrammarModule.WORD_CLASSES) {
    // If we have a specific class selected, filter only those pages
    if (selectedWordClass) {
      content = WORD_CLASSES_CURRICULUM.filter(page => page.type === selectedWordClass);
    } else {
      // Fallback (shouldn't be reached if logic above holds)
      content = WORD_CLASSES_CURRICULUM;
    }
  }

  if (content.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>🚧 Content Coming Soon! 🚧</h2>
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
    // If in Word Classes and drilled down, go up one level first
    if (selectedModule === GrammarModule.WORD_CLASSES && selectedWordClass) {
      setSelectedWordClass(null);
      setCurrentIndex(0);
      return;
    }

    setSelectedModule(null);
    setCurrentIndex(0);
  };

  return (
    <div className="learn-container">
      <div className="header-nav" style={{ marginBottom: '1rem' }}>
        <button className="back-link" onClick={handleBackToModules}>← {selectedWordClass ? 'topics' : 'modules'}</button>
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
