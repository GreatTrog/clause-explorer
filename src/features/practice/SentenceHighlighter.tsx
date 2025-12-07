import React from 'react';
import type { Chunk } from '../../data/practiceQuestions';

interface SentenceHighlighterProps {
  chunks: Chunk[];
  onSelect: (chunk: Chunk) => void;
  selectedChunkId: string | null;
  isAnswered: boolean;
}

export const SentenceHighlighter: React.FC<SentenceHighlighterProps> = ({
  chunks,
  onSelect,
  selectedChunkId,
  isAnswered
}) => {
  return (
    <div className="sentence-container">
      {chunks.map((chunk) => {
        const isSelected = chunk.id === selectedChunkId;
        const statusClass = isAnswered && isSelected
          ? (chunk.isCorrect ? 'correct' : 'incorrect')
          : '';

        return (
          <button
            key={chunk.id}
            className={`chunk-btn ${isSelected ? 'selected' : ''} ${statusClass}`}
            onClick={() => !isAnswered && onSelect(chunk)}
            disabled={isAnswered}
          >
            {chunk.text}
          </button>
        );
      })}

      <style>{`
        .sentence-container {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          font-size: 1.5rem;
          line-height: 2;
          text-align: center;
        }

        .chunk-btn {
          background: transparent;
          border: none;
          border-radius: 4px;
          padding: 4px 0; /* Vertical padding only for touch target */
          margin: 0;
          font-size: inherit;
          font-family: inherit;
          color: var(--color-text-main);
          transition: background-color 0.2s, color 0.2s;
          cursor: pointer;
          display: inline; /* strictly inline to flow with text */
          box-decoration-break: clone; /* Ensures multiline chunks look good */
          -webkit-box-decoration-break: clone;
          white-space: pre-wrap; /* Respects spaces in the text string */
        }

        .chunk-btn:hover:not(:disabled) {
          background-color: var(--color-background);
          box-shadow: 0 0 0 2px var(--color-background); /* Fake padding on hover */
        }

        .chunk-btn.selected {
          background-color: var(--color-primary-light);
          color: white;
          box-shadow: 0 0 0 4px var(--color-primary-light); /* Highlight extends slightly */
          z-index: 1;
          position: relative;
        }

        .chunk-btn.correct {
          background-color: var(--color-accent);
          color: white;
          box-shadow: 0 0 0 4px var(--color-accent);
          z-index: 1;
          position: relative;
        }

        .chunk-btn.incorrect {
          background-color: var(--color-danger);
          color: white;
          box-shadow: 0 0 0 4px var(--color-danger);
          animation: shake 0.5s;
          z-index: 1;
          position: relative;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div >
  );
};
