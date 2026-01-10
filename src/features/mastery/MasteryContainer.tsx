import React, { useState } from 'react';
import { MASTERY_QUESTIONS, MasteryQuestionType } from '../../data/masteryQuestions';
import type { MasteryQuestion } from '../../data/masteryQuestions';
import { TENSES_MASTERY_QUESTIONS } from '../../data/tensesMastery';
import { VOICE_MASTERY_QUESTIONS } from '../../data/voiceMastery';
import { WORD_CLASSES_MASTERY_QUESTIONS } from '../../data/wordClassesMastery';
import { PUNCTUATION_MASTERY_QUESTIONS } from '../../data/punctuationMastery';
import { APOSTROPHE_OMISSION_MASTERY_QUESTIONS, APOSTROPHE_POSSESSION_MASTERY_QUESTIONS } from '../../data/apostropheMastery';
import { CLAUSE_BOUNDARY_MASTERY_QUESTIONS } from '../../data/clauseBoundaryMastery';
import { DragDropZone } from './DragDropZone';
import { SentenceCompleter } from './SentenceCompleter';
import { TableClassifier } from './TableClassifier';
import { WordInputQuestion } from './WordInputQuestion';
import { MultiSelectSentence } from './MultiSelectSentence';
import { PunctuationEditor } from '../practice/PunctuationEditor';
import { ContractionEditor } from '../practice/ContractionEditor';
import { SentenceHighlighter } from '../practice/SentenceHighlighter';
import { FeedbackOverlay } from '../practice/FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';
import { ModuleSelector } from '../../components/ModuleSelector';
import { GrammarModule, ClauseType } from '../../types';

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
    const [selectedPunctuation, setSelectedPunctuation] = useState<string | null>(null);
    // Store shuffled questions in state so order persists during render
    const [questions, setQuestions] = useState<MasteryQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
    const [attempts, setAttempts] = useState(0); // Used to force re-mount on 'Try Again'
    const { updateMasteryScore, incrementStreak, resetStreak } = useGameState();

    // Initialize questions on module selection
    React.useEffect(() => {
        if (selectedModule === GrammarModule.CLAUSES) {
            setQuestions(shuffleArray(MASTERY_QUESTIONS));
            setCurrentIndex(0);
        } else if (selectedModule === GrammarModule.TENSES) {
            setQuestions(shuffleArray(TENSES_MASTERY_QUESTIONS));
            setCurrentIndex(0);
        } else if (selectedModule === GrammarModule.VOICE) {
            setQuestions(shuffleArray(VOICE_MASTERY_QUESTIONS));
            setCurrentIndex(0);
        } else if (selectedModule === GrammarModule.WORD_CLASSES) {
            setQuestions(shuffleArray(WORD_CLASSES_MASTERY_QUESTIONS));
            setCurrentIndex(0);
        } else if (selectedModule === GrammarModule.PUNCTUATION && selectedPunctuation) {
            let qSet: MasteryQuestion[] = [];
            if (selectedPunctuation === ClauseType.DIRECT_SPEECH) {
                qSet = PUNCTUATION_MASTERY_QUESTIONS;
            } else if (selectedPunctuation === ClauseType.APOSTROPHE_OMISSION) {
                qSet = APOSTROPHE_OMISSION_MASTERY_QUESTIONS;
            } else if (selectedPunctuation === ClauseType.APOSTROPHE_POSSESSION) {
                qSet = APOSTROPHE_POSSESSION_MASTERY_QUESTIONS;
            } else if (selectedPunctuation === ClauseType.CLAUSE_BOUNDARIES) {
                qSet = CLAUSE_BOUNDARY_MASTERY_QUESTIONS;
            }
            setQuestions(shuffleArray(qSet));
            setCurrentIndex(0);
        }
    }, [selectedModule, selectedPunctuation]);

    if (!selectedModule) {
        return (
            <div className="mastery-container">
                <ModuleSelector onSelect={setSelectedModule} />
            </div>
        );
    }

    if (selectedModule === GrammarModule.PUNCTUATION && !selectedPunctuation) {
        return (
            <div className="mastery-container">
                <div className="header-nav" style={{ marginBottom: '1rem', textAlign: 'left' }}>
                    <button onClick={() => setSelectedModule(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 'bold' }}>← modules</button>
                </div>
                <div className="instruction-card" style={{ textAlign: 'center' }}>
                    <div className="mascot-badge">🏆</div>
                    <h2 style={{ color: 'var(--color-accent)' }}>Choose Punctuation Mastery</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <button
                        className="cat-btn"
                        onClick={() => setSelectedPunctuation(ClauseType.DIRECT_SPEECH)}
                        style={{
                            padding: '1rem',
                            minHeight: '120px',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem' }}>💬</div>
                        <h3 style={{ margin: 0, color: 'var(--color-accent)' }}>Direct Speech</h3>
                        <p style={{ margin: 0, color: '#6b7280' }}>Master speech marks!</p>
                    </button>

                    <button
                        className="cat-btn"
                        onClick={() => setSelectedPunctuation(ClauseType.APOSTROPHE_OMISSION)}
                        style={{
                            padding: '1rem',
                            minHeight: '120px',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem' }}>✂️</div>
                        <h3 style={{ margin: 0, color: 'var(--color-accent)' }}>Apostrophes: Omission</h3>
                        <p style={{ margin: 0, color: '#6b7280' }}>Master contractions!</p>
                    </button>

                    <button
                        className="cat-btn"
                        onClick={() => setSelectedPunctuation(ClauseType.APOSTROPHE_POSSESSION)}
                        style={{
                            padding: '1rem',
                            minHeight: '120px',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem' }}>🏠</div>
                        <h3 style={{ margin: 0, color: 'var(--color-accent)' }}>Apostrophes: Possession</h3>
                        <p style={{ margin: 0, color: '#6b7280' }}>Master ownership!</p>
                    </button>

                    <button
                        className="cat-btn"
                        onClick={() => setSelectedPunctuation(ClauseType.CLAUSE_BOUNDARIES)}
                        style={{
                            padding: '1rem',
                            minHeight: '120px',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem' }}>⚖️</div>
                        <h3 style={{ margin: 0, color: 'var(--color-accent)' }}>Clause Boundaries</h3>
                        <p style={{ margin: 0, color: '#6b7280' }}>Master semi-colons, colons & dashes!</p>
                    </button>
                </div>
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
            let message = "Oops! Keep practicing.";
            if (currentQuestion && currentQuestion.type === MasteryQuestionType.TEXT_INPUT) {
                message = `Not quite right. The correct version is:\n\n${currentQuestion.correctAnswer}`;
            } else if (currentQuestion && currentQuestion.type === MasteryQuestionType.PUNCTUATION_EDIT) {
                const displayCorrect = Array.isArray(currentQuestion.correctSentence)
                    ? currentQuestion.correctSentence[0]
                    : currentQuestion.correctSentence;
                message = `Not quite right. The correct version is:\n\n${displayCorrect}`;
            }
            setFeedback({ isCorrect: false, message });
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
        // Reset feedback to try again
        setFeedback(null);
        setAttempts(prev => prev + 1); // Incrementing forces child re-mount via key
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
                <button className="back-link" onClick={() => selectedModule === GrammarModule.PUNCTUATION ? setSelectedPunctuation(null) : setSelectedModule(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', textDecoration: 'underline' }}>← {selectedPunctuation ? 'types' : 'modules'}</button>
                <span className="question-counter">Challenge {currentIndex + 1} / {questions.length}</span>
            </div>

            <div className="instruction-card">
                <div className="mascot-badge">🏆</div>
                <h2>{currentQuestion.instructions}</h2>
                {currentQuestion.question && (
                    <div className="question-prompt" style={{
                        marginTop: '1.5rem',
                        padding: '1.5rem',
                        background: 'white',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        color: 'var(--color-primary)',
                        border: '1px solid #e5e7eb',
                        maxWidth: '600px',
                        marginInline: 'auto'
                    }}>
                        {currentQuestion.question}
                    </div>
                )}
            </div>

            <div className="game-area" key={`${currentQuestion.id}-${attempts}`}>
                {currentQuestion.type === MasteryQuestionType.SELECT && (
                    <SentenceHighlighter
                        chunks={currentQuestion.chunks}
                        selectedChunkId={null}
                        isAnswered={!!feedback}
                        onSelect={(chunk) => handleQuestionComplete(chunk.isCorrect)}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.MULTI_SELECT && (
                    <MultiSelectSentence
                        chunks={currentQuestion.chunks}
                        onComplete={handleQuestionComplete}
                        isAnswered={!!feedback}
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
                        isAnswered={!!feedback}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.PUNCTUATION_EDIT && (
                    <PunctuationEditor
                        key={currentQuestion.id}
                        originalText={currentQuestion.originalText}
                        correctSentence={currentQuestion.correctSentence}
                        onComplete={handleQuestionComplete}
                        isAnswered={!!feedback}
                    />
                )}

                {currentQuestion.type === MasteryQuestionType.CONTRACTION_EDIT && (
                    <ContractionEditor
                        key={currentQuestion.id}
                        sentence={currentQuestion.sentence}
                        correctAnswer={currentQuestion.correctAnswer}
                        onComplete={handleQuestionComplete}
                        isAnswered={!!feedback}
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
