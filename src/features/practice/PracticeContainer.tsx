import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../../data/practiceQuestions';
import { TENSES_PRACTICE_QUESTIONS } from '../../data/tensesPractice';
import { VOICE_PRACTICE_QUESTIONS } from '../../data/voicePractice';
import { WORD_CLASSES_PRACTICE_QUESTIONS } from '../../data/wordClassesPractice';
import type { Chunk } from '../../data/practiceQuestions';
import { SentenceHighlighter } from './SentenceHighlighter';
import { FeedbackOverlay } from './FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';
import { ClauseType, GrammarModule, TenseType, VoiceType, WordClassType } from '../../types';
import { ModuleSelector } from '../../components/ModuleSelector';
import { MultipleChoiceQuestion } from '../../components/MultipleChoiceQuestion';

export const PracticeContainer: React.FC = () => {
    // State for Module Selection
    const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);

    // State for sub-menu selection
    const [selectedCategory, setSelectedCategory] = useState<ClauseType | null>(null); // For Clauses
    const [selectedTense, setSelectedTense] = useState<TenseType | null>(null);       // For Tenses
    const [selectedVoice, setSelectedVoice] = useState<VoiceType | null>(null);       // For Voice
    const [selectedWordClass, setSelectedWordClass] = useState<WordClassType | null>(null); // For Word Classes

    // Game state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChunk, setSelectedChunk] = useState<Chunk | null>(null); // For Highlight Qs
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null); // For MC Qs
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

    const { updatePracticeScore, updateTenseScore, updateVoiceScore, updateWordClassScore, incrementStreak, resetStreak } = useGameState();

    // Reset everything when leaving module
    const handleBackToModules = () => {
        setSelectedModule(null);
        setSelectedCategory(null);
        setSelectedTense(null);
        setSelectedVoice(null); // Reset voice
        setSelectedWordClass(null);
        setCurrentIndex(0);
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
    }

    const resetSelection = () => {
        setSelectedCategory(null);
        setSelectedTense(null);
        setSelectedVoice(null); // Reset voice
        setSelectedWordClass(null);
        setCurrentIndex(0);
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
    };

    if (!selectedModule) {
        return (
            <div className="practice-container">
                <ModuleSelector onSelect={setSelectedModule} />
            </div>
        )
    }


    // --- CSS Styles ---
    const PRACTICE_STYLES = `
        .practice-menu {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }
        .cat-btn {
            padding: 1rem;
            min-height: 120px;
            border-radius: var(--radius-lg);
            border: 1px solid #e5e7eb;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            text-align: center;
            color: var(--color-text-main);
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .cat-btn:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-pop);
            border-color: transparent;
        }
        .cat-btn h3 { font-size: 1.5rem; margin: 0; }
        .cat-btn p { font-size: 1rem; opacity: 0.9; margin: 0; color: #6b7280; }
        .cat-btn .icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
        }
        
        /* Clause specific text colors */
        .cat-btn.main h3 { color: var(--color-main-clause); }
        .cat-btn.sub h3 { color: var(--color-sub-clause); }
        .cat-btn.rel h3 { color: var(--color-rel-clause); }
        .cat-btn.conj h3 { color: var(--color-conjunction); }
        .cat-btn.pro h3 { color: var(--color-pronoun); }

        /* Tense Styles (Specifics only) */
        .cat-btn.tense { 
            gap: 0.2rem;
        }

        /* Text Colors for Tenses */
        .cat-btn.tense.simple-past h3 { color: #3B82F6; }
        .cat-btn.tense.simple-present h3 { color: #10B981; }
        .cat-btn.tense.simple-future h3 { color: #F59E0B; }
        .cat-btn.tense.progressive h3 { color: #8B5CF6; }
        .cat-btn.tense.perfect h3 { color: #EC4899; }
        .cat-btn.tense.modal h3 { color: #EF4444; }

        /* Word Classes Styles */
        .cat-btn.word-class h3 { color: #8B5CF6; }
        
        .practice-container {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .header-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--color-text-muted);
            font-weight: bold;
        }

        .back-link {
            background: none;
            border: none;
            color: var(--color-primary);
            font-weight: bold;
            cursor: pointer;
            text-decoration: underline;
        }

        .instruction-card {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .instruction-card h2 {
            color: var(--color-primary);
            font-size: 1.8rem;
        }

        .mascot-helper {
            font-size: 3rem;
        }
    `;

    // ...



    // --- Data Source Logic ---
    let questions: any[] = [];
    if (selectedModule === GrammarModule.CLAUSES && selectedCategory) {
        questions = PRACTICE_QUESTIONS.filter(q => q.type === selectedCategory);
    } else if (selectedModule === GrammarModule.TENSES && selectedTense) {
        questions = TENSES_PRACTICE_QUESTIONS.filter(q => q.type === selectedTense);
    } else if (selectedModule === GrammarModule.VOICE && selectedVoice) {
        questions = VOICE_PRACTICE_QUESTIONS.filter(q => q.type === selectedVoice);
    } else if (selectedModule === GrammarModule.WORD_CLASSES && selectedWordClass) {
        questions = WORD_CLASSES_PRACTICE_QUESTIONS.filter(q => q.type === selectedWordClass);
    }

    const currentQuestion = questions[currentIndex];

    // If we have selected filters but no questions found
    if (questions.length === 0 && (
        (selectedModule === GrammarModule.CLAUSES && selectedCategory) ||
        (selectedModule === GrammarModule.TENSES && selectedTense) ||
        (selectedModule === GrammarModule.VOICE && selectedVoice) ||
        (selectedModule === GrammarModule.WORD_CLASSES && selectedWordClass)
    )) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h2>No Questions Found 🤷</h2>
                <p>This category doesn't have any practice questions yet.</p>
                <button className="btn-primary" onClick={resetSelection}>Choose Another Topic</button>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    const isFinished = currentIndex >= questions.length;



    // CLAUSES MENU
    if (selectedModule === GrammarModule.CLAUSES && !selectedCategory) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose a Clause to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn main" onClick={() => setSelectedCategory(ClauseType.MAIN)}>
                        <div className="icon">👑</div>
                        <h3>Main Clauses</h3>
                        <p>The boss sentences!</p>
                    </button>
                    <button className="cat-btn sub" onClick={() => setSelectedCategory(ClauseType.SUBORDINATE)}>
                        <div className="icon">🤝</div>
                        <h3>Subordinate Clauses</h3>
                        <p>The helper sentences!</p>
                    </button>
                    <button className="cat-btn rel" onClick={() => setSelectedCategory(ClauseType.RELATIVE)}>
                        <div className="icon">🔍</div>
                        <h3>Relative Clauses</h3>
                        <p>The descriptive sentences!</p>
                    </button>
                    <button className="cat-btn conj" onClick={() => setSelectedCategory(ClauseType.CONJUNCTION)}>
                        <div className="icon">🔗</div>
                        <h3>Conjunctions</h3>
                        <p>Spot the joining words!</p>
                    </button>
                    <button className="cat-btn pro" onClick={() => setSelectedCategory(ClauseType.PRONOUN)}>
                        <div className="icon">☝️</div>
                        <h3>Relative Pronouns</h3>
                        <p>Who, which, that?</p>
                    </button>
                </div>
                {/* Re-use styles defined at bottom */}
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // TENSES MENU
    if (selectedModule === GrammarModule.TENSES && !selectedTense) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose a Tense to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn tense simple-past" onClick={() => setSelectedTense(TenseType.SIMPLE_PAST)}>
                        <div className="icon">⏮️</div>
                        <h3>Simple Past</h3>
                        <p>Finished actions</p>
                    </button>
                    <button className="cat-btn tense simple-present" onClick={() => setSelectedTense(TenseType.SIMPLE_PRESENT)}>
                        <div className="icon">👇</div>
                        <h3>Simple Present</h3>
                        <p>Facts & Habits</p>
                    </button>
                    <button className="cat-btn tense simple-future" onClick={() => setSelectedTense(TenseType.SIMPLE_FUTURE)}>
                        <div className="icon">🚀</div>
                        <h3>Simple Future</h3>
                        <p>What comes next</p>
                    </button>
                    <button className="cat-btn tense progressive" onClick={() => setSelectedTense(TenseType.PAST_PROGRESSIVE)}>
                        <div className="icon">🏃</div>
                        <h3>Past Progressive</h3>
                        <p>Note: Also covers Present Progressive</p>
                    </button>
                    <button className="cat-btn tense progressive" onClick={() => setSelectedTense(TenseType.PRESENT_PROGRESSIVE)}>
                        <div className="icon">🏄</div>
                        <h3>Present Progressive</h3>
                        <p>Happening now</p>
                    </button>
                    <button className="cat-btn tense perfect" onClick={() => setSelectedTense(TenseType.PAST_PERFECT)}>
                        <div className="icon">🕰️</div>
                        <h3>Past Perfect</h3>
                        <p>Before the past</p>
                    </button>
                    <button className="cat-btn tense perfect" onClick={() => setSelectedTense(TenseType.PRESENT_PERFECT)}>
                        <div className="icon">✅</div>
                        <h3>Present Perfect</h3>
                        <p>Past affecting now</p>
                    </button>
                    <button className="cat-btn tense modal" onClick={() => setSelectedTense(TenseType.MODAL)}>
                        <div className="icon">🦸</div>
                        <h3>Modals</h3>
                        <p>Can, Must, Should</p>
                    </button>
                </div>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // VOICE MENU
    if (selectedModule === GrammarModule.VOICE && !selectedVoice) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose Voice to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn main" onClick={() => setSelectedVoice(VoiceType.ACTIVE)}>
                        <div className="icon">📢</div>
                        <h3>Active Voice</h3>
                        <p>Subject does the action!</p>
                    </button>
                    <button className="cat-btn sub" onClick={() => setSelectedVoice(VoiceType.PASSIVE)}>
                        <div className="icon">🕵️</div>
                        <h3>Passive Voice</h3>
                        <p>Action happens to subject!</p>
                    </button>
                </div>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // WORD CLASSES MENU (New)
    if (selectedModule === GrammarModule.WORD_CLASSES && !selectedWordClass) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose a Word Class to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.NOUN)}>
                        <div className="icon">📦</div>
                        <h3>Nouns</h3>
                        <p>Naming words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.VERB)}>
                        <div className="icon">🏃</div>
                        <h3>Verbs</h3>
                        <p>Action words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADJECTIVE)}>
                        <div className="icon">🎨</div>
                        <h3>Adjectives</h3>
                        <p>Describing nouns</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADVERB)}>
                        <div className="icon">⚡</div>
                        <h3>Adverbs</h3>
                        <p>Describing verbs</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PRONOUN)}>
                        <div className="icon">👤</div>
                        <h3>Pronouns</h3>
                        <p>He, She, It</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PREPOSITION)}>
                        <div className="icon">📍</div>
                        <h3>Prepositions</h3>
                        <p>Position words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.DETERMINER)}>
                        <div className="icon">👈</div>
                        <h3>Determiners</h3>
                        <p>The, A, That</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.INTERJECTION)}>
                        <div className="icon">❗</div>
                        <h3>Interjections</h3>
                        <p>Wow! Ouch!</p>
                    </button>
                </div>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }


    // --- Game Logic functions ---

    const handleSelectChunk = (chunk: Chunk) => {
        setSelectedChunk(chunk);
        setIsAnswered(true);

        const isCorrect = chunk.isCorrect;

        if (isCorrect) {
            incrementStreak();
            if (selectedCategory) updatePracticeScore(selectedCategory, 10);
            if (selectedTense) updateTenseScore(selectedTense, 10);
            if (selectedVoice) updateVoiceScore(selectedVoice, 10);
            if (selectedWordClass) updateWordClassScore(selectedWordClass, 10);

            setFeedback({ isCorrect: true, message: "Correct! Well done." });
        } else {
            resetStreak();
            setFeedback({
                isCorrect: false,
                message: currentQuestion.hint || "Try again!"
            });
        }
    };

    const handleSelectOption = (optionId: string) => {
        if (!('options' in currentQuestion)) return; // Type guard

        setSelectedOptionId(optionId);
        setIsAnswered(true);

        const option = currentQuestion.options.find((o: any) => o.id === optionId);
        const isCorrect = option?.isCorrect || false;

        if (isCorrect) {
            incrementStreak();
            if (selectedTense) updateTenseScore(selectedTense, 10);
            if (selectedVoice) updateVoiceScore(selectedVoice, 10);
            if (selectedWordClass) updateWordClassScore(selectedWordClass, 10);

            setFeedback({ isCorrect: true, message: "Correct!" });
        } else {
            resetStreak();
            setFeedback({
                isCorrect: false,
                message: currentQuestion.hint || "Not quite right. Try again!"
            });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(prev => prev + 1); // Trigger finished state
        }
    };

    const handleTryAgain = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
    };


    // --- Finished View ---
    if (isFinished) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h2>Practice Complete! 🎉</h2>
                <p>You've completed this set.</p>
                <button className="btn-primary" onClick={resetSelection}>Choose Another Topic</button>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // --- Game View ---
    const isHighlight = currentQuestion && ('chunks' in currentQuestion);
    const isMC = currentQuestion && ('options' in currentQuestion);

    // Safety check
    if (!currentQuestion) return null;

    return (
        <div className="practice-container">
            <div className="header-info">
                <button className="back-link" onClick={resetSelection}>← Menu</button>
                <span className="question-counter">Question {currentIndex + 1} / {questions.length}</span>
                <span className="streak-badge">🔥 Streak</span>
            </div>

            {/* Instruction Logic depends on type */}
            <div className="instruction-card">
                <h2>
                    {currentQuestion.instructions || currentQuestion.text || currentQuestion.question}
                </h2>
                <div className="mascot-helper">🦉</div>
            </div>

            {isHighlight && (
                <SentenceHighlighter
                    chunks={currentQuestion.chunks}
                    onSelect={handleSelectChunk}
                    selectedChunkId={selectedChunk?.id || null}
                    isAnswered={isAnswered}
                />
            )}

            {isMC && (
                <MultipleChoiceQuestion
                    question=""  // Using instruction card above for the question/title 
                    options={currentQuestion.options!}
                    selectedOptionId={selectedOptionId}
                    isAnswered={isAnswered}
                    onSelect={handleSelectOption}
                />
            )}

            {feedback && (
                <FeedbackOverlay
                    isCorrect={feedback.isCorrect}
                    message={feedback.message}
                    onNext={handleNext}
                    onTryAgain={!feedback.isCorrect ? handleTryAgain : undefined}
                />
            )}

            <style>{PRACTICE_STYLES}</style>
        </div>
    );
};
