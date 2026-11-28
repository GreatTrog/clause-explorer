import { useId, useRef, useState } from 'react';
import type { WrittenResponseQuestion } from '../../data/masteryQuestions';

interface WrittenResponseProps {
    question: WrittenResponseQuestion;
    onNext: () => void;
}

export const WrittenResponse = ({ question, onNext }: WrittenResponseProps) => {
    const [answer, setAnswer] = useState('');
    const [isReviewing, setIsReviewing] = useState(false);
    const answerId = useId();
    const answerInput = useRef<HTMLTextAreaElement>(null);

    return (
        <form
            className="written-response"
            onSubmit={event => {
                event.preventDefault();
                if (answer.trim()) setIsReviewing(true);
            }}
        >
            <label htmlFor={answerId}>Your sentence</label>
            <textarea
                id={answerId}
                ref={answerInput}
                value={answer}
                onChange={event => setAnswer(event.target.value)}
                readOnly={isReviewing}
                rows={3}
            />

            <div aria-live="polite">
                {isReviewing && (
                    <div className="response-review">
                        <h3>Example answer</h3>
                        <p>{question.modelAnswer}</p>
                        <h3>Check your answer</h3>
                        <ul>
                            {question.checklist.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            {isReviewing ? (
                <div className="response-actions">
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => {
                            setIsReviewing(false);
                            answerInput.current?.focus();
                        }}
                    >
                        Edit My Answer
                    </button>
                    <button type="button" className="btn-primary" onClick={onNext}>
                        Next Question
                    </button>
                </div>
            ) : (
                <button type="submit" className="btn-primary" disabled={!answer.trim()}>
                    Compare with an Example
                </button>
            )}

            <style>{`
                .written-response {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 1.5rem;
                    background: white;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                    display: grid;
                    gap: 1rem;
                }
                .written-response label {
                    font-weight: 600;
                }
                .written-response textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 2px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font: inherit;
                    resize: vertical;
                }
                .response-review {
                    background: var(--color-background);
                    border-radius: var(--radius-md);
                    padding: 1rem;
                }
                .response-review h3 {
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                }
                .response-review p {
                    margin-bottom: 1rem;
                }
                .response-review ul {
                    padding-left: 1.25rem;
                }
                .response-actions {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 0.75rem;
                }
            `}</style>
        </form>
    );
};
