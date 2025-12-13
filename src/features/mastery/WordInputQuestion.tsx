import React, { useState, useRef, useEffect } from 'react';
import type { TextInputQuestion } from '../../data/masteryQuestions';

interface WordInputQuestionProps {
    question: TextInputQuestion;
    onComplete: (isSuccess: boolean) => void;
}

export const WordInputQuestion: React.FC<WordInputQuestionProps> = ({ question, onComplete }) => {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'INCORRECT'>('IDLE');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Reset state when question changes
        setInput('');
        setStatus('IDLE');
        if (inputRef.current) inputRef.current.focus();
    }, [question.id]);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (status !== 'IDLE') return;

        const cleanInput = input.trim().toLowerCase();
        const cleanAnswer = question.correctAnswer.trim().toLowerCase();

        if (cleanInput === cleanAnswer) {
            setStatus('CORRECT');
            setTimeout(() => onComplete(true), 1500);
        } else {
            setStatus('INCORRECT');
            setTimeout(() => onComplete(false), 2000); // Give time to see the error state
        }
    };

    return (
        <div className="word-input-game">
            <div className="sentence-container">
                <span className="sentence-part">{question.sentenceBefore}</span>
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={`word-input ${status.toLowerCase()}`}
                        placeholder={question.promptLabel || "type here..."}
                        disabled={status !== 'IDLE'}
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    />
                </form>
                <span className="sentence-part">{question.sentenceAfter}</span>
            </div>

            {status === 'INCORRECT' && (
                <div className="feedback-message">
                    Not quite! <br />
                    You typed: <strong>{input}</strong> <br />
                    Correct: <strong>{question.correctAnswer}</strong>
                </div>
            )}

            {status === 'CORRECT' && (
                <div className="feedback-message correct">
                    Spot on! ✨
                </div>
            )}

            {status === 'IDLE' && (
                <button
                    className="btn-primary"
                    onClick={() => handleSubmit()}
                    disabled={input.length === 0}
                >
                    Check Spelling
                </button>
            )}

            <style>{`
                .word-input-game {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    padding: 2rem;
                    background: white;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                }

                .sentence-container {
                    font-size: 1.5rem;
                    line-height: 2.5rem;
                    text-align: center;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: baseline;
                    gap: 0.5rem;
                }

                .input-form {
                    display: inline-block;
                }

                .word-input {
                    font-size: 1.5rem;
                    padding: 0.25rem 0.5rem;
                    border: 2px solid #D1D5DB;
                    border-radius: var(--radius-sm);
                    width: 150px;
                    text-align: center;
                    font-family: inherit;
                    color: var(--color-text-main);
                    outline: none;
                    transition: all 0.2s;
                    background: #F9FAFB;
                }

                .word-input:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
                }

                .word-input.correct {
                    border-color: #10B981;
                    background-color: #ECFDF5;
                    color: #065F46;
                }

                .word-input.incorrect {
                    border-color: #EF4444;
                    background-color: #FEF2F2;
                    color: #991B1B;
                }
                
                .feedback-message {
                    font-size: 1.1rem;
                    color: #EF4444;
                    background: #FEF2F2;
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border: 1px solid #FECACA;
                    text-align: center;
                    animation: fadeIn 0.3s ease;
                }
                
                .feedback-message.correct {
                    color: #065F46;
                    background: #ECFDF5;
                    border-color: #A7F3D0;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Placeholder styling */
                .word-input::placeholder {
                    color: #9CA3AF;
                    font-size: 1rem;
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};
