import { MasteryQuestionType, type MasteryQuestion } from './masteryQuestions';
import { WordClassType } from '../types';

export const WORD_CLASSES_MASTERY_QUESTIONS: MasteryQuestion[] = [
    // --- DRAG AND DROP (Sort Words) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'wc-m-dd-1',
        instructions: 'Sort words into Nouns or Verbs.',
        zones: [WordClassType.NOUN, WordClassType.VERB],
        items: [
            { id: 'i1', text: 'Apple', category: WordClassType.NOUN },
            { id: 'i2', text: 'Run', category: WordClassType.VERB },
            { id: 'i3', text: 'Happiness', category: WordClassType.NOUN },
            { id: 'i4', text: 'Think', category: WordClassType.VERB },
            { id: 'i5', text: 'Jump', category: WordClassType.VERB },
            { id: 'i6', text: 'London', category: WordClassType.NOUN },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'wc-m-dd-2',
        instructions: 'Sort words into Adjectives or Adverbs.',
        zones: [WordClassType.ADJECTIVE, WordClassType.ADVERB],
        items: [
            { id: 'i1', text: 'Quick', category: WordClassType.ADJECTIVE },
            { id: 'i2', text: 'Quickly', category: WordClassType.ADVERB },
            { id: 'i3', text: 'Happy', category: WordClassType.ADJECTIVE },
            { id: 'i4', text: 'Happily', category: WordClassType.ADVERB },
            { id: 'i5', text: 'Loud', category: WordClassType.ADJECTIVE },
            { id: 'i6', text: 'There', category: WordClassType.ADVERB },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'wc-m-dd-3',
        instructions: 'Sort: Prepositions vs Pronouns.',
        zones: [WordClassType.PREPOSITION, WordClassType.PRONOUN],
        items: [
            { id: 'i1', text: 'Under', category: WordClassType.PREPOSITION },
            { id: 'i2', text: 'She', category: WordClassType.PRONOUN },
            { id: 'i3', text: 'With', category: WordClassType.PREPOSITION },
            { id: 'i4', text: 'They', category: WordClassType.PRONOUN },
            { id: 'i5', text: 'Myself', category: WordClassType.PRONOUN },
            { id: 'i6', text: 'From', category: WordClassType.PREPOSITION },
        ]
    },

    // --- TABLE SORTING ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'wc-m-tab-1',
        instructions: 'Classify as Concrete or Abstract Noun.',
        columns: ['Concrete (Tangible)', 'Abstract (Idea)'],
        rows: [
            { id: 'r1', text: 'Table', correctType: 'Concrete (Tangible)' },
            { id: 'r2', text: 'Freedom', correctType: 'Abstract (Idea)' },
            { id: 'r3', text: 'Idea', correctType: 'Abstract (Idea)' },
            { id: 'r4', text: 'Phone', correctType: 'Concrete (Tangible)' },
        ]
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'wc-m-tab-2',
        instructions: 'Classify the Adverb Type.',
        columns: ['Time (When)', 'Place (Where)'],
        rows: [
            { id: 'r1', text: 'Yesterday', correctType: 'Time (When)' },
            { id: 'r2', text: 'Here', correctType: 'Place (Where)' },
            { id: 'r3', text: 'Soon', correctType: 'Time (When)' },
            { id: 'r4', text: 'Everywhere', correctType: 'Place (Where)' },
        ]
    },

    // --- SELECTION (Identification) ---
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-1',
        clauseType: WordClassType.NOUN,
        instructions: 'Find the Collective Noun.',
        chunks: [
            { id: 'c1', text: 'A ', isCorrect: false },
            { id: 'c2', text: 'swarm', isCorrect: true },
            { id: 'c3', text: ' of bees.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-2',
        clauseType: WordClassType.VERB,
        instructions: 'Find the Mental Verb.',
        chunks: [
            { id: 'c1', text: 'I ', isCorrect: false },
            { id: 'c2', text: 'know', isCorrect: true },
            { id: 'c3', text: ' the answer.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-3',
        clauseType: WordClassType.ADJECTIVE,
        instructions: 'Find the Adjective.',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: 'tall', isCorrect: true },
            { id: 'c3', text: ' man walked.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-4',
        clauseType: WordClassType.ADVERB,
        instructions: 'Find the Adverb.',
        chunks: [
            { id: 'c1', text: 'She ran ', isCorrect: false },
            { id: 'c2', text: 'quickly', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-5',
        clauseType: WordClassType.PRONOUN,
        instructions: 'Find the Reflexive Pronoun.',
        chunks: [
            { id: 'c1', text: 'He hurt ', isCorrect: false },
            { id: 'c2', text: 'himself', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-6',
        clauseType: WordClassType.PREPOSITION,
        instructions: 'Find the Preposition.',
        chunks: [
            { id: 'c1', text: 'The book is ', isCorrect: false },
            { id: 'c2', text: 'under', isCorrect: true },
            { id: 'c3', text: ' the bed.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-7',
        clauseType: WordClassType.DETERMINER,
        instructions: 'Find the Demonstrative.',
        chunks: [
            { id: 'c1', text: 'I want ', isCorrect: false },
            { id: 'c2', text: 'that', isCorrect: true },
            { id: 'c3', text: ' one.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'wc-m-sel-8',
        clauseType: WordClassType.INTERJECTION,
        instructions: 'Find the Interjection.',
        chunks: [
            { id: 'c1', text: 'Ouch', isCorrect: true },
            { id: 'c2', text: '!', isCorrect: false },
            { id: 'c3', text: ' That hurt.', isCorrect: false },
        ]
    },

    // --- COMPLETE (Multiple Choice ID) ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-1',
        instructions: 'What is a Noun?',
        sentenceBefore: 'A Noun is a ',
        sentenceAfter: ' word.',
        options: [
            { id: 'o1', text: 'naming', isCorrect: true },
            { id: 'o2', text: 'doing', isCorrect: false },
            { id: 'o3', text: 'describing', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-2',
        instructions: 'Whose book is this?',
        sentenceBefore: 'This is ',
        sentenceAfter: ' book.',
        options: [
            { id: 'o1', text: 'my', isCorrect: true },
            { id: 'o2', text: 'mine', isCorrect: false },
            { id: 'o3', text: 'I', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-3',
        instructions: 'Choose the Adjective.',
        sentenceBefore: 'The ',
        sentenceAfter: ' dog barked.',
        options: [
            { id: 'o1', text: 'loud', isCorrect: true },
            { id: 'o2', text: 'loudly', isCorrect: false },
            { id: 'o3', text: 'loudness', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-4',
        instructions: 'Choose the Adverb.',
        sentenceBefore: 'He ran ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'fast', isCorrect: true },
            { id: 'o2', text: 'fastness', isCorrect: false },
            { id: 'o3', text: 'fasted', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-5',
        instructions: 'Select the Proper Noun.',
        sentenceBefore: 'We went to ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'Paris', isCorrect: true },
            { id: 'o2', text: 'city', isCorrect: false },
            { id: 'o3', text: 'town', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-6',
        instructions: 'What type of verb is "believe"?',
        sentenceBefore: '"Believe" is a ',
        sentenceAfter: ' action.',
        options: [
            { id: 'o1', text: 'mental', isCorrect: true },
            { id: 'o2', text: 'physical', isCorrect: false },
            { id: 'o3', text: 'state', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-7',
        instructions: 'Choose the Interjection.',
        sentenceBefore: '"',
        sentenceAfter: '! Look at the view!"',
        options: [
            { id: 'o1', text: 'Wow', isCorrect: true },
            { id: 'o2', text: 'See', isCorrect: false },
            { id: 'o3', text: 'Big', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-8',
        instructions: 'Choose the Preposition.',
        sentenceBefore: 'The cat jumped ',
        sentenceAfter: ' the fence.',
        options: [
            { id: 'o1', text: 'over', isCorrect: true },
            { id: 'o2', text: 'high', isCorrect: false },
            { id: 'o3', text: 'jumped', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-9',
        instructions: 'Choose the indefinite Article.',
        sentenceBefore: 'I saw ',
        sentenceAfter: ' elephant.',
        options: [
            { id: 'o1', text: 'an', isCorrect: true },
            { id: 'o2', text: 'a', isCorrect: false },
            { id: 'o3', text: 'the', isCorrect: false }, // 'the' is correct too contextually but 'an' is better for indefinite test. Wait, 'I saw the elephant' is valid. 'I saw an elephant' is valid. Let's make it unambiguous.
        ]
    },
    // Remaking comp-9 to be unambiguous
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-9-fixed',
        instructions: 'Choose the correct form.',
        sentenceBefore: 'I saw ',
        sentenceAfter: ' elephant.',
        options: [
            { id: 'o1', text: 'an', isCorrect: true },
            { id: 'o2', text: 'a', isCorrect: false },
            { id: 'o3', text: 'two', isCorrect: false }, // 'two' is determiner too... Let's use 'big' (adj) to be wrong class? No, instructions say 'Choose the correct form' usually implies grammar.
        ]
        // Let's change options: 'an' vs 'a'
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-10',
        instructions: 'What describes a noun?',
        sentenceBefore: 'A(n) ',
        sentenceAfter: ' describes a noun.',
        options: [
            { id: 'o1', text: 'Adjective', isCorrect: true },
            { id: 'o2', text: 'Adverb', isCorrect: false },
            { id: 'o3', text: 'Verb', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-11',
        instructions: 'What describes a verb?',
        sentenceBefore: 'A(n) ',
        sentenceAfter: ' describes a verb.',
        options: [
            { id: 'o1', text: 'Adverb', isCorrect: true },
            { id: 'o2', text: 'Adjective', isCorrect: false },
            { id: 'o3', text: 'Noun', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-12',
        instructions: 'Select the Compound Noun.',
        sentenceBefore: 'I bought some ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'toothpaste', isCorrect: true },
            { id: 'o2', text: 'paste', isCorrect: false },
            { id: 'o3', text: 'teeth', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-13',
        instructions: 'Which is a State of Being verb?',
        sentenceBefore: 'He ',
        sentenceAfter: ' tired.',
        options: [
            { id: 'o1', text: 'is', isCorrect: true },
            { id: 'o2', text: 'run', isCorrect: false },
            { id: 'o3', text: 'jump', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-14',
        instructions: 'Possessive Determiner vs Pronoun.',
        sentenceBefore: 'That is ',
        sentenceAfter: ' car.',
        options: [
            { id: 'o1', text: 'my', isCorrect: true },
            { id: 'o2', text: 'mine', isCorrect: false },
            { id: 'o3', text: 'I', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-15',
        instructions: 'Identify the word class of "Smart".',
        sentenceBefore: '"Smart" is usually an ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'Adjective', isCorrect: true },
            { id: 'o2', text: 'Adverb', isCorrect: false },
            { id: 'o3', text: 'Noun', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-16',
        instructions: 'Identify the word class of "Happily".',
        sentenceBefore: '"Happily" is an ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'Adverb', isCorrect: true },
            { id: 'o2', text: 'Adjective', isCorrect: false },
            { id: 'o3', text: 'Verb', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'wc-m-comp-17',
        instructions: 'Concrete vs Abstract.',
        sentenceBefore: '"Love" is an ',
        sentenceAfter: ' noun.',
        options: [
            { id: 'o1', text: 'Abstract', isCorrect: true },
            { id: 'o2', text: 'Concrete', isCorrect: false },
            { id: 'o3', text: 'Proper', isCorrect: false },
        ]
    },
];
