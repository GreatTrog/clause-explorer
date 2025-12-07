import React, { useState } from 'react';
import { MASTERY_QUESTIONS, MasteryQuestionType } from '../../data/masteryQuestions';
import { DragDropZone } from './DragDropZone';
import { SentenceCompleter } from './SentenceCompleter';
import { TableClassifier } from './TableClassifier';
import { SentenceHighlighter } from '../practice/SentenceHighlighter';
import { FeedbackOverlay } from '../practice/FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';

export const MasteryContainer: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
    const { updateMasteryScore, incrementStreak, resetStreak } = useGameState();

    const questions = MASTERY_QUESTIONS;
    const currentQuestion = questions[currentIndex];
    const isFinished = currentIndex >= questions.length;

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
            alert("You are a Clause Monkey Master!"); // Temporary end state
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleTryAgain = () => {
        // For mastery, maybe we enforce getting it right? 
        // Or we just move on? Let's just reset feedback to allow retry if logic permits,
        // but for DragDrop it's complex state. Simpler to just show "Next" on failure for now?
        // Actually, let's just create a "reset" key on the component to force re-render.
        setFeedback(null);
    };

    if (isFinished) {
        return (
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Mastery Complete! 🏆</h2>
                <button className="btn-primary" onClick={() => window.location.reload()}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="mastery-container">
            <div className="header-info">
                <span className="question-counter">Challenge {currentIndex + 1}</span>
            </div>

            <div className="instruction-card">
                <div className="mascot-badge">🏆</div>
                <h2>{currentQuestion.instructions}</h2>
            </div>

            <div className="game-area" key={currentQuestion.id + (feedback ? '-done' : '')}>
                {currentQuestion.type === MasteryQuestionType.SELECT && (
                    <SentenceHighlighter
                        chunks={currentQuestion.chunks}
                        selectedChunkId={null} // Controlled internally by highlighter mostly, strictly we should hoist state if we want strict control
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
