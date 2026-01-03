import { ClauseType, TenseType, VoiceType, WordClassType } from '../types';

export const MasteryQuestionType = {
    SELECT: 'SELECT',
    DRAG_DROP: 'DRAG_DROP',
    COMPLETE: 'COMPLETE',
    TABLE: 'TABLE',
    TEXT_INPUT: 'TEXT_INPUT',
    PUNCTUATION_EDIT: 'PUNCTUATION_EDIT',
} as const;

export type MasteryQuestionType = typeof MasteryQuestionType[keyof typeof MasteryQuestionType];

// Union type for any grammar category used in sorting/classification
export type GrammarCategory = ClauseType | TenseType | VoiceType | WordClassType | string;

export interface SelectQuestion {
    type: typeof MasteryQuestionType.SELECT;
    id: string;
    clauseType: GrammarCategory; // Used for "Find the X", fits both Clause and Tense
    instructions: string;
    chunks: { id: string; text: string; isCorrect: boolean }[];
}

export interface DragDropItem {
    id: string;
    text: string;
    category: GrammarCategory;
}

export interface DragDropQuestion {
    type: typeof MasteryQuestionType.DRAG_DROP;
    id: string;
    instructions: string;
    items: DragDropItem[];
    zones: GrammarCategory[];
}

export interface CompleteQuestion {
    type: typeof MasteryQuestionType.COMPLETE;
    id: string;
    instructions: string;
    sentenceBefore: string;
    sentenceAfter: string;
    options: { id: string; text: string; isCorrect: boolean }[];
}

export interface TextInputQuestion {
    type: typeof MasteryQuestionType.TEXT_INPUT;
    id: string;
    instructions: string;
    sentenceBefore: string;
    sentenceAfter: string;
    correctAnswer: string;
    promptLabel?: string; // e.g. "(to run)"
}

export interface PunctuationEditQuestion {
    type: typeof MasteryQuestionType.PUNCTUATION_EDIT;
    id: string;
    instructions: string;
    originalText: string;
    correctSentence: string | string[];
}

export interface TableRow {
    id: string;
    text: string;
    correctType: GrammarCategory;
}

export interface TableQuestion {
    type: typeof MasteryQuestionType.TABLE;
    id: string;
    instructions: string;
    columns: GrammarCategory[];
    rows: TableRow[];
}

export type MasteryQuestion = SelectQuestion | DragDropQuestion | CompleteQuestion | TableQuestion | TextInputQuestion | PunctuationEditQuestion;

export const MASTERY_QUESTIONS: MasteryQuestion[] = [
    // --- DRAG AND DROP (Sorting) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'm-dd-1',
        instructions: 'Sort into Main or Subordinate Clauses.',
        zones: [ClauseType.MAIN, ClauseType.SUBORDINATE],
        items: [
            { id: 'i1', text: 'I ran home', category: ClauseType.MAIN },
            { id: 'i2', text: 'because it rained', category: ClauseType.SUBORDINATE },
            { id: 'i3', text: 'although tired', category: ClauseType.SUBORDINATE },
            { id: 'i4', text: 'the sun set', category: ClauseType.MAIN },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'm-dd-2',
        instructions: 'Sort into Relative Clause or Main Clause.',
        zones: [ClauseType.MAIN, ClauseType.RELATIVE],
        items: [
            { id: 'i1', text: 'The bird flew', category: ClauseType.MAIN },
            { id: 'i2', text: 'who sang loudly', category: ClauseType.RELATIVE },
            { id: 'i3', text: 'which was blue', category: ClauseType.RELATIVE },
            { id: 'i4', text: 'I saw it', category: ClauseType.MAIN },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'm-dd-3',
        instructions: 'Sort the connecting words.',
        zones: [ClauseType.CONJUNCTION, ClauseType.PRONOUN],
        items: [
            { id: 'i1', text: 'because', category: ClauseType.CONJUNCTION },
            { id: 'i2', text: 'who', category: ClauseType.PRONOUN },
            { id: 'i3', text: 'which', category: ClauseType.PRONOUN },
            { id: 'i4', text: 'if', category: ClauseType.CONJUNCTION },
            { id: 'i5', text: 'that', category: ClauseType.PRONOUN },
            { id: 'i6', text: 'unless', category: ClauseType.CONJUNCTION },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'm-dd-4',
        instructions: 'Sort Main vs Subordinate.',
        zones: [ClauseType.MAIN, ClauseType.SUBORDINATE],
        items: [
            { id: 'i1', text: 'since you ask', category: ClauseType.SUBORDINATE },
            { id: 'i2', text: 'I will answer', category: ClauseType.MAIN },
            { id: 'i3', text: 'wait here', category: ClauseType.MAIN },
            { id: 'i4', text: 'until I return', category: ClauseType.SUBORDINATE },
        ]
    },

    // --- TABLE CLASSIFICATION ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'm-tab-1',
        instructions: 'Classify the clauses.',
        columns: [ClauseType.MAIN, ClauseType.SUBORDINATE],
        rows: [
            { id: 'r1', text: 'When the bell rang', correctType: ClauseType.SUBORDINATE },
            { id: 'r2', text: 'We went outside', correctType: ClauseType.MAIN },
            { id: 'r3', text: 'If you are good', correctType: ClauseType.SUBORDINATE },
            { id: 'r4', text: 'Eat your lunch', correctType: ClauseType.MAIN },
        ]
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'm-tab-2',
        instructions: 'Is it a Subordinate Clause or Relative Clause?',
        columns: [ClauseType.SUBORDINATE, ClauseType.RELATIVE],
        rows: [
            { id: 'r1', text: 'who lives next door', correctType: ClauseType.RELATIVE },
            { id: 'r2', text: 'because he is nice', correctType: ClauseType.SUBORDINATE },
            { id: 'r3', text: 'which is red', correctType: ClauseType.RELATIVE },
            { id: 'r4', text: 'although it is old', correctType: ClauseType.SUBORDINATE },
        ]
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'm-tab-3',
        instructions: 'Identify the word type.',
        columns: [ClauseType.CONJUNCTION, ClauseType.PRONOUN],
        rows: [
            { id: 'r1', text: 'who', correctType: ClauseType.PRONOUN },
            { id: 'r2', text: 'because', correctType: ClauseType.CONJUNCTION },
            { id: 'r3', text: 'while', correctType: ClauseType.CONJUNCTION },
            { id: 'r4', text: 'which', correctType: ClauseType.PRONOUN },
            { id: 'r5', text: 'that', correctType: ClauseType.PRONOUN },
        ]
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'm-tab-4',
        instructions: 'Trickier classification!',
        columns: [ClauseType.MAIN, ClauseType.RELATIVE],
        rows: [
            { id: 'r1', text: 'The dog barked', correctType: ClauseType.MAIN },
            { id: 'r2', text: 'who was scared', correctType: ClauseType.RELATIVE },
            { id: 'r3', text: 'that chased the cat', correctType: ClauseType.RELATIVE },
            { id: 'r4', text: 'It ran away', correctType: ClauseType.MAIN },
        ]
    },

    // --- SENTENCE COMPLETION ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'm-comp-1',
        instructions: 'Choose the correct Relative Clause.',
        sentenceBefore: 'The superhero, ',
        sentenceAfter: ', saved the city.',
        options: [
            { id: 'o1', text: 'who was strong', isCorrect: true },
            { id: 'o2', text: 'being strong', isCorrect: false },
            { id: 'o3', text: 'he is strong', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'm-comp-2',
        instructions: 'Choose the correct Subordinate Clause.',
        sentenceBefore: 'We stayed dry ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'because we had umbrellas', isCorrect: true },
            { id: 'o2', text: 'the rain stopped', isCorrect: false },
            { id: 'o3', text: 'wet rain', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'm-comp-3',
        instructions: 'Choose the correct Main Clause.',
        sentenceBefore: 'If you work hard, ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'you will succeed', isCorrect: true },
            { id: 'o2', text: 'succeeding is good', isCorrect: false },
            { id: 'o3', text: 'because you try', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'm-comp-4',
        instructions: 'Choose the correct Conjunction.',
        sentenceBefore: 'I was happy ',
        sentenceAfter: ' I won the prize.',
        options: [
            { id: 'o1', text: 'because', isCorrect: true },
            { id: 'o2', text: 'who', isCorrect: false },
            { id: 'o3', text: 'which', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'm-comp-5',
        instructions: 'Choose the correct Relative Pronoun.',
        sentenceBefore: 'The book ',
        sentenceAfter: ' I read was good.',
        options: [
            { id: 'o1', text: 'that', isCorrect: true },
            { id: 'o2', text: 'where', isCorrect: false },
            { id: 'o3', text: 'who', isCorrect: false },
        ]
    },

    // --- SELECTION (Find the X) ---
    {
        type: MasteryQuestionType.SELECT,
        id: 'm-sel-1',
        clauseType: ClauseType.RELATIVE,
        instructions: 'Find the Relative Clause.',
        chunks: [
            { id: 'c1', text: 'My mum, ', isCorrect: false },
            { id: 'c2', text: 'who loves baking', isCorrect: true },
            { id: 'c3', text: ', made a cake.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'm-sel-2',
        clauseType: ClauseType.SUBORDINATE,
        instructions: 'Find the Subordinate Clause.',
        chunks: [
            { id: 'c1', text: 'Unless you hurry, ', isCorrect: true },
            { id: 'c2', text: 'we will be late', isCorrect: false },
            { id: 'c3', text: '.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'm-sel-3',
        clauseType: ClauseType.MAIN,
        instructions: 'Find the Main Clause.',
        chunks: [
            { id: 'c1', text: 'If it snows, ', isCorrect: false },
            { id: 'c2', text: 'we will sled', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'm-sel-4',
        clauseType: ClauseType.CONJUNCTION,
        instructions: 'Find the Conjunction.',
        chunks: [
            { id: 'c1', text: 'I smile ', isCorrect: false },
            { id: 'c2', text: 'whenever', isCorrect: true },
            { id: 'c3', text: ' I see you.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'm-sel-5',
        clauseType: ClauseType.PRONOUN,
        instructions: 'Find the Relative Pronoun.',
        chunks: [
            { id: 'c1', text: 'The car ', isCorrect: false },
            { id: 'c2', text: 'which', isCorrect: true },
            { id: 'c3', text: ' passed mainly.', isCorrect: false },
        ]
    },

    // --- MORE DRAG AND DROP ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'm-dd-5',
        instructions: 'Sort Clauses vs Words.',
        zones: [ClauseType.MAIN, ClauseType.CONJUNCTION],
        items: [
            { id: 'i1', text: 'It rained', category: ClauseType.MAIN },
            { id: 'i2', text: 'because', category: ClauseType.CONJUNCTION },
            { id: 'i3', text: 'if', category: ClauseType.CONJUNCTION },
            { id: 'i4', text: 'We played', category: ClauseType.MAIN },
        ]
    },

    // --- MORE TABLE ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'm-tab-5',
        instructions: 'Identify the clause type.',
        columns: [ClauseType.SUBORDINATE, ClauseType.RELATIVE],
        rows: [
            { id: 'r1', text: 'whose fur is white', correctType: ClauseType.RELATIVE },
            { id: 'r2', text: 'provided that you try', correctType: ClauseType.SUBORDINATE },
            { id: 'r3', text: 'where we met', correctType: ClauseType.RELATIVE },
            { id: 'r4', text: 'as I walked', correctType: ClauseType.SUBORDINATE },
        ]
    }
];
