import React from 'react';
import { GrammarModule } from '../types';

interface ModuleSelectorProps {
    onSelect: (module: GrammarModule) => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({ onSelect }) => {
    return (
        <div className="module-selector">
            <h2>Select a Topic</h2>
            <div className="modules-grid">
                <button
                    className="module-card clauses"
                    onClick={() => onSelect(GrammarModule.CLAUSES)}
                >
                    <div className="icon">🧩</div>
                    <h3>Clauses & Conjunctions</h3>
                    <p>Master sentence structures!</p>
                </button>

                <button
                    className="module-card tenses"
                    onClick={() => onSelect(GrammarModule.TENSES)}
                >
                    <div className="icon">⏳</div>
                    <h3>Tenses</h3>
                    <p>Past, Present, and Future!</p>
                </button>

                <button
                    className="module-card voice"
                    onClick={() => onSelect(GrammarModule.VOICE)}
                >
                    <div className="icon">📢</div>
                    <h3>Active & Passive</h3>
                    <p>Who is doing the action?</p>
                </button>

                <button
                    className="module-card words"
                    onClick={() => onSelect(GrammarModule.WORD_CLASSES)}
                >
                    <div className="icon">📝</div>
                    <h3>Word Classes</h3>
                    <p>Nouns, Verbs, Adjectives...</p>
                </button>

                <button
                    className="module-card punctuation"
                    onClick={() => onSelect(GrammarModule.PUNCTUATION)}
                >
                    <div className="icon">💬</div>
                    <h3>Punctuation</h3>
                    <p>Speech marks, commas & more!</p>
                </button>
            </div>

            <style>{`
                .module-selector {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .modules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    padding: 1rem;
                }

                .module-card {
                    background: white;
                    border: none;
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-md);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }

                .module-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-pop);
                }

                .module-card .icon {
                    font-size: 3rem;
                }

                .module-card h3 {
                    font-size: 1.5rem;
                    color: var(--color-primary);
                    margin: 0;
                }

                .module-card p {
                    color: var(--color-text-muted);
                    margin: 0;
                }

                /* Module specific highlights */
                .module-card.clauses:hover { border-bottom: 4px solid var(--color-primary); }
                .module-card.tenses:hover { border-bottom: 4px solid var(--color-secondary); }
                .module-card.voice:hover { border-bottom: 4px solid #EC4899; }
                .module-card.words:hover { border-bottom: 4px solid #8B5CF6; }
                .module-card.punctuation:hover { border-bottom: 4px solid #F59E0B; }
            `}</style>
        </div>
    );
};
