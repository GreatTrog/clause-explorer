import React, { useState, useEffect } from 'react';
import { PRACTICE_QUESTIONS } from '../../data/practiceQuestions';
import { TENSES_PRACTICE_QUESTIONS } from '../../data/tensesPractice';
import { VOICE_PRACTICE_QUESTIONS } from '../../data/voicePractice';
import { WORD_CLASSES_PRACTICE_QUESTIONS } from '../../data/wordClassesPractice';
import { PUNCTUATION_PRACTICE_QUESTIONS } from '../../data/punctuationPractice';
import { APOSTROPHE_PRACTICE_QUESTIONS } from '../../data/apostrophePractice';
import { CLAUSE_BOUNDARY_PRACTICE_QUESTIONS } from '../../data/clauseBoundaryPractice';
import type { Chunk } from '../../data/practiceQuestions';
import { SentenceHighlighter } from './SentenceHighlighter';
import { FeedbackOverlay } from './FeedbackOverlay';
import { useGameState } from '../../context/GameStateContext';
import { ClauseType, GrammarModule, TenseType, VoiceType, WordClassType } from '../../types';
import { ModuleSelector } from '../../components/ModuleSelector';
import { MultipleChoiceQuestion } from '../../components/MultipleChoiceQuestion';
import { PunctuationEditor } from './PunctuationEditor';
import { ContractionEditor } from './ContractionEditor';

// Simple Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const PracticeContainer: React.FC = () => {
    // 1. State Hooks
    const [selectedModule, setSelectedModule] = useState<GrammarModule | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<ClauseType | null>(null);
    const [selectedTense, setSelectedTense] = useState<TenseType | null>(null);
    const [selectedVoice, setSelectedVoice] = useState<VoiceType | null>(null);
    const [selectedWordClass, setSelectedWordClass] = useState<WordClassType | null>(null);
    const [selectedPunctuation, setSelectedPunctuation] = useState<string | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChunk, setSelectedChunk] = useState<Chunk | null>(null);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
    const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

    const {
        updatePracticeScore,
        updateTenseScore,
        updateVoiceScore,
        updateWordClassScore,
        updatePunctuationScore,
        incrementStreak,
        resetStreak
    } = useGameState();

    // 2. Derived Questions (Source Data)
    let questions: any[] = [];
    if (selectedModule === GrammarModule.CLAUSES && selectedCategory) {
        questions = PRACTICE_QUESTIONS.filter(q => q.type === selectedCategory);
    } else if (selectedModule === GrammarModule.TENSES && selectedTense) {
        questions = TENSES_PRACTICE_QUESTIONS.filter(q => q.type === selectedTense);
    } else if (selectedModule === GrammarModule.VOICE && selectedVoice) {
        questions = VOICE_PRACTICE_QUESTIONS.filter(q => q.type === selectedVoice);
    } else if (selectedModule === GrammarModule.WORD_CLASSES && selectedWordClass) {
        questions = WORD_CLASSES_PRACTICE_QUESTIONS.filter(q => q.type === selectedWordClass);
    } else if (selectedModule === GrammarModule.PUNCTUATION && selectedPunctuation) {
        const allPunctuationQuestions = [
            ...PUNCTUATION_PRACTICE_QUESTIONS,
            ...APOSTROPHE_PRACTICE_QUESTIONS,
            ...CLAUSE_BOUNDARY_PRACTICE_QUESTIONS
        ];
        questions = allPunctuationQuestions.filter(q => q.type === selectedPunctuation);
    }

    // 3. Effect Hooks
    useEffect(() => {
        if (questions.length > 0 && shuffledQuestions.length === 0) {
            const shuffled = shuffleArray(questions).map(q => {
                if (q.options) {
                    return { ...q, options: shuffleArray(q.options) };
                }
                return q;
            });
            setShuffledQuestions(shuffled);
        }
    }, [questions, shuffledQuestions.length]);

    // 4. Derived State for Rendering
    const currentQuestion = shuffledQuestions[currentIndex];
    const isFinished = currentIndex >= shuffledQuestions.length && shuffledQuestions.length > 0;
    const isHighlight = currentQuestion && ('chunks' in currentQuestion);
    const isMC = currentQuestion && ('options' in currentQuestion);
    const isEdit = currentQuestion && ('correctSentence' in currentQuestion);
    const isContraction = currentQuestion && ('sentence' in currentQuestion && 'correctAnswer' in currentQuestion);

    // 5. Handlers
    const handleBackToModules = () => {
        setSelectedModule(null);
        setSelectedCategory(null);
        setSelectedTense(null);
        setSelectedVoice(null);
        setSelectedWordClass(null);
        setSelectedPunctuation(null);
        setCurrentIndex(0);
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
        setShuffledQuestions([]);
    };

    const resetSelection = () => {
        setSelectedCategory(null);
        setSelectedTense(null);
        setSelectedVoice(null);
        setSelectedWordClass(null);
        setSelectedPunctuation(null);
        setCurrentIndex(0);
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
        setShuffledQuestions([]);
    };

    const handleSelectChunk = (chunk: Chunk) => {
        setSelectedChunk(chunk);
        setIsAnswered(true);
        if (chunk.isCorrect) {
            incrementStreak();
            if (selectedCategory) updatePracticeScore(selectedCategory, 10);
            if (selectedTense) updateTenseScore(selectedTense, 10);
            if (selectedVoice) updateVoiceScore(selectedVoice, 10);
            if (selectedWordClass) updateWordClassScore(selectedWordClass, 10);
            if (selectedPunctuation) updatePunctuationScore(selectedPunctuation, 10);
            setFeedback({ isCorrect: true, message: "Correct! Well done." });
        } else {
            resetStreak();
            setFeedback({ isCorrect: false, message: currentQuestion.hint || "Try again!" });
        }
    };

    const handleSelectOption = (optionId: string) => {
        if (!isMC) return;
        setSelectedOptionId(optionId);
        setIsAnswered(true);
        const option = currentQuestion.options.find((o: any) => o.id === optionId);
        if (option?.isCorrect) {
            incrementStreak();
            if (selectedTense) updateTenseScore(selectedTense, 10);
            if (selectedVoice) updateVoiceScore(selectedVoice, 10);
            if (selectedWordClass) updateWordClassScore(selectedWordClass, 10);
            if (selectedPunctuation) updatePunctuationScore(selectedPunctuation, 10);
            setFeedback({ isCorrect: true, message: "Correct!" });
        } else {
            resetStreak();
            setFeedback({ isCorrect: false, message: currentQuestion.hint || "Not quite right. Try again!" });
        }
    };

    const handleEditComplete = (isCorrect: boolean) => {
        setIsAnswered(true);
        if (isCorrect) {
            incrementStreak();
            if (selectedPunctuation) updatePunctuationScore(selectedPunctuation, 10);
            setFeedback({ isCorrect: true, message: "Perfect punctuation! ✨" });
        } else {
            resetStreak();
            const displayCorrect = Array.isArray(currentQuestion.correctSentence)
                ? currentQuestion.correctSentence[0]
                : currentQuestion.correctSentence;
            setFeedback({
                isCorrect: false,
                message: `Not quite right. The correct version is:\n\n${displayCorrect}`
            });
        }
    };

    const handleContractionComplete = (isCorrect: boolean) => {
        setIsAnswered(true);
        if (isCorrect) {
            incrementStreak();
            if (selectedPunctuation) updatePunctuationScore(selectedPunctuation, 10);
            setFeedback({ isCorrect: true, message: "Great contraction! ✍️" });
        } else {
            resetStreak();
            setFeedback({
                isCorrect: false,
                message: `Not quite right. The correct contraction is: ${currentQuestion.correctAnswer}`
            });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
        setCurrentIndex(prev => prev + 1);
    };

    const handleTryAgain = () => {
        setFeedback(null);
        setSelectedChunk(null);
        setSelectedOptionId(null);
        setIsAnswered(false);
    };

    // 6. Styles
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
        .cat-btn.main h3 { color: var(--color-main-clause); }
        .cat-btn.sub h3 { color: var(--color-sub-clause); }
        .cat-btn.rel h3 { color: var(--color-rel-clause); }
        .cat-btn.conj h3 { color: var(--color-conjunction); }
        .cat-btn.pro h3 { color: var(--color-pronoun); }
        .cat-btn.int h3 { color: #8B5CF6; }
        .cat-btn.tense { gap: 0.2rem; }
        .cat-btn.tense.simple-past h3 { color: #3B82F6; }
        .cat-btn.tense.simple-present h3 { color: #10B981; }
        .cat-btn.tense.simple-future h3 { color: #F59E0B; }
        .cat-btn.tense.progressive h3 { color: #8B5CF6; }
        .cat-btn.tense.perfect h3 { color: #EC4899; }
        .cat-btn.tense.modal h3 { color: #EF4444; }
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
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: var(--radius-lg);
            border: 1px solid rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
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
        .container { text-align: center; margin-top: 4rem; }
    `;

    // 7. Early Returns
    if (!selectedModule) {
        return (
            <div className="practice-container">
                <ModuleSelector onSelect={setSelectedModule} />
            </div>
        );
    }

    if (questions.length === 0 && (selectedCategory || selectedTense || selectedVoice || selectedWordClass || selectedPunctuation)) {
        return (
            <div className="container">
                <h2>No Questions Found 🤷</h2>
                <p>This topic doesn't have any practice questions yet.</p>
                <button className="btn-primary" onClick={resetSelection}>Choose Another Topic</button>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="container">
                <h2>Practice Complete! 🎉</h2>
                <p>You've completed this set.</p>
                <button className="btn-primary" onClick={resetSelection}>Choose Another Topic</button>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // Module Menus
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
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

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

    if (selectedModule === GrammarModule.WORD_CLASSES && !selectedWordClass) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose a Word Class to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.NOUN)}>
                        <div className="icon">📦</div><h3>Nouns</h3><p>Naming words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.VERB)}>
                        <div className="icon">🏃</div><h3>Verbs</h3><p>Action words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADJECTIVE)}>
                        <div className="icon">🎨</div><h3>Adjectives</h3><p>Describing nouns</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.ADVERB)}>
                        <div className="icon">⚡</div><h3>Adverbs</h3><p>Describing verbs</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PRONOUN)}>
                        <div className="icon">👤</div><h3>Pronouns</h3><p>He, She, It</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.PREPOSITION)}>
                        <div className="icon">📍</div><h3>Prepositions</h3><p>Position words</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.DETERMINER)}>
                        <div className="icon">👈</div><h3>Determiners</h3><p>The, A, That</p>
                    </button>
                    <button className="cat-btn word-class" onClick={() => setSelectedWordClass(WordClassType.INTERJECTION)}>
                        <div className="icon">❗</div><h3>Interjections</h3><p>Wow! Ouch!</p>
                    </button>
                </div>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    if (selectedModule === GrammarModule.PUNCTUATION && !selectedPunctuation) {
        return (
            <div className="practice-menu">
                <button className="back-link" onClick={handleBackToModules} style={{ alignSelf: 'flex-start' }}>← modules</button>
                <h2>Choose Punctuation to Practice</h2>
                <div className="category-grid">
                    <button className="cat-btn main" onClick={() => setSelectedPunctuation(ClauseType.DIRECT_SPEECH)}>
                        <div className="icon">💬</div><h3>Direct Speech</h3><p>How to use speech marks!</p>
                    </button>
                    <button className="cat-btn main" onClick={() => setSelectedPunctuation(ClauseType.APOSTROPHE_OMISSION)}>
                        <div className="icon">✂️</div><h3>Apostrophes: Omission</h3><p>Don't, can't, it's...</p>
                    </button>
                    <button className="cat-btn main" onClick={() => setSelectedPunctuation(ClauseType.APOSTROPHE_POSSESSION)}>
                        <div className="icon">🏠</div><h3>Apostrophes: Possession</h3><p>Sam's, boys', children's...</p>
                    </button>
                    <button className="cat-btn main" onClick={() => setSelectedPunctuation(ClauseType.CLAUSE_BOUNDARIES)}>
                        <div className="icon">⚖️</div><h3>Clause Boundaries</h3><p>Semi-colons, colons & dashes</p>
                    </button>
                </div>
                <style>{PRACTICE_STYLES}</style>
            </div>
        );
    }

    // Final safety check
    if (!currentQuestion) return null;

    // 8. Main Render (Game Area)
    return (
        <div className="practice-container">
            <div className="header-info">
                <button className="back-link" onClick={resetSelection}>← Menu</button>
                <span className="question-counter">Question {currentIndex + 1} / {shuffledQuestions.length}</span>
                <span className="streak-badge">🔥 Streak</span>
            </div>

            <div className="instruction-card">
                <h2>{currentQuestion.instructions || (isMC ? "Choose the correct option" : (currentQuestion.text || currentQuestion.question || "Find the answer"))}</h2>
                <div className="mascot-helper">🦉</div>
            </div>

            {isHighlight && (
                <SentenceHighlighter
                    key={currentIndex}
                    chunks={currentQuestion.chunks}
                    onSelect={handleSelectChunk}
                    selectedChunkId={selectedChunk?.id || null}
                    isAnswered={isAnswered}
                />
            )}

            {isMC && (
                <MultipleChoiceQuestion
                    key={currentIndex}
                    question={currentQuestion.question || currentQuestion.text || ""}
                    options={currentQuestion.options!}
                    selectedOptionId={selectedOptionId}
                    isAnswered={isAnswered}
                    onSelect={handleSelectOption}
                />
            )}

            {isEdit && (
                <PunctuationEditor
                    key={currentIndex}
                    originalText={currentQuestion.text!}
                    correctSentence={currentQuestion.correctSentence!}
                    onComplete={handleEditComplete}
                    isAnswered={isAnswered}
                />
            )}

            {isContraction && (
                <ContractionEditor
                    key={currentIndex}
                    sentence={currentQuestion.sentence!}
                    correctAnswer={currentQuestion.correctAnswer!}
                    onComplete={handleContractionComplete}
                    isAnswered={isAnswered}
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
