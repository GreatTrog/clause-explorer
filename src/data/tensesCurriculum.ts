import { TenseType } from '../types';
import type { LearnPage } from './curriculum';

export const TENSES_CONTENT: LearnPage[] = [
    // --- Simple Tenses ---
    {
        id: 'learn-simple-past',
        type: TenseType.SIMPLE_PAST,
        title: 'Simple Past',
        definition: 'Use the Simple Past to talk about things that have already happened and are finished.',
        mascotDialogue: "Add '-ed' to most verbs, but watch out for irregular ones like 'ran' or 'ate'!",
        exampleSentence: "Review: I watched the movie yesterday.",
        highlightedText: "watched"
    },
    {
        id: 'learn-simple-past-irregular-1',
        type: TenseType.SIMPLE_PAST,
        title: 'Irregular Verbs: Go, Eat, See',
        definition: 'Some verbs change completely in the past! They do not end in -ed.',
        mascotDialogue: "Go becomes Went. Eat becomes Ate. See becomes Saw.",
        exampleSentence: "I went to the shops and bought sweets.",
        highlightedText: "went"
    },
    {
        id: 'learn-simple-past-irregular-2',
        type: TenseType.SIMPLE_PAST,
        title: 'Irregular Verbs: Do, Have, Be',
        definition: 'These are super common! Do -> Did. Have -> Had. Be -> Was or Were.',
        mascotDialogue: "We use these all the time!",
        exampleSentence: "She had a great idea.",
        highlightedText: "had"
    },
    {
        id: 'learn-simple-present',
        type: TenseType.SIMPLE_PRESENT,
        title: 'Simple Present',
        definition: 'Use the Simple Present for facts, habits, or things that are true right now.',
        mascotDialogue: "I eat breakfast every day. The sun rises in the east.",
        exampleSentence: "She plays football on Saturdays.",
        highlightedText: "plays"
    },
    {
        id: 'learn-simple-future',
        type: TenseType.SIMPLE_FUTURE,
        title: 'Simple Future',
        definition: 'Use the Simple Future for things that haven\'t happened yet.',
        mascotDialogue: "It's easy! Just add 'will' before the verb.",
        exampleSentence: "We will go to the park tomorrow.",
        highlightedText: "will go"
    },

    // --- Progressive Tenses ---
    {
        id: 'learn-past-prog',
        type: TenseType.PAST_PROGRESSIVE,
        title: 'Past Progressive',
        definition: 'Describes an action that was ongoing in the past. It often sets the scene.',
        mascotDialogue: "Use 'was' or 'were' + an '-ing' verb.",
        exampleSentence: "I was reading when the phone rang.",
        highlightedText: "was reading"
    },
    {
        id: 'learn-pres-prog',
        type: TenseType.PRESENT_PROGRESSIVE,
        title: 'Present Progressive',
        definition: 'Describes an action happening right now, or around now.',
        mascotDialogue: "Use 'am', 'is', or 'are' + an '-ing' verb.",
        exampleSentence: "Look! It is snowing outside.",
        highlightedText: "is snowing"
    },

    // --- Perfect Tenses ---
    {
        id: 'learn-pres-perf',
        type: TenseType.PRESENT_PERFECT,
        title: 'Present Perfect',
        definition: 'Connects the past to the present. Something happened in the past but it matters now.',
        mascotDialogue: "Use 'have' or 'has' + the past participle (usually ending in -ed).",
        exampleSentence: "I have finished my homework.",
        highlightedText: "have finished"
    },
    {
        id: 'learn-past-perf',
        type: TenseType.PAST_PERFECT,
        title: 'Past Perfect',
        definition: 'The "past before the past". It shows which of two past actions happened first.',
        mascotDialogue: "Use 'had' + the past participle.",
        exampleSentence: "The train had left when we arrived.",
        highlightedText: "had left"
    },

    // --- Modals ---
    {
        id: 'learn-modals-1',
        type: TenseType.MODAL,
        title: 'Modal Verbs',
        definition: 'Modals are special helping verbs that show possibility, ability, or permission.',
        mascotDialogue: "Words like can, could, should, must, might, and will.",
        exampleSentence: "You must wear a helmet.",
        highlightedText: "must"
    },
    {
        id: 'learn-modals-2',
        type: TenseType.MODAL,
        title: 'Modals for Possibility',
        definition: 'We use modals to say how likely something is to happen.',
        mascotDialogue: "'Might' means maybe. 'Will' means definitely!",
        exampleSentence: "It might rain later today.",
        highlightedText: "might"
    }
];
