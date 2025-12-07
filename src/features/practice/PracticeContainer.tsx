import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../../data/practiceQuestions';
import type { Chunk } from '../../data/practiceQuestions';
import { SentenceHighlighter } from './SentenceHighlighter';
import { FeedbackOverlay } from './FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';
import { ClauseType, GrammarModule } from '../../types';
import { ModuleSelector } from '../../components/ModuleSelector';

export const PracticeContainer: React.FC = () => {
    // State for Module Selection
    const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);

    // State for sub-menu selection (for Clauses)
    // null = showing menu
    const [selectedCategory, setSelectedCategory] = useState<ClauseType | null>(null);

    // Game state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChunk, setSelectedChunk] = useState<Chunk | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

    const { updatePracticeScore, incrementStreak, resetStreak } = useGameState();

    if (!selectedModule) {
        return (
            <div className="practice-container">
                <ModuleSelector onSelect={setSelectedModule} />
            </div>
        )
    }

    if (selectedModule === GrammarModule.TENSES) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <button className="back-link" onClick={() => setSelectedModule(null)} style={{ float: 'left' }}>← modules</button>
                <br /><br />
                <h2>🚧 Tenses Practice Coming Soon! 🚧</h2>
                <p>We are building this right now.</p>
            </div>
        );
    }

    // --- Clauses Logic ---

    // Filter questions based on selection
    // If selectedCategory is null, this array is empty but we won't render the game loop anyway
    const filteredQuestions = PRACTICE_QUESTIONS.filter(q => q.type === selectedCategory);

    const currentQuestion = filteredQuestions[currentIndex];
    const isFinished = currentIndex >= filteredQuestions.length && filteredQuestions.length > 0;

    const handleSelectChunk = (chunk: Chunk) => {
        setSelectedChunk(chunk);
        setIsAnswered(true);

        const isCorrect = chunk.isCorrect;

        if (isCorrect) {
            incrementStreak();
            if (selectedCategory) updatePracticeScore(selectedCategory, 10);
            setFeedback({ isCorrect: true, message: "Great job! You found the clause." });
        } else {
            resetStreak();
            setFeedback({
                isCorrect: false,
                message: currentQuestion.hint || "That's not it. Try again!"
            });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setIsAnswered(false);

        if (currentIndex < filteredQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Mark as finished for this set
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleTryAgain = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setIsAnswered(false);
    };

    const resetSelection = () => {
        setSelectedCategory(null);
        setCurrentIndex(0);
        setFeedback(null);
        setSelectedChunk(null);
        setIsAnswered(false);
    };

    // --- Sub-menu View ---
    if (!selectedCategory) {
        return (
            <div className="practice-menu">
                <h2>Choose a Clause to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn main" onClick={() => setSelectedCategory(ClauseType.MAIN)}>
                        <h3>Main Clauses</h3>
                        <p>The boss sentences!</p>
                    </button>
                    <button className="cat-btn sub" onClick={() => setSelectedCategory(ClauseType.SUBORDINATE)}>
                        <h3>Subordinate Clauses</h3>
                        <p>The helper sentences!</p>
                    </button>
                    <button className="cat-btn rel" onClick={() => setSelectedCategory(ClauseType.RELATIVE)}>
                        <h3>Relative Clauses</h3>
                        <p>The descriptive sentences!</p>
                    </button>
                    <button className="cat-btn conj" onClick={() => setSelectedCategory(ClauseType.CONJUNCTION)}>
                        <h3>Conjunctions</h3>
                        <p>Spot the joining words!</p>
                    </button>
                    <button className="cat-btn pro" onClick={() => setSelectedCategory(ClauseType.PRONOUN)}>
                        <h3>Relative Pronouns</h3>
                        <p>Who, which, that?</p>
                    </button>
                </div>
                <style>{`
                  .practice-menu {
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
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    border: none;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    text-align: center;
                    color: white;
                  }
                  .cat-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-pop);
                  }
                  .cat-btn h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
                  .cat-btn p { font-size: 1rem; opacity: 0.9; }
                  
                  .cat-btn.main { background: var(--color-main-clause); }
                  .cat-btn.sub { background: var(--color-sub-clause); }
                  .cat-btn.rel { background: var(--color-rel-clause); }
                  .cat-btn.conj { background: var(--color-conjunction); }
                  .cat-btn.pro { background: var(--color-pronoun); }
                `}</style>
            </div>
        );
    }

    // --- Finished View ---
    if (isFinished) {
        return (
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Practice Complete! 🎉</h2>
                <p>You've practiced all {selectedCategory} clause questions.</p>
                <button className="btn-primary" onClick={resetSelection}>Choose Another Topic</button>
            </div>
        );
    }

    // --- Game View ---
    return (
        <div className="practice-container">
            <div className="header-info">
                <button className="back-link" onClick={resetSelection}>← Back to Menu</button>
                <span className="question-counter">Question {currentIndex + 1} / {filteredQuestions.length}</span>
                <span className="streak-badge">🔥 Streak</span>
            </div>

            <div className="instruction-card">
                <h2>{currentQuestion.instructions}</h2>
                <div className="mascot-helper">🦉</div>
            </div>

            <SentenceHighlighter
                chunks={currentQuestion.chunks}
                onSelect={handleSelectChunk}
                selectedChunkId={selectedChunk?.id || null}
                isAnswered={isAnswered}
            />

            {feedback && (
                <FeedbackOverlay
                    isCorrect={feedback.isCorrect}
                    message={feedback.message}
                    onNext={handleNext}
                    onTryAgain={!feedback.isCorrect ? handleTryAgain : undefined}
                />
            )}

            <style>{`
        .practice-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--color-text-muted);
          font-weight: bold;
        }

        .back-link {
            background: none;
            border: none;
            color: var(--color-primary);
            font-weight: bold;
            cursor: pointer;
            text-decoration: underline;
        }

        .instruction-card {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .instruction-card h2 {
          color: var(--color-primary);
          font-size: 2rem;
        }

        .mascot-helper {
          font-size: 3rem;
        }
      `}</style>
        </div>
    );
};
