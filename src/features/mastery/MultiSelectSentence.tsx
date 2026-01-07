import React, { useState } from 'react';

interface Chunk {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface MultiSelectSentenceProps {
    chunks: Chunk[];
    onComplete: (isCorrect: boolean) => void;
    isAnswered: boolean;
}

export const MultiSelectSentence: React.FC<MultiSelectSentenceProps> = ({
    chunks,
    onComplete,
    isAnswered
}) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggleId = (id: string) => {
        if (isAnswered) return;
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        const correctIds = chunks.filter(c => c.isCorrect).map(c => c.id);

        // Correct if exactly all correct chunks are selected and no incorrect ones
        const isMatch = selectedIds.length === correctIds.length &&
            selectedIds.every(id => correctIds.includes(id));

        onComplete(isMatch);
    };

    return (
        <div className="multi-select-container">
            <div className="sentence-box">
                {chunks.map((chunk) => {
                    const isSelected = selectedIds.includes(chunk.id);
                    const isCorrect = chunk.isCorrect;

                    let statusClass = '';
                    if (isAnswered) {
                        if (isSelected && isCorrect) statusClass = 'correct';
                        if (isSelected && !isCorrect) statusClass = 'incorrect';
                        if (!isSelected && isCorrect) statusClass = 'missed';
                    }

                    return (
                        <label key={chunk.id} className={`word-label ${statusClass} ${isSelected ? 'selected' : ''}`}>
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleId(chunk.id)}
                                disabled={isAnswered}
                            />
                            <span className="word-text">{chunk.text}</span>
                        </label>
                    );
                })}
            </div>

            {!isAnswered && (
                <button
                    className="btn-primary submit-btn"
                    onClick={handleSubmit}
                    disabled={selectedIds.length === 0}
                >
                    Submit Answer
                </button>
            )}

            <style>{`
                .multi-select-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    width: 100%;
                }
                .sentence-box {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    font-size: 1.5rem;
                    line-height: 2.5;
                    text-align: center;
                    width: 100%;
                }
                .word-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    transition: all 0.2s;
                    margin: 0 0.1rem;
                    border: 2px solid transparent;
                    user-select: none;
                }
                .word-label:hover:not(.disabled) {
                    background: var(--color-background);
                }
                .word-label input {
                    width: 1.2rem;
                    height: 1.2rem;
                    cursor: pointer;
                }
                .word-label.selected {
                    background: #f0f9ff;
                    border-color: #bae6fd;
                }
                .word-text {
                    white-space: pre-wrap;
                }
                
                /* Selection state feedback */
                .word-label.correct {
                    background: #f0fdf4 !important;
                    border-color: #86efac !important;
                    color: #166534;
                }
                .word-label.incorrect {
                    background: #fef2f2 !important;
                    border-color: #fecaca !important;
                    color: #991b1b;
                    animation: shake 0.5s;
                }
                .word-label.missed {
                    border: 2px dashed #fbbf24;
                    background: #fffbeb;
                }

                .submit-btn {
                    padding: 1rem 3rem;
                    font-size: 1.2rem;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            `}</style>
        </div>
    );
};
