import React, { useState, useEffect, useRef } from 'react';
import { MarkdownText } from '../../components/MarkdownText';

interface ContractionEditorProps {
    sentence: string;
    correctAnswer: string | string[];
    onComplete: (isCorrect: boolean) => void;
    isAnswered: boolean;
}

export const ContractionEditor: React.FC<ContractionEditorProps> = ({ sentence, correctAnswer, onComplete, isAnswered }) => {
    const [userInput, setUserInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isAnswered) {
            setUserInput('');
            setIsSubmitted(false);
            setIsCorrect(null);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [sentence, isAnswered]);

    const handleSubmit = () => {
        const cleanUser = userInput.trim();
        const correctAnswers = Array.isArray(correctAnswer)
            ? correctAnswer.map(a => a.trim())
            : [correctAnswer.trim()];

        const isCorrect = correctAnswers.includes(cleanUser);

        setIsCorrect(isCorrect);
        setIsSubmitted(true);
        onComplete(isCorrect);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && userInput.trim() && !isSubmitted) {
            handleSubmit();
        }
    };

    return (
        <div className="contraction-editor">
            <div className="editor-card">
                <div className="sentence-display">
                    <MarkdownText text={sentence} />
                </div>

                <div className="input-group">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isSubmitted}
                        placeholder="Type the contraction..."
                        className={`contraction-input ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
                    />

                    {!isSubmitted && (
                        <button
                            className="btn-primary"
                            onClick={handleSubmit}
                            disabled={!userInput.trim()}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>

            <style>{`
                .contraction-editor {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 600px;
                    margin: 1rem auto;
                }
                .editor-card {
                    background: #f8fafc;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    border: 2px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: center;
                }
                .sentence-display {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    text-align: center;
                    color: var(--color-text-main);
                }
                .input-group {
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    max-width: 400px;
                }
                .contraction-input {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    font-size: 1.25rem;
                    border-radius: var(--radius-md);
                    border: 2px solid #e2e8f0;
                    outline: none;
                    transition: all 0.2s;
                    text-align: center;
                }
                .contraction-input:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                .contraction-input.correct {
                    border-color: #10b981;
                    background: #f0fdf4;
                }
                .contraction-input.incorrect {
                    border-color: #ef4444;
                    background: #fef2f2;
                }
            `}</style>
        </div>
    );
};
