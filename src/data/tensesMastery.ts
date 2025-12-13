import type { MasteryQuestion } from './masteryQuestions';
import { MasteryQuestionType } from './masteryQuestions';
import { TenseType } from '../types';

export const TENSES_MASTERY_QUESTIONS: MasteryQuestion[] = [
    // --- DRAG AND DROP (Simple Tenses) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'tm-dd-1',
        instructions: 'Sort verbs into Past, Present, or Future.',
        zones: [TenseType.SIMPLE_PAST, TenseType.SIMPLE_PRESENT, TenseType.SIMPLE_FUTURE],
        items: [
            { id: 'i1', text: 'walked', category: TenseType.SIMPLE_PAST },
            { id: 'i2', text: 'waits', category: TenseType.SIMPLE_PRESENT },
            { id: 'i3', text: 'runs', category: TenseType.SIMPLE_PRESENT },
            { id: 'i4', text: 'will jump', category: TenseType.SIMPLE_FUTURE },
            { id: 'i5', text: 'saw', category: TenseType.SIMPLE_PAST },
            { id: 'i6', text: 'will go', category: TenseType.SIMPLE_FUTURE },
        ]
    },

    // --- TABLE CLASSIFICATION (Progressive) ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'tm-tab-1',
        instructions: 'Is it Past Progressive or Present Progressive?',
        columns: [TenseType.PAST_PROGRESSIVE, TenseType.PRESENT_PROGRESSIVE],
        rows: [
            { id: 'r1', text: 'was sleeping', correctType: TenseType.PAST_PROGRESSIVE },
            { id: 'r2', text: 'is eating', correctType: TenseType.PRESENT_PROGRESSIVE },
            { id: 'r3', text: 'were playing', correctType: TenseType.PAST_PROGRESSIVE },
            { id: 'r4', text: 'am reading', correctType: TenseType.PRESENT_PROGRESSIVE },
        ]
    },

    // --- SENTENCE COMPLETION (Perfect Tenses) ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'tm-comp-1',
        instructions: 'Complete with the correct helper verb.',
        sentenceBefore: 'I ',
        sentenceAfter: ' never seen such a thing before today.',
        options: [
            { id: 'o1', text: 'have', isCorrect: true },
            { id: 'o2', text: 'had', isCorrect: false },
            { id: 'o3', text: 'has', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'tm-comp-2',
        instructions: 'Choose the Past Perfect form.',
        sentenceBefore: 'She realized she ',
        sentenceAfter: ' her keys.',
        options: [
            { id: 'o1', text: 'had lost', isCorrect: true },
            { id: 'o2', text: 'has lost', isCorrect: false },
            { id: 'o3', text: 'lost', isCorrect: false },
        ]
    },

    // --- SELECTION (Find the Modal) ---
    {
        type: MasteryQuestionType.SELECT,
        id: 'tm-sel-1',
        clauseType: TenseType.MODAL, // This field is now GrammarCategory
        instructions: 'Tap the Modal Verb.',
        chunks: [
            { id: 'c1', text: 'You ', isCorrect: false },
            { id: 'c2', text: 'must', isCorrect: true },
            { id: 'c3', text: ' finish your vegetables.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'tm-sel-2',
        clauseType: TenseType.MODAL,
        instructions: 'Find the Modal expressing possibility.',
        chunks: [
            { id: 'c1', text: 'It ', isCorrect: false },
            { id: 'c2', text: 'might', isCorrect: true },
            { id: 'c3', text: ' snow tomorrow.', isCorrect: false },
        ]
    },

    // --- DRAG AND DROP (Perfect vs Progressive) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'tm-dd-2',
        instructions: 'Sort: Progressive (ing) or Perfect (have/had).',
        zones: [TenseType.PRESENT_PROGRESSIVE, TenseType.PRESENT_PERFECT],
        items: [
            { id: 'i1', text: 'is walking', category: TenseType.PRESENT_PROGRESSIVE },
            { id: 'i2', text: 'have walked', category: TenseType.PRESENT_PERFECT },
            { id: 'i3', text: 'has eaten', category: TenseType.PRESENT_PERFECT },
            { id: 'i4', text: 'am eating', category: TenseType.PRESENT_PROGRESSIVE },
        ]
    },

    // --- TABLE CLASSIFICATION (Simple vs Modal) ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'tm-tab-2',
        instructions: 'Is it a Simple Tense or a Modal?',
        columns: [TenseType.SIMPLE_PRESENT, TenseType.MODAL],
        rows: [
            { id: 'r1', text: 'She runs', correctType: TenseType.SIMPLE_PRESENT },
            { id: 'r2', text: 'She can run', correctType: TenseType.MODAL },
            { id: 'r3', text: 'We should go', correctType: TenseType.MODAL },
            { id: 'r4', text: 'We go', correctType: TenseType.SIMPLE_PRESENT },
        ]
    },

    // --- SENTENCE COMPLETION (Simple Past Irregular) ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'tm-comp-3',
        instructions: 'Choose the correct Simple Past form.',
        sentenceBefore: 'Yesterday, we ',
        sentenceAfter: ' a great movie.',
        options: [
            { id: 'o1', text: 'saw', isCorrect: true },
            { id: 'o2', text: 'see', isCorrect: false },
            { id: 'o3', text: 'seed', isCorrect: false },
        ]
    },

    // --- SELECTION (Find the Past Perfect) ---
    {
        type: MasteryQuestionType.SELECT,
        id: 'tm-sel-3',
        clauseType: TenseType.PAST_PERFECT,
        instructions: 'Find the Past Perfect phrase.',
        chunks: [
            { id: 'c1', text: 'When I arrived, the bus ', isCorrect: false },
            { id: 'c2', text: 'had left', isCorrect: true },
            { id: 'c3', text: ' already.', isCorrect: false },
        ]
    },

    // ===============================================
    // NEW: TYPE THE VERB (Strict Spelling)
    // ===============================================
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-1',
        instructions: 'Type the Simple Past Tense.',
        sentenceBefore: 'Last night I ',
        sentenceAfter: ' (sleep) for ten hours.',
        correctAnswer: 'slept',
        promptLabel: 'past of sleep'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-2',
        instructions: 'Type the Present Progressive (ing).',
        sentenceBefore: 'Look! It ',
        sentenceAfter: ' (snow) outside.',
        correctAnswer: 'is snowing',
        promptLabel: 'present progressive'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-3',
        instructions: 'Type the Past Participle.',
        sentenceBefore: 'I have ',
        sentenceAfter: ' (write) a letter.',
        correctAnswer: 'written',
        promptLabel: 'past participle'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-4',
        instructions: 'Type the Simple Future.',
        sentenceBefore: 'Tomorrow I ',
        sentenceAfter: ' (go) to the park.',
        correctAnswer: 'will go',
        promptLabel: 'simple future'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-5',
        instructions: 'Type the Past Tense (Irregular).',
        sentenceBefore: 'He ',
        sentenceAfter: ' (teach) us math last year.',
        correctAnswer: 'taught',
        promptLabel: 'past of teach'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-6',
        instructions: 'Type the Present Tense (3rd Person).',
        sentenceBefore: 'She always ',
        sentenceAfter: ' (watch) TV after school.',
        correctAnswer: 'watches',
        promptLabel: 'simple present'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-7',
        instructions: 'Type the Past Progressive.',
        sentenceBefore: 'We ',
        sentenceAfter: ' (play) when it started to rain.',
        correctAnswer: 'were playing',
        promptLabel: 'past progressive'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-8',
        instructions: 'Type the correct Modal.',
        sentenceBefore: 'You ',
        sentenceAfter: ' look left and right before crossing.',
        correctAnswer: 'should',
        promptLabel: 'advice'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-9',
        instructions: 'Type the Present Perfect.',
        sentenceBefore: 'He ',
        sentenceAfter: ' (eat) all the cake.',
        correctAnswer: 'has eaten',
        promptLabel: 'present perfect'
    },
    {
        type: MasteryQuestionType.TEXT_INPUT,
        id: 'tm-txt-10',
        instructions: 'Type the Past Tense.',
        sentenceBefore: 'The bird ',
        sentenceAfter: ' (fly) away.',
        correctAnswer: 'flew',
        promptLabel: 'past of fly'
    }
];
