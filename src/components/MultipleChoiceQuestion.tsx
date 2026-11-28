import React, { useId } from 'react';

export interface MultipleChoiceOption {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface MultipleChoiceQuestionProps {
    question: string;
    supportingText?: string;
    options: MultipleChoiceOption[];
    selectedOptionId: string | null;
    isAnswered: boolean;
    onSelect: (optionId: string) => void;
}

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
    question,
    supportingText,
    options,
    selectedOptionId,
    isAnswered,
    onSelect
}) => {
    const questionId = useId();
    const supportingTextId = useId();

    return (
        <div className="mc-question-container">
            <header className="question-header">
                <h2 className="question-text" id={questionId}>{question}</h2>
                {supportingText && <p className="question-context" id={supportingTextId}>{supportingText}</p>}
            </header>

            <div
                className="options-list"
                role="group"
                aria-labelledby={questionId}
                aria-describedby={supportingText ? supportingTextId : undefined}
            >
                {options.map(option => {
                    let className = "option-btn";
                    if (isAnswered) {
                        if (option.id === selectedOptionId) {
                            className += option.isCorrect ? " correct" : " incorrect";
                        } else if (option.isCorrect) {
                            className += " correct-hint"; // Show correct answer if wrong one picked
                        } else {
                            className += " disabled";
                        }
                    } else if (selectedOptionId === option.id) {
                        className += " selected";
                    }

                    return (
                        <button
                            key={option.id}
                            className={className}
                            onClick={() => !isAnswered && onSelect(option.id)}
                            disabled={isAnswered}
                        >
                            <span className="checkbox">
                                {isAnswered && option.isCorrect && "✅"}
                                {isAnswered && option.id === selectedOptionId && !option.isCorrect && "❌"}
                            </span>
                            {option.text}
                        </button>
                    );
                })}
            </div>

            <style>{`
                .mc-question-container {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .question-header {
                    margin-bottom: 2rem;
                    text-align: center;
                }

                .question-text {
                    color: var(--color-primary);
                }

                .question-context {
                    color: var(--color-text-main);
                    font-size: 1.125rem;
                    margin-top: 0.5rem;
                }

                .options-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .option-btn {
                    padding: 1.5rem;
                    border: 2px solid #E5E7EB;
                    border-radius: var(--radius-md);
                    background: white;
                    text-align: left;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    width: 100%;
                }

                .option-btn:hover:not(:disabled) {
                    border-color: var(--color-primary);
                    background: var(--color-background);
                    transform: translateX(5px);
                }

                .option-btn.correct {
                    background: #D1FAE5;
                    border-color: #10B981;
                    color: #065F46;
                }

                .option-btn.incorrect {
                    background: #FEE2E2;
                    border-color: #EF4444;
                    color: #991B1B;
                }

                .option-btn.correct-hint {
                    border-color: #10B981;
                    border-style: dashed;
                    opacity: 0.7;
                }
                
                .option-btn.disabled {
                    opacity: 0.5;
                    cursor: default;
                }

                .checkbox {
                    width: 24px;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};
