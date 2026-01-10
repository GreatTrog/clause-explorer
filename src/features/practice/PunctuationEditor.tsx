import React, { useState, useEffect, useRef } from 'react';

interface PunctuationEditorProps {
    originalText: string;
    correctSentence: string | string[];
    onComplete: (isCorrect: boolean) => void;
    isAnswered: boolean;
}

export const PunctuationEditor: React.FC<PunctuationEditorProps> = ({ originalText, correctSentence, onComplete, isAnswered }) => {
    const [userInput, setUserInput] = useState(originalText);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!isAnswered) {
            setUserInput(originalText);
            setIsSubmitted(false);
            setIsCorrect(null);
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    }, [originalText, isAnswered]);

    const handleSubmit = () => {
        const normalizePunctuation = (text: string) => {
            return text
                .replace(/[—–]/g, '-') // Normalize dashes to hyphens
                .replace(/\s*([;:\-])\s*/g, '$1') // Remove spaces around ; : -
                .trim();
        };

        const cleanUser = normalizePunctuation(userInput);
        const correctAnswers = Array.isArray(correctSentence) ? correctSentence : [correctSentence];

        const isCorrect = correctAnswers.some(ans => cleanUser === normalizePunctuation(ans));

        setIsCorrect(isCorrect);
        setIsSubmitted(true);
        onComplete(isCorrect);
    };

    // Safety: Check if words were changed
    const wordsChanged = () => {
        const normalize = (t: string) => t.toLowerCase().replace(/[^\w]/g, '');

        // Filter out segments that contain no word characters (like standalone dashes/punctuation)
        const userWords = userInput.split(/\s+/).filter(w => normalize(w).length > 0);
        const originalWords = originalText.split(/\s+/).filter(w => normalize(w).length > 0);

        if (userWords.length !== originalWords.length) return true;

        for (let i = 0; i < userWords.length; i++) {
            const u = normalize(userWords[i]);
            const o = normalize(originalWords[i]);

            if (u !== o) {
                // Allow adding an 's' if it follows an apostrophe
                if (u === o + 's' && userWords[i].includes("'")) {
                    continue;
                }
                return true;
            }
        }
        return false;
    };

    return (
        <div className="punctuation-editor">
            <div className="editor-card">
                <p className="instruction-mini">Edit the sentence below to use correct punctuation:</p>
                <textarea
                    ref={textareaRef}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isSubmitted}
                    className={`editor-input ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
                    spellCheck={false}
                />

                {wordsChanged() && (
                    <p className="warning-text">⚠️ It looks like you changed some words! Only change the punctuation.</p>
                )}

                {!isSubmitted && (
                    <button
                        className="btn-primary"
                        onClick={handleSubmit}
                        disabled={userInput === originalText}
                    >
                        Check Punctuation
                    </button>
                )}
            </div>

            {/* feedback-diff removed as it is now shown in the central FeedbackOverlay */}

            <style>{`
                .punctuation-editor {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 600px;
                    margin: 1rem auto;
                }
                .editor-card {
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    border: 2px dashed #cbd5e1;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .instruction-mini {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    margin: 0;
                }
                .editor-input {
                    width: 100%;
                    min-height: 80px;
                    font-size: 1.25rem;
                    line-height: 1.6;
                    padding: 0.75rem;
                    border-radius: var(--radius-md);
                    border: 2px solid #e2e8f0;
                    font-family: inherit;
                    resize: vertical;
                    transition: border-color 0.2s;
                }
                .editor-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                .editor-input.correct {
                    border-color: #10b981;
                    background: #f0fdf4;
                }
                .editor-input.incorrect {
                    border-color: #ef4444;
                    background: #fef2f2;
                }
                .warning-text {
                    color: #b45309;
                    font-size: 0.85rem;
                    margin: 0;
                }
                .feedback-diff {
                    animation: fadeIn 0.3s ease;
                    text-align: center;
                }
                .correct-display {
                    background: #f0fdf4;
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    border: 1px solid #86efac;
                    color: #166534;
                    font-size: 1.25rem;
                    margin-top: 0.5rem;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};
