import React from 'react';
import type { LearnPage } from '../../data/curriculum';
import { getClauseDisplayName } from '../../types';
import { MarkdownText } from '../../components/MarkdownText';

interface LearnCardProps {
  page: LearnPage;
}

export const LearnCard: React.FC<LearnCardProps> = ({ page }) => {
  // Helper to highlight the specific text within the sentence
  const renderExample = () => {
    const parts = page.exampleSentence.split(page.highlightedText);
    if (parts.length < 2) return <p className="example-text">{page.exampleSentence}</p>;

    return (
      <p className="example-text">
        {parts[0]}
        <span className="highlighted">{page.highlightedText}</span>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="learn-card">
      <div className="card-header">
        <span className={`badge ${page.type.toLowerCase()}`}>{getClauseDisplayName(page.type)}</span>
        <h2>{page.title}</h2>
      </div>

      <div className="content-grid">
        <div className="definition-section">
          <p className="definition">
            <MarkdownText text={page.definition} />
          </p>
        </div>

        <div className="mascot-section">
          <div className="mascot-avatar">🦉</div>
          <div className="speech-bubble">
            <MarkdownText text={page.mascotDialogue} />
          </div>
        </div>

        <div className="example-box">
          <h3>Example:</h3>
          {renderExample()}
        </div>
      </div>

      <style>{`
        .learn-card {
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 2.5rem;
          max-width: 800px;
          margin: 0 auto;
          animation: slideIn 0.3s ease-out;
        }

        .card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .badge {
          background: var(--color-primary-light);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .badge.main { background: var(--color-main-clause); }
        .badge.subordinate { background: var(--color-sub-clause); }
        .badge.relative { background: var(--color-rel-clause); }
        .badge.conjunction { background: var(--color-conjunction); }
        .badge.pronoun { background: var(--color-pronoun); }

        /* Tenses Badges */
        .badge.simple_past, .badge.simple_present, .badge.simple_future { background: #3B82F6; } /* Blue like Main */
        .badge.past_progressive, .badge.present_progressive { background: #10B981; } /* Green */
        .badge.past_perfect, .badge.present_perfect { background: #8B5CF6; } /* Purple */
        .badge.modal { background: #EC4899; } /* Pink */


        .card-header h2 {
          font-size: 2.5rem;
          color: var(--color-primary);
          margin: 0.5rem 0 0;
        }

        .definition {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text-main);
          margin-bottom: 2rem;
          text-align: center;
        }

        .mascot-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 2rem 0;
          background: var(--color-background);
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }

        .mascot-avatar {
          font-size: 4rem;
        }

        .speech-bubble {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-md);
          border-bottom-left-radius: 0;
          box-shadow: var(--shadow-sm);
          position: relative;
          flex: 1;
          font-style: italic;
          color: var(--color-text-muted);
        }

        .example-box {
          margin-top: 2rem;
          padding: 1.5rem;
          border: 2px dashed var(--color-primary-light);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .example-text {
          font-size: 1.5rem;
          margin: 1rem 0 0;
        }

        .highlighted {
          background-color: var(--color-highlight);
          padding: 0 0.25rem;
          border-radius: 4px;
          font-weight: bold;
          color: black;
          box-shadow: 0 2px 0 rgba(0,0,0,0.1);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
