export const AppMode = {
    HOME: 'HOME',
    LEARN: 'LEARN',
    PRACTICE: 'PRACTICE',
    MASTERY: 'MASTERY',
} as const;

export type AppMode = typeof AppMode[keyof typeof AppMode];

export const GrammarModule = {
    CLAUSES: 'CLAUSES',
    TENSES: 'TENSES',
} as const;

export type GrammarModule = typeof GrammarModule[keyof typeof GrammarModule];

export const ClauseType = {
    MAIN: 'MAIN',
    SUBORDINATE: 'SUBORDINATE',
    RELATIVE: 'RELATIVE',
    CONJUNCTION: 'CONJUNCTION',
    PRONOUN: 'PRONOUN',
} as const;

export type ClauseType = typeof ClauseType[keyof typeof ClauseType];

export interface UserProgress {
    learnCompleted: boolean;
    practiceScores: Record<ClauseType, number>;
    masteryScore: number;
    streak: number;
}

export const getClauseDisplayName = (type: ClauseType): string => {
    switch (type) {
        case ClauseType.MAIN: return 'Main Clause';
        case ClauseType.SUBORDINATE: return 'Subordinate Clause';
        case ClauseType.RELATIVE: return 'Relative Clause';
        case ClauseType.CONJUNCTION: return 'Subordinating Conjunction';
        case ClauseType.PRONOUN: return 'Relative Pronoun';
        default: return type;
    }
};
