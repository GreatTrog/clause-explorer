import React, { useState } from 'react';
import type { CompleteQuestion } from '../../data/masteryQuestions';

interface SentenceCompleterProps {
    question: CompleteQuestion;
    onComplete: (isSuccess: boolean) => void;
}

export const SentenceCompleter: React.FC<SentenceCompleterProps> = ({ question, onComplete }) => {
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    // Shuffle options once on mount (since component is re-keyed for each question)
    const [shuffledOptions] = useState(() =>
        [...question.options].sort(() => Math.random() - 0.5)
    );

    const handleSelect = (optionId: string) => {
        setSelectedOptionId(optionId);

        const option = question.options.find(o => o.id === optionId);
        if (option) {
            // Ideally show animation then trigger complete
            setTimeout(() => {
                onComplete(option.isCorrect);
            }, 500);
        }
    };

    return (
        <div className="completer-game">
            <div className="sentence-display">
                <span>{question.sentenceBefore}</span>
                <span className="blank-spot">
                    {selectedOptionId
                        ? question.options.find(o => o.id === selectedOptionId)?.text
                        : '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                </span>
                <span>{question.sentenceAfter}</span>
            </div>

            <div className="options-grid">
                {shuffledOptions.map(option => (
                    <button
                        key={option.id}
                        className={`option-btn ${selectedOptionId === option.id ? 'selected' : ''}`}
                        onClick={() => !selectedOptionId && handleSelect(option.id)}
                        disabled={!!selectedOptionId}
                    >
                        {option.text}
                    </button>
                ))}
            </div>

            <style>{`
        .completer-game {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            text-align: center;
        }

        .sentence-display {
            font-size: 1.5rem;
            background: white;
            padding: 2rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            line-height: 1.6;
        }

        .blank-spot {
            color: var(--color-primary);
            font-weight: bold;
            border-bottom: 2px solid var(--color-primary);
            padding: 0 0.5rem;
        }

        .options-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
        }

        .option-btn {
            background: white;
            border: 2px solid #E5E7EB;
            padding: 1rem;
            border-radius: var(--radius-md);
            font-size: 1.1rem;
            transition: all 0.2s;
        }

        .option-btn:hover:not(:disabled) {
            border-color: var(--color-primary);
            transform: translateY(-2px);
        }

        .option-btn.selected {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};
