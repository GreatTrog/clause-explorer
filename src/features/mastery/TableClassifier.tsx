import React, { useState } from 'react';
import type { TableQuestion } from '../../data/masteryQuestions';
import { ClauseType, getClauseDisplayName } from '../../types';

interface TableClassifierProps {
    question: TableQuestion;
    onComplete: (isSuccess: boolean) => void;
}

export const TableClassifier: React.FC<TableClassifierProps> = ({ question, onComplete }) => {
    // Store user selections: { [rowId]: selectedColumnType }
    const [selections, setSelections] = useState<Record<string, ClauseType>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleCheck = (rowId: string, type: ClauseType) => {
        if (submitted) return;
        setSelections(prev => ({
            ...prev,
            [rowId]: type
        }));
    };

    const handleSubmit = () => {
        // Check if all rows answered
        const allAnswered = question.rows.every(row => selections[row.id]);
        if (!allAnswered) {
            alert("Please tick one box for every row!");
            return;
        }

        setSubmitted(true);

        // Check correctness
        const allCorrect = question.rows.every(row => selections[row.id] === row.correctType);

        setTimeout(() => {
            onComplete(allCorrect);
        }, 1500); // Short delay to see results
    };

    return (
        <div className="table-classifier">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Clause</th>
                            {question.columns.map(col => (
                                <th key={col}>{getClauseDisplayName(col)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {question.rows.map(row => (
                            <tr key={row.id} className={submitted ? (selections[row.id] === row.correctType ? 'correct-row' : 'incorrect-row') : ''}>
                                <td className="clause-text">{row.text}</td>
                                {question.columns.map(col => (
                                    <td key={col} className="checkbox-cell">
                                        <button
                                            className={`check-box ${selections[row.id] === col ? 'checked' : ''}`}
                                            onClick={() => handleCheck(row.id, col)}
                                            aria-label={`Select ${col} for ${row.text}`}
                                        >
                                            {selections[row.id] === col && '✓'}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="btn-primary submit-btn" onClick={handleSubmit} disabled={submitted}>
                {submitted ? 'Checking...' : 'Check Answers'}
            </button>

            <style>{`
        .table-classifier {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .table-wrapper {
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          width: 100%;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          background: var(--color-background);
          padding: 1rem;
          font-weight: bold;
          text-align: center;
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-size: 0.9rem;
        }
        
        th:first-child {
            text-align: left;
            padding-left: 2rem;
        }

        td {
          padding: 1rem;
          border-bottom: 1px solid #E5E7EB;
        }

        .clause-text {
          font-size: 1.1rem;
          font-weight: 500;
          padding-left: 2rem;
        }

        .checkbox-cell {
          text-align: center;
        }

        .check-box {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          border: 2px solid #D1D5DB;
          background: white;
          color: white; /* checkmark color */
          font-weight: bold;
          font-size: 1.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .check-box.checked {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .correct-row .check-box.checked {
           background: var(--color-accent);
           border-color: var(--color-accent);
        }

        .incorrect-row .check-box.checked {
           background: var(--color-danger);
           border-color: var(--color-danger);
        }

        .submit-btn {
           min-width: 200px;
        }
      `}</style>
        </div>
    );
};
