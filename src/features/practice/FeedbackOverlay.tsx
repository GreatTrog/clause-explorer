import React, { useEffect } from 'react';

interface FeedbackOverlayProps {
  isCorrect: boolean;
  message: string;
  onNext: () => void;
  onTryAgain?: () => void;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  isCorrect,
  message,
  onNext,
  onTryAgain
}) => {
  useEffect(() => {
    // Optional: Auto-focus or sound effect here
  }, []);

  return (
    <div className={`feedback-overlay ${isCorrect ? 'is-correct' : 'is-incorrect'}`}>
      <div className="feedback-card">
        <div className="feedback-icon">
          {isCorrect ? '🎉' : '🤔'}
        </div>
        <h2>{isCorrect ? 'Correct!' : 'Not Quite...'}</h2>
        <p>{message}</p>

        <div className="actions">
          {!isCorrect && onTryAgain && (
            <button className="btn-primary" onClick={onTryAgain} autoFocus>
              Try Again
            </button>
          )}
          <button className={isCorrect ? "btn-primary" : "btn-secondary"} onClick={onNext}>
            {isCorrect ? 'Next Question' : 'Skip'}
          </button>
        </div>
      </div>

      <style>{`
        .feedback-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(2px);
          animation: fadeIn 0.2s;
        }

        .feedback-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          max-width: 400px;
          width: 90%;
          box-shadow: var(--shadow-pop);
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feedback-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .is-correct .feedback-icon {
          animation: bounce 1s infinite;
        }

        h2 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .is-incorrect h2 {
          color: var(--color-secondary);
        }

        .actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .btn-secondary {
          background: #E5E7EB;
          color: var(--color-text-main);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: bold;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 
          from { opacity: 0; transform: scale(0.8); } 
          to { opacity: 1; transform: scale(1); } 
        }
      `}</style>
    </div>
  );
};
