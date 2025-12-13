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
    VOICE: 'VOICE',
    WORD_CLASSES: 'WORD_CLASSES',
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

export const TenseType = {
    SIMPLE_PAST: 'SIMPLE_PAST',
    SIMPLE_PRESENT: 'SIMPLE_PRESENT',
    SIMPLE_FUTURE: 'SIMPLE_FUTURE',
    PAST_PROGRESSIVE: 'PAST_PROGRESSIVE',
    PRESENT_PROGRESSIVE: 'PRESENT_PROGRESSIVE',
    PAST_PERFECT: 'PAST_PERFECT',
    PRESENT_PERFECT: 'PRESENT_PERFECT',
    MODAL: 'MODAL',
} as const;

export type TenseType = typeof TenseType[keyof typeof TenseType];

export const VoiceType = {
    ACTIVE: 'ACTIVE',
    PASSIVE: 'PASSIVE',
} as const;

export type VoiceType = typeof VoiceType[keyof typeof VoiceType];

export const WordClassType = {
    NOUN: 'WC_NOUN',
    VERB: 'WC_VERB',
    ADJECTIVE: 'WC_ADJECTIVE',
    ADVERB: 'WC_ADVERB',
    PRONOUN: 'WC_PRONOUN',
    PREPOSITION: 'WC_PREPOSITION',
    DETERMINER: 'WC_DETERMINER',
    INTERJECTION: 'WC_INTERJECTION',
} as const;

export type WordClassType = typeof WordClassType[keyof typeof WordClassType];

export interface UserProgress {
    learnCompleted: boolean;
    practiceScores: Record<ClauseType, number>;
    tenseScores: Record<TenseType, number>;
    voiceScores: Record<VoiceType, number>;
    wordClassScores: Record<WordClassType, number>;
    masteryScore: number;
    streak: number;
}

export const getClauseDisplayName = (type: ClauseType | TenseType | VoiceType | WordClassType): string => {
    switch (type) {
        // Clauses
        case ClauseType.MAIN: return 'Main Clause';
        case ClauseType.SUBORDINATE: return 'Subordinate Clause';
        case ClauseType.RELATIVE: return 'Relative Clause';
        case ClauseType.CONJUNCTION: return 'Subordinating Conjunction';
        case ClauseType.PRONOUN: return 'Relative Pronoun'; // Keeps legacy Clause pronoun

        // Tenses
        case TenseType.SIMPLE_PAST: return 'Simple Past';
        case TenseType.SIMPLE_PRESENT: return 'Simple Present';
        case TenseType.SIMPLE_FUTURE: return 'Simple Future';
        case TenseType.PAST_PROGRESSIVE: return 'Past Progressive';
        case TenseType.PRESENT_PROGRESSIVE: return 'Present Progressive';
        case TenseType.PAST_PERFECT: return 'Past Perfect';
        case TenseType.PRESENT_PERFECT: return 'Present Perfect';
        case TenseType.MODAL: return 'Modal Verb';

        // Voice
        case VoiceType.ACTIVE: return 'Active Voice';
        case VoiceType.PASSIVE: return 'Passive Voice';

        // Word Classes
        case 'WC_NOUN': return 'Noun';
        case 'WC_VERB': return 'Verb';
        case 'WC_ADJECTIVE': return 'Adjective';
        case 'WC_ADVERB': return 'Adverb';
        case 'WC_PRONOUN': return 'Pronoun';
        case 'WC_PREPOSITION': return 'Preposition';
        case 'WC_DETERMINER': return 'Determiner';
        case 'WC_INTERJECTION': return 'Interjection';

        default: return (type as string).replace(/_/g, ' ');
    }
};
