import React, { useState } from 'react';
import { MASTERY_QUESTIONS, MasteryQuestionType } from '../../data/masteryQuestions';
import type { MasteryQuestion } from '../../data/masteryQuestions';
import { TENSES_MASTERY_QUESTIONS } from '../../data/tensesMastery';
import { DragDropZone } from './DragDropZone';
import { SentenceCompleter } from './SentenceCompleter';
import { TableClassifier } from './TableClassifier';
import { WordInputQuestion } from './WordInputQuestion';
import { SentenceHighlighter } from '../practice/SentenceHighlighter';
import { FeedbackOverlay } from '../practice/FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';
import { ModuleSelector } from '../../components/ModuleSelector';
import { GrammarModule } from '../../types';

// Simple Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const MasteryContainer: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);
    // Store shuffled questions in state so order persists during render
    const [questions, setQuestions] = useState<MasteryQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
    const { updateMasteryScore, incrementStreak, resetStreak } = useGameState();

    // Initialize questions on module selection
    React.useEffect(() => {
        if (selectedModule === GrammarModule.CLAUSES) {
            setQuestions(shuffleArray(MASTERY_QUESTIONS));
            setCurrentIndex(0);
        } else if (selectedModule === GrammarModule.TENSES) {
            setQuestions(shuffleArray(TENSES_MASTERY_QUESTIONS));
            setCurrentIndex(0);
        }
    }, [selectedModule]);

    if (!selectedModule) {
        return (
            <div className="mastery-container">
                <ModuleSelector onSelect={setSelectedModule} />
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    // Check if finished based on the potentially empty questions array to avoid errors
    const isFinished = questions.length > 0 && currentIndex >= questions.length;

    // Safety check if questions haven't loaded yet
    if (questions.length === 0) {
        return <div className="container">Loading...</div>;
    }

    const handleQuestionComplete = (isSuccess: boolean) => {
        if (isSuccess) {
            incrementStreak();
            updateMasteryScore(20); // Higher points for mastery
            setFeedback({ isCorrect: true, message: "Masterful!" });
        } else {
            resetStreak();
            setFeedback({ isCorrect: false, message: "Oops! Keep practicing." });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of the game logic
            // For now just increment to trigger isFinished
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleTryAgain = () => {
        // Reset feedback to try again (if applicable)
        setFeedback(null);
    };

    if (isFinished) {
        return (
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Mastery Complete! 🏆</h2>
                <div style={{ fontSize: '3rem', margin: '2rem' }}>🎉</div>
                <p>You've mastered this set!</p>
                <button className="btn-primary" onClick={() => setSelectedModule(null)}>Back to Modules</button>
            </div>
        );
    }

    return (
        <div className="mastery-container">
            <div className="header-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="back-link" onClick={() => setSelectedModule(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', textDecoration: 'underline' }}>← modules</button>
                <span className="question-counter">Challenge {currentIndex + 1} / {questions.length}</span>
            </div>

            <div className="instruction-card">
                <div className="mascot-badge">🏆</div>
                <h2>{currentQuestion.instructions}</h2>
            </div>

            <div className="game-area" key={currentQuestion.id + (feedback ? '-done' : '')}>
                {currentQuestion.type === MasteryQuestionType.SELECT && (
                    <SentenceHighlighter
                        chunks={currentQuestion.chunks}
                        selectedChunkId={null}
                        isAnswered={!!feedback}
                        onSelect={(chunk) => handleQuestionComplete(chunk.isCorrect)}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.DRAG_DROP && (
                    <DragDropZone
                        question={currentQuestion}
                        onComplete={handleQuestionComplete}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.COMPLETE && (
                    <SentenceCompleter
                        question={currentQuestion}
                        onComplete={handleQuestionComplete}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.TABLE && (
                    <TableClassifier
                        question={currentQuestion}
                        onComplete={handleQuestionComplete}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.TEXT_INPUT && (
                    <WordInputQuestion
                        question={currentQuestion}
                        onComplete={handleQuestionComplete}
                    />
                )}
            </div>

            {feedback && (
                <FeedbackOverlay
                    isCorrect={feedback.isCorrect}
                    message={feedback.message}
                    onNext={handleNext}
                    onTryAgain={!feedback.isCorrect ? handleTryAgain : undefined}
                />
            )}

            <style>{`
        .mastery-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .instruction-card {
           text-align: center;
        }
        .instruction-card h2 {
           color: var(--color-accent);
        }
        .mascot-badge {
            font-size: 3rem;
        }
      `}</style>
        </div>
    );
};
