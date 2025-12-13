import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClauseType, TenseType, VoiceType } from '../types';
import type { UserProgress } from '../types';

interface GameStateContextType {
    progress: UserProgress;
    updatePracticeScore: (type: ClauseType, score: number) => void;
    updateTenseScore: (type: TenseType, score: number) => void;
    updateVoiceScore: (type: VoiceType, score: number) => void;
    updateMasteryScore: (score: number) => void;
    incrementStreak: () => void;
    resetStreak: () => void;
    markLearnCompleted: () => void;
}

const INITIAL_PROGRESS: UserProgress = {
    learnCompleted: false,
    practiceScores: {
        [ClauseType.MAIN]: 0,
        [ClauseType.SUBORDINATE]: 0,
        [ClauseType.RELATIVE]: 0,
        [ClauseType.CONJUNCTION]: 0,
        [ClauseType.PRONOUN]: 0,
    },
    tenseScores: {
        [TenseType.SIMPLE_PAST]: 0,
        [TenseType.SIMPLE_PRESENT]: 0,
        [TenseType.SIMPLE_FUTURE]: 0,
        [TenseType.PAST_PROGRESSIVE]: 0,
        [TenseType.PRESENT_PROGRESSIVE]: 0,
        [TenseType.PAST_PERFECT]: 0,
        [TenseType.PRESENT_PERFECT]: 0,
        [TenseType.MODAL]: 0,
    },
    voiceScores: {
        [VoiceType.ACTIVE]: 0,
        [VoiceType.PASSIVE]: 0,
    },
    masteryScore: 0,
    streak: 0,
};

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<UserProgress>(() => {
        const saved = localStorage.getItem('clause-explorer-progress');
        // Handle migration if needed by merging with INITIAL_PROGRESS
        const parsed = saved ? JSON.parse(saved) : INITIAL_PROGRESS;

        let migrated = { ...parsed };

        // Migration checks
        if (!migrated.tenseScores) {
            migrated.tenseScores = INITIAL_PROGRESS.tenseScores;
        }
        if (!migrated.voiceScores) {
            migrated.voiceScores = INITIAL_PROGRESS.voiceScores;
        }

        return migrated;
    });

    useEffect(() => {
        localStorage.setItem('clause-explorer-progress', JSON.stringify(progress));
    }, [progress]);

    const updatePracticeScore = (type: ClauseType, score: number) => {
        setProgress(prev => ({
            ...prev,
            practiceScores: {
                ...prev.practiceScores,
                [type]: Math.max(prev.practiceScores[type], score) // Keep highest score
            }
        }));
    };

    const updateTenseScore = (type: TenseType, score: number) => {
        setProgress(prev => ({
            ...prev,
            tenseScores: {
                ...prev.tenseScores,
                [type]: Math.max(prev.tenseScores[type], score)
            }
        }));
    };

    const updateVoiceScore = (type: VoiceType, score: number) => {
        setProgress(prev => ({
            ...prev,
            voiceScores: {
                ...prev.voiceScores,
                [type]: Math.max(prev.voiceScores[type], score)
            }
        }));
    };

    const updateMasteryScore = (score: number) => {
        setProgress(prev => ({
            ...prev,
            masteryScore: Math.max(prev.masteryScore, score)
        }));
    };

    const incrementStreak = () => {
        setProgress(prev => ({ ...prev, streak: prev.streak + 1 }));
    };

    const resetStreak = () => {
        setProgress(prev => ({ ...prev, streak: 0 }));
    };

    const markLearnCompleted = () => {
        setProgress(prev => ({ ...prev, learnCompleted: true }));
    };

    return (
        <GameStateContext.Provider value={{
            progress,
            updatePracticeScore,
            updateTenseScore,
            updateVoiceScore,
            updateMasteryScore,
            incrementStreak,
            resetStreak,
            markLearnCompleted
        }}>
            {children}
        </GameStateContext.Provider>
    );
};

export const useGameState = () => {
    const context = useContext(GameStateContext);
    if (!context) {
        throw new Error('useGameState must be used within a GameStateProvider');
    }
    return context;
};
